[assembly: Microsoft.Owin.OwinStartup(typeof(AngularJSAuthentication.API.Startup))]

namespace AngularJSAuthentication.API
{
    using AspNet.Identity.MongoDB;
    using Autofac;
    using Autofac.Builder;
    using Autofac.Core;
    using Autofac.Integration.WebApi;
    using Entities;
    using Microsoft.AspNet.Identity;
    using Microsoft.Owin;
    using Microsoft.Owin.Security.Infrastructure;
    using Microsoft.Owin.Security.OAuth;
    using Owin;
    using Providers;
    using System;
    using System.Web.Http;

    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var builder = new ContainerBuilder();

            builder.RegisterType<MongoContext>().AsImplementedInterfaces<MongoContext, ConcreteReflectionActivatorData>().SingleInstance();

            builder.RegisterType<AuthRepository>().SingleInstance();

            //builder.RegisterType<AuthRepository>()
            //    .WithParameters(new Parameter[]
            //    {
            //        new ResolvedParameter((info, context) => info.Name == "mongoContext",
            //            (info, context) => context.Resolve<IMongoContext>()),
            //        new ResolvedParameter((info, context) => info.Name == "userManager",
            //            (info, context) => context.Resolve<ApplicationUserManager>())
            //    }).SingleInstance();

            builder.RegisterType<ApplicationIdentityContext>()
                .SingleInstance();

            builder.RegisterType<UserStore<User>>()
                .AsImplementedInterfaces<IUserStore<User>, ConcreteReflectionActivatorData>()
                .SingleInstance();

            builder.RegisterType<RoleStore<Role>>()
                .AsImplementedInterfaces<IRoleStore<Role>, ConcreteReflectionActivatorData>()
                .SingleInstance();

            builder.RegisterType<ApplicationUserManager>()
                .SingleInstance();

            builder.RegisterType<ApplicationRoleManager>()
                .SingleInstance();

            builder.RegisterType<SimpleAuthorizationServerProvider>()
                .AsImplementedInterfaces<IOAuthAuthorizationServerProvider, ConcreteReflectionActivatorData>().SingleInstance();

            builder.RegisterType<SimpleRefreshTokenProvider>()
                .AsImplementedInterfaces<IAuthenticationTokenProvider, ConcreteReflectionActivatorData>().SingleInstance();

            //builder.RegisterType<SimpleAuthorizationServerProvider>()
            //    .AsImplementedInterfaces<IOAuthAuthorizationServerProvider, ConcreteReflectionActivatorData>()
            //    .WithParameters(new Parameter[]
            //    {
            //        new NamedParameter("publicClientId", "self"),
            //        new ResolvedParameter((info, context) => info.Name == "userManager",
            //            (info, context) => context.Resolve<ApplicationUserManager>())
            //    });

            builder.RegisterApiControllers(typeof(Startup).Assembly);

            var container = builder.Build();

            app.UseAutofacMiddleware(container);

            var webApiDependencyResolver = new AutofacWebApiDependencyResolver(container);

            var configuration = new HttpConfiguration
            {
                DependencyResolver = webApiDependencyResolver
            };

            ConfigureOAuth(app, container);

            WebApiConfig.Register(configuration);

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            app.UseWebApi(configuration);

            app.UseAutofacWebApi(configuration);

            InitializeData(container);
        }

        private void ConfigureOAuth(IAppBuilder app, IContainer container)
        {
            var OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(30),
                Provider = container.Resolve<IOAuthAuthorizationServerProvider>(),
                RefreshTokenProvider = container.Resolve<IAuthenticationTokenProvider>()
            };

            // Token Generation
            app.UseOAuthAuthorizationServer(OAuthServerOptions);

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }

        private void InitializeData(IContainer container)
        {
            var mongoContext = container.Resolve<IMongoContext>();

            if (mongoContext.Clients.Count()==0)
            {
                mongoContext.Clients.Insert(new Client
                    {
                        Id = "ngAuthApp",
                        Secret = Helper.GetHash("abc@123"),
                        Name = "AngularJS front-end Application",
                        ApplicationType = Models.ApplicationTypes.JavaScript,
                        Active = true,
                        RefreshTokenLifeTime = 7200,
                        //AllowedOrigin = "http://localhost:32150",
                        AllowedOrigin = "http://ngauthenticationweb.azurewebsites.net"
                    });

                mongoContext.Clients.Insert(new Client
                {
                    Id = "consoleApp",
                    Secret = Helper.GetHash("123@abc"),
                    Name = "Console Application",
                    ApplicationType = Models.ApplicationTypes.NativeConfidential,
                    Active = true,
                    RefreshTokenLifeTime = 14400,
                    AllowedOrigin = "*"
                });
            }
        }
    }
}