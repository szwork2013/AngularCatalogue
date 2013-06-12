using System.Web.Optimization;

namespace AngularCatalogue.Web
{
    public class BundleConfig
    {
         public static void RegisterBundles(BundleCollection bundles)
         {
             bundles.Add(new StyleBundle("~/Content/base-styles.css")
                 .Include("~/Content/bootstrap.css"));

             bundles.Add(new ScriptBundle("~/Scripts/base-frameworks.js")
                 .Include("~/Scripts/jquery-{version}.js")
                 .Include("~/Scripts/angular.js")
                 .Include("~/Scripts/bootstrap.js"));

             bundles.Add(new ScriptBundle("~/Scripts/angular-catalogue.js")
                .Include("~/Scripts/app/app.js") // Configures the angular application
                .Include("~/Scripts/app/Services/colourService.js")
                .Include("~/Scripts/app/Services/productService.js")
                .Include("~/Scripts/app/Controllers/productSearchController.js"));
         }
    }
}