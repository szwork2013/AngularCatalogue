using System.Collections.Generic;
using System.Data.SqlClient;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Text;
using Dapper;
using AngularCatalogue.Web.DataAccess.SqlBuilder;

namespace AngularCatalogue.Web.DataAccess
{
    public class Repository
    {
        private SqlConnection GetConnection()
        {
            string connectionString = ConfigurationManager.ConnectionStrings["Standard"].ConnectionString;
            SqlConnection result = new SqlConnection(connectionString);
            result.Open();
            return result;
        }

         public IEnumerable<Product> GetProducts(IEnumerable<int> colourIds, IEnumerable<int> brandIds, IEnumerable<int> productTypeIds, IEnumerable<int> sizeIds)
         {
             using (var conn = GetConnection())
             {
                 FilterCombiner filter = new FilterCombiner();
                 StringBuilder sb = new StringBuilder();
                 
                 sb.AppendLine("SELECT DISTINCT fp.*");
                 sb.AppendLine("FROM FlattenedProducts fp ");
                 sb.AppendLine("INNER JOIN ProductVariants pv ON fp.Id = pv.ProductId");
                 sb.AppendLine("INNER JOIN Products p ON p.Id = fp.Id");
                 if (colourIds.Any())
                 {
                     sb.Append(filter.Clause);
                     sb.AppendLine("pv.colourId IN @colourId");
                 }
                 if (brandIds.Any())
                 {
                     sb.Append(filter.Clause);
                     sb.AppendLine("p.brandId IN @brandId");
                 }
                 if (productTypeIds.Any())
                 {
                     sb.Append(filter.Clause);
                     sb.AppendLine("p.productTypeId IN @productTypeId");
                 }
                 if (sizeIds.Any())
                 {
                     sb.Append(filter.Clause);
                     sb.AppendLine("pv.sizeId IN @sizeId");
                 }
                 string sql = sb.ToString();
                 Trace.WriteLine(sql);
                 return conn.Query<Product>(sql, new{colourId = colourIds, brandId = brandIds, productTypeId = productTypeIds, sizeId = sizeIds});
             }
         }

        public Product GetProduct(int id)
        {
            using (var conn = GetConnection())
            {
                var grid = conn.QueryMultiple(
                    "SELECT * FROM FlattenedProducts WHERE Id = @id; SELECT * FROM FlattenedProductVariants WHERE ProductId = @id",
                    new {id});
                var result = grid.Read<Product>().FirstOrDefault();
                if (result == null)
                    return null;

                var variants = grid.Read<ProductVariant>();
                result.AddVariants(variants);

                return result;
            }
        }

        public IEnumerable<Colour> GetColours()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<Colour>("SELECT * FROM ColourUsage ORDER BY Caption");
            }
        }

        public IEnumerable<Brand> GetBrands()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<Brand>("SELECT * FROM BrandUsage ORDER BY Caption");
            }
        }

        public IEnumerable<Brand> GetAllBrands()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<Brand>("SELECT * FROM Brands ORDER BY Caption");
            }
        }

        public IEnumerable<ProductType> GetProductTypes()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<ProductType>("SELECT * FROM ProductTypeUsage ORDER BY Caption");
            }
        }

        public IEnumerable<ProductType> GetAllProductTypes()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<ProductType>("SELECT * FROM ProductTypes ORDER BY Caption");
            }
        }

        public IEnumerable<Style> GetAllStyles()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<Style>("SELECT * FROM Styles ORDER BY Caption");
            }
        }
        
        public IEnumerable<Size> GetSizes()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<Size>("SELECT * FROM SizeUsage");
            }            
        }

    }
}