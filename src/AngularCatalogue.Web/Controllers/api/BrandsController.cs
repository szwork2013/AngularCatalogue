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
        private const string InUseFilter = "inuse";
        private const string AllFilter = "all";
        private Repository _repository = new Repository();

        public IEnumerable<Brand> Get(string id)
        {
            string filter = id.ToLowerInvariant();
            if (filter == InUseFilter)
                return _repository.GetBrands();
            if (filter == AllFilter)
                return _repository.GetAllBrands();
            return null;
        }
    }
}
