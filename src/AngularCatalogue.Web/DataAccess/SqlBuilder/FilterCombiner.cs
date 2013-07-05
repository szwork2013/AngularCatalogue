using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularCatalogue.Web.DataAccess.SqlBuilder
{
    public class FilterCombiner
    {
        private const string FirstCombiner = " WHERE ";
        private const string SubsequentCombiner = " AND ";
        private bool isFirst = true;

        public string Clause
        {
            get
            {
                if (isFirst)
                {
                    isFirst = false;
                    return FirstCombiner;
                }
                else
                    return SubsequentCombiner;
            }
        }
    }
}