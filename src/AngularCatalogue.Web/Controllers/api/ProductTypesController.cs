using System.Collections.Generic;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class ProductTypesController : ApiController
    {
        private const string InUseFilter = "inuse";
        private const string AllFilter = "all";
        private Repository _repository = new Repository();

        public IEnumerable<ProductType> Get(string id)
        {
            string filter = id.ToLowerInvariant();
            if (filter == InUseFilter)
                return _repository.GetProductTypes();
            if (filter == AllFilter)
                return _repository.GetAllProductTypes();
            return null;
        }
    }
}
