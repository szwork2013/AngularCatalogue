using System.Web.Optimization;

namespace AngularCatalogue.Web
{
    public class BundleConfig
    {
         public static void RegisterBundles(BundleCollection bundles)
         {
             bundles.Add(new ScriptBundle("~/Scripts/base-frameworks.js")
                 .Include("~/Scripts/jquery-{version}.js")
                 .Include("~/Scripts/angular.js")
                 .Include("~/Scripts/bootstrap.js"));

             bundles.Add(new StyleBundle("~/Content/base-styles.css")
                 .Include("~/Content/bootstrap.css"));
         }
    }
}