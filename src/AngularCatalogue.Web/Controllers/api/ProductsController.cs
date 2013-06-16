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

        public IEnumerable<Product> Get(string colours)
        {
            var colourIds = colours == null ? new int[0] : colours.Split(',').Select(int.Parse);
            return _repository.GetProducts(colourIds);
        }

        public Product Get(int id)
        {
            return _repository.GetProduct(id);
        }
    }
}
