using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class StylesController : ApiController
    {
        private const string InUseFilter = "inuse";
        private const string AllFilter = "all";
        private Repository _repository = new Repository();

        public IEnumerable<Style> Get(string id)
        {
            string filter = id.ToLowerInvariant();
            if (filter == AllFilter)
                return _repository.GetAllStyles();
            return null;

        }
    }
}
