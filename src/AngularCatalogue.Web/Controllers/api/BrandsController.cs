using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class BrandsController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<Brand> Get()
        {
            return _repository.GetBrands();
        }
    }
}
