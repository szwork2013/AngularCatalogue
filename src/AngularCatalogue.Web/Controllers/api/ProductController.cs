using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class ProductController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<Product> Get()
        {
            return _repository.GetProducts();
        }

        public Product Get(int id)
        {
            return _repository.GetProduct(id);
        }
    }
}
