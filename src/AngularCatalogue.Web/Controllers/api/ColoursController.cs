using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularCatalogue.Web.DataAccess;

namespace AngularCatalogue.Web.Controllers.api
{
    public class ColoursController : ApiController
    {
        private Repository _repository = new Repository();

        public IEnumerable<Colour> Get()
        {
            return _repository.GetColours();
        }
    }
}
