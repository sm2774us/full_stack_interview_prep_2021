namespace AngularJSAuthentication.API
{
    using AspNet.Identity.MongoDB;
    using Entities;
    using Microsoft.AspNet.Identity;

    public class ApplicationUserManager : UserManager<User>
    {
        public ApplicationUserManager(ApplicationIdentityContext identityContext)
            : base(new UserStore<User>(identityContext))
        {
        }
    }
}