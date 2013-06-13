using System.Collections.Generic;
using System.Data.SqlClient;
using System.Configuration;
using System.Linq;
using Dapper;

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
         public IEnumerable<Product> GetProducts()
         {
             using (var conn = GetConnection())
             {
                 return conn.Query<Product>("SELECT * FROM FlattenedProducts");
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

        public IEnumerable<ProductType> GetProductTypes()
        {
            using (var conn = GetConnection())
            {
                return conn.Query<ProductType>("SELECT * FROM BrandUsage ORDER BY Caption");
            }
        }

    }
}