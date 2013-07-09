using System.Collections.Generic;

namespace AngularCatalogue.Web.DataAccess
{
    public class Product
    {
        private List<ProductVariant> _variants;

        public Product()
        {
            _variants = new List<ProductVariant>();
        }

        public int Id { get; set; }
        public string Brand { get; set; }
        public int BrandId { get; set; }
        public string ProductName { get; set; }
        public string Style { get; set; }
        public int StyleId { get; set; }
        public string ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public string ProductImage { get; set; }
        public IEnumerable<ProductVariant> Variants
        {
            get { return _variants; }
        }
        public void AddVariant(ProductVariant variant)
        {
            _variants.Add(variant);
        }
        public void AddVariants(IEnumerable<ProductVariant> variants)
        {
            _variants.AddRange(variants);
        }
    }
}