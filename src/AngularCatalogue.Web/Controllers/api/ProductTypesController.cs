using System.Collections.Generic;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class ProductTypesController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<ProductType> Get()
        {
            return _repository.GetProductTypes();
        }
    }
}
