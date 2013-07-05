using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class ProductsController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<Product> Get(string colours, string brands, string productTypes, string sizes)
        {
            var colourIds = parseIds(colours);
            var brandIds = parseIds(brands);
            var productTypeIds = parseIds(productTypes);
            var sizeIds = parseIds(sizes);
            return _repository.GetProducts(colourIds, brandIds, productTypeIds, sizeIds);
        }

        private IEnumerable<int> parseIds(string idString)
        {
            IEnumerable<int> result = idString == null 
                ? new int[0] 
                : idString.Split(',').Select(int.Parse);
            return result;
        }

        public Product Get(int id)
        {
            return _repository.GetProduct(id);
        }
    }
}
