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
                 .Include("~/Scripts/angular-resource.js")
                 .Include("~/Scripts/bootstrap.js"));

             bundles.Add(new ScriptBundle("~/Scripts/angular-catalogue.js")
                .Include("~/ngapp/app.js") // Configures the angular application
                .Include("~/ngapp/Services/colourService.js")
                .Include("~/ngapp/Services/brandService.js")
                .Include("~/ngapp/Services/productTypeService.js")
                .Include("~/ngapp/Services/productService.js")
                .Include("~/ngapp/Services/sizeService.js")
                .Include("~/ngapp/Controllers/productSearchController.js"));
         }
    }
}