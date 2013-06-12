namespace AngularCatalogue.Web.DataAccess
{
    public class ProductVariant
    {
        private Product _product;
        public int ProductId { get; set; }
        public int SizeId { get; set; }
        public int ColourId { get; set; }
        public string Size { get; set; }
        public string Colour { get; set; }
    }
}