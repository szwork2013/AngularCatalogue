using System.Collections.Generic;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class SizesController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<Size> Get()
        {
            return _repository.GetSizes();
        }
    }
}
