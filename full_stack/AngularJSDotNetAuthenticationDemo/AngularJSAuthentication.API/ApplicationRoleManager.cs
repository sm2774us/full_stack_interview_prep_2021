namespace AngularJSAuthentication.API
{
    using AspNet.Identity.MongoDB;
    using Entities;
    using Microsoft.AspNet.Identity;

    public class ApplicationRoleManager : RoleManager<Role>
    {
        public ApplicationRoleManager(ApplicationIdentityContext identityContext)
            : base(new RoleStore<Role>(identityContext))
        {
        }
    }
}