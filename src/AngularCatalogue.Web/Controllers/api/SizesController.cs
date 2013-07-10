using System.Collections.Generic;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class SizesController : ApiController
    {
      private const string InUseFilter = "inuse";
      private const string AllFilter = "all"; 
      private Repository _repository = new Repository();

        public IEnumerable<Size> Get(string id)
        {
          string filter = id.ToLowerInvariant();
          if (filter == InUseFilter)
            return _repository.GetSizes();
          if (filter == AllFilter)
            return _repository.GetAllSizes();
          return null;

        }
    }
}
