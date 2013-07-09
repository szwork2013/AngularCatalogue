using System.Web.Optimization;

namespace AngularCatalogue.Web
{
    public class BundleConfig
    {
         public static void RegisterBundles(BundleCollection bundles)
         {
             bundles.Add(new StyleBundle("~/Content/base-styles.css")
                 .Include("~/Content/bootstrap.css")
                 .Include("~/Content/angular-ui.css")
                 .Include("~/Content/angularCatalogue.css"));

             bundles.Add(new ScriptBundle("~/Scripts/base-frameworks.js")
                 .Include("~/Scripts/jquery-{version}.js")
                 .Include("~/Scripts/angular.js")
                 .Include("~/Scripts/angular-resource.js")
                 .Include("~/Scripts/angular-ui.js")
                 .Include("~/Scripts/bootstrap.js"));

             bundles.Add(new ScriptBundle("~/Scripts/angular-catalogue.js")
             // Configure the Angular Application
                .Include("~/ngapp/app.js")

             // The services
                .Include("~/ngapp/Services/colourService.js")
                .Include("~/ngapp/Services/brandService.js")
                .Include("~/ngapp/Services/productTypeService.js")
                .Include("~/ngapp/Services/productService.js")
                .Include("~/ngapp/Services/sizeService.js")

            // Directives
                .Include("~/ngapp/Directives/userFilter.js")

            // Controllers
                .Include("~/ngapp/Controllers/productSearchController.js")
                .Include("~/ngapp/Controllers/productDetailController.js")
                .Include("~/ngapp/Controllers/editProductController.js"));
                
         }
    }
}