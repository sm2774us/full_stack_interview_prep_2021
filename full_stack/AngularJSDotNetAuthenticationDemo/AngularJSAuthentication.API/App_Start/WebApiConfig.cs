namespace AngularJSAuthentication.API
{
    using Newtonsoft.Json.Serialization;
    using System.Linq;
    using System.Net.Http.Formatting;
    using System.Web.Http;

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            // Web API routes
            configuration.MapHttpAttributeRoutes();

            configuration.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var jsonFormatter = configuration.Formatters.OfType<JsonMediaTypeFormatter>().First();

            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
