USE AngularCatalogue
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[SizeUsage]'))
DROP VIEW [dbo].[SizeUsage]
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[ProductTypeUsage]'))
DROP VIEW [dbo].[ProductTypeUsage]
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[BrandUsage]'))
DROP VIEW [dbo].[BrandUsage]
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[ColourUsage]'))
DROP VIEW [dbo].[ColourUsage]
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[FlattenedProducts]'))
DROP VIEW [dbo].[FlattenedProducts]
GO
IF  EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[FlattenedProductVariants]'))
DROP VIEW [dbo].[FlattenedProductVariants]
GO

IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ProductVariants_Colours]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProductVariants]'))
ALTER TABLE [dbo].[ProductVariants] DROP CONSTRAINT [FK_ProductVariants_Colours]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ProductVariants_Products]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProductVariants]'))
ALTER TABLE [dbo].[ProductVariants] DROP CONSTRAINT [FK_ProductVariants_Products]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_ProductVariants_Sizes]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProductVariants]'))
ALTER TABLE [dbo].[ProductVariants] DROP CONSTRAINT [FK_ProductVariants_Sizes]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProductVariants]') AND type in (N'U'))
DROP TABLE [dbo].[ProductVariants]
GO



IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Products_Styles]') AND parent_object_id = OBJECT_ID(N'[dbo].[Products]'))
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_Styles]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Products_Brands]') AND parent_object_id = OBJECT_ID(N'[dbo].[Products]'))
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_Brands]
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Products_ProductTypes]') AND parent_object_id = OBJECT_ID(N'[dbo].[Products]'))
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_ProductTypes]
GO
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Products]') AND type in (N'U'))
DROP TABLE [dbo].[Products]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Brands]') AND type in (N'U'))
DROP TABLE [dbo].[Brands]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Colours]') AND type in (N'U'))
DROP TABLE [dbo].[Colours]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProductTypes]') AND type in (N'U'))
DROP TABLE [dbo].[ProductTypes]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Sizes]') AND type in (N'U'))
DROP TABLE [dbo].[Sizes]
GO

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Styles]') AND type in (N'U'))
DROP TABLE [dbo].[Styles]
GO




CREATE TABLE [dbo].[Brands](
	[Id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Caption] [nvarchar](100) NOT NULL
) ON [PRIMARY]

GO

CREATE TABLE ProductTypes
(
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Caption NVARCHAR(100) NOT NULL
)

CREATE TABLE Sizes
(
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Caption NVARCHAR(100) NOT NULL
)

CREATE TABLE Colours
(
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Caption NVARCHAR(100) NOT NULL
)

CREATE TABLE Styles
(
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Caption NVARCHAR(100) NOT NULL
)


CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Caption] [nvarchar](100) NOT NULL,
	[BrandId] [int] NOT NULL,
	[ProductTypeId] [int] NOT NULL,
	[StyleId] [int] NOT NULL,
	[ProductImage] [nvarchar](256) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Brands] FOREIGN KEY([BrandId])
REFERENCES [dbo].[Brands] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Brands]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ProductTypes] FOREIGN KEY([ProductTypeId])
REFERENCES [dbo].[ProductTypes] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ProductTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Styles] FOREIGN KEY([StyleId])
REFERENCES [dbo].[Styles] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Styles]
GO




CREATE TABLE [dbo].[ProductVariants](
	[ProductId] [int] NOT NULL,
	[ColourId] [int] NOT NULL,
	[SizeId] [int] NOT NULL,
	[InventoryCount] [int] NOT NULL
 CONSTRAINT [PK_ProductVariants] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC,
	[ColourId] ASC,
	[SizeId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[ProductVariants]  WITH CHECK ADD  CONSTRAINT [FK_ProductVariants_Colours] FOREIGN KEY([ColourId])
REFERENCES [dbo].[Colours] ([Id])
GO
ALTER TABLE [dbo].[ProductVariants] CHECK CONSTRAINT [FK_ProductVariants_Colours]
GO
ALTER TABLE [dbo].[ProductVariants]  WITH CHECK ADD  CONSTRAINT [FK_ProductVariants_Products] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Products] ([Id])
GO
ALTER TABLE [dbo].[ProductVariants] CHECK CONSTRAINT [FK_ProductVariants_Products]
GO
ALTER TABLE [dbo].[ProductVariants]  WITH CHECK ADD  CONSTRAINT [FK_ProductVariants_Sizes] FOREIGN KEY([SizeId])
REFERENCES [dbo].[Sizes] ([Id])
GO
ALTER TABLE [dbo].[ProductVariants] CHECK CONSTRAINT [FK_ProductVariants_Sizes]
GO
CREATE VIEW FlattenedProducts
AS
SELECT p.Id, b.Caption AS Brand, p.Caption AS ProductName, s.Caption AS Style, pt.Caption AS ProductType, p.ProductImage
FROM Products p
INNER JOIN Brands b ON p.BrandId = b.Id
INNER JOIN ProductTypes pt ON p.ProductTypeId = pt.Id
INNER JOIN Styles s ON p.StyleId = s.Id;
GO
CREATE VIEW FlattenedProductVariants
AS
SELECT p.Id AS ProductId, pv.SizeId, pv.ColourId, sz.Caption AS Size, c.Caption AS Colour, pv.InventoryCount
FROM Products p
INNER JOIN ProductVariants pv ON p.Id = pv.ProductId
INNER JOIN Sizes sz ON pv.SizeId = sz.Id
INNER JOIN Colours c ON pv.ColourId = c.Id;
GO

CREATE VIEW ColourUsage
AS
SELECT c.Id, c.Caption, SUM(pv.InventoryCount) AS InventoryCount
FROM Colours c
INNER JOIN ProductVariants pv ON pv.ColourId = c.Id
GROUP BY c.Id, c.Caption;
GO

CREATE VIEW BrandUsage
AS
SELECT b.Id, b.Caption, SUM(pv.InventoryCount) AS InventoryCount
FROM Brands b
INNER JOIN Products p ON p.BrandId = b.Id
INNER JOIN ProductVariants pv ON pv.ProductId = p.Id
GROUP BY b.Id, b.Caption;
GO

CREATE VIEW ProductTypeUsage
AS
SELECT pt.Id, pt.Caption, SUM(pv.InventoryCount) AS InventoryCount
FROM ProductTypes pt
INNER JOIN Products p ON p.ProductTypeId = pt.Id
INNER JOIN ProductVariants pv ON pv.ProductId = p.Id
GROUP BY pt.Id, pt.Caption;
GO

CREATE VIEW SizeUsage
AS
SELECT s.Id, s.Caption, SUM(pv.InventoryCount) AS InventoryCount
FROM Sizes s
INNER JOIN ProductVariants pv ON pv.SizeId = s.Id
GROUP BY s.Id, s.Caption;
GO

INSERT INTO Sizes(Caption)
VALUES('XS'),('S'),('M'),('L'),('XL'),('2XL'),
	('28S'), ('28R'), ('28L'), ('30S'), ('30R'), ('30L'),
	('32S'), ('32R'), ('32L'), ('34S'), ('34R'), ('34L'),
	('36S'), ('36R'), ('36L'), ('38S'), ('38R'), ('38L'),
	('40'), ('42'), ('44'), ('46')
	

INSERT INTO Colours(Caption)
VALUES('Black'), ('Blue'), ('Beige'), ('Cream'), ('Grey'), ('Navy'), ('Pink'),
  ('Red'), ('Stone'), ('White'), ('Brown'), ('Green'), ('Multicoloured'),
  ('Orange'), ('Purple'), ('Silver'), ('Tan'), ('Yellow');
  
INSERT INTO Brands(Caption)
VALUES ('Addidas'), ('American Apparel'), ('Andrew Christian'), ('ASOS'), 
  ('AussieBums'), ('Ben Sherman'), ('Bench'), ('Converse'), 
  ('Criminal Damage'), ('Fred Perry'), ('G-Star'), ('Hugo Boss'), 
  ('Jack & Jones'), ('Levis'), ('Polo Ralph Lauren'), ('River Island'), 
  ('Speedo'), ('Ted Baker'), ('United Colors of Benetton'), ('Vans')
  
INSERT INTO ProductTypes(Caption)
VALUES ('T-Shirt'), ('Jeans'), ('Polo-Shirt'), ('Jacket')
  
INSERT INTO Styles(Caption)
VALUES ('Long sleeve'), ('Regular sleeve'), ('Rolled Sleeve'), ('Capped Sleeve'),
  ('Slim fit'), ('Regular fit'), ('Boot cut'), ('Denim')
  
INSERT INTO Products(BrandId, ProductTypeId, StyleId, Caption, ProductImage)
VALUES
	(1,1,2,'Sportif', 'tshirt-1.png'), -- Addidas, Tshirt, Regular sleeve
	(2,1,1,'Relaxx', 'tshirt-2.png'), -- American Apparel, tshirt, long-sleeve
	(4,1,3,'Flow', 'tshirt-3.png'), -- ASOS, tshirt,rolled-sleeve
	(4,1,4,'Eksell', 'tshirt-4.png'), -- ASOS, tshirt,capped-sleeve
	(4,2,5,'Jim''s', 'jeans-5.png'), -- ASOS, Jeans, slim-fit
	(4,2,5,'Bob''s', 'jeans-6.png'), -- ASOS, Jeans, regular-fit
	(14,2,6,'501s', 'jeans-7.png'), -- Levis, Jeans, boot-cut
	(13,3,5,'Planet', 'polo-shirt-8.png'),
	(13,3,5,'Mercury', 'polo-shirt-9.png'),
	(13,3,5,'Venus', 'polo-shirt-10.png'),
	(13,3,5,'Mars', 'polo-shirt-11.png'),
	(13,3,5,'Saturn', 'polo-shirt-12.png'),
	(13,3,5,'Jupiter', 'polo-shirt-13.png'),
	(13,3,5,'Neptune', 'polo-shirt-14.png'),
	(16,4,8,'Discovery', 'denim-jacket-15.png')
	
	
INSERT INTO ProductVariants(ProductId, SizeId, ColourId, InventoryCount)
VALUES
	(1,1,5,10),(1,2,5,10),(1,3,5,10),(1,4,5,10),(1,5,5,10),
	(2,2,8,10),(2,3,8,10),(2,4,8,10),(2,5,8,10),(2,6,8,10),
	(3,1,12,5),(3,2,12,5),(3,3,12,5),(3,4,12,5),(3,5,12,5),(3,6,12,5),
	(4,1,2,15),(4,2,2,15),(4,3,2,15),(4,4,2,15),(4,5,2,15),(4,6,2,15),
	(5,7,6,7),(5,8,6,5),(5,9,6,5),(5,10,6,5),(5,11,6,5),(5,12,6,5),
	(5,13,6,8),(5,14,6,5),(5,15,6,5),(5,16,6,5),(5,17,6,5),(5,18,6,5),
	(5,19,6,9),(5,20,6,5),(5,21,6,5),(5,22,6,5),(5,23,6,5),(5,24,6,5),
	(6,7,6,4),(6,8,6,5),(6,9,6,5),(6,10,6,5),(6,11,6,5),(6,12,6,5),
	(6,13,6,5),(6,14,6,5),(6,15,6,5),(6,16,6,5),(6,17,6,5),(6,18,6,5),
	(6,19,6,6),(6,20,6,5),(6,21,6,5),(6,22,6,5),(6,23,6,5),(6,24,6,5),
	(7,7,6,1),(7,8,6,5),(7,9,6,5),(7,10,6,5),(7,11,6,5),(7,12,6,5),
	(7,13,6,2),(7,14,6,5),(7,15,6,5),(7,16,6,5),(7,17,6,5),(7,18,6,5),
	(7,19,6,3),(7,20,6,5),(7,21,6,5),(7,22,6,5),(7,23,6,5),(7,24,6,5),
	(8,1,8,1),(8,2,8,1),(8,3,8,1),(8,4,8,1),(8,5,8,1),(8,6,8,1),
	(9,1,2,1),(9,2,2,1),(9,3,2,1),(9,4,2,1),(9,5,2,1),(8,6,2,1),
	(10,1,7,1),(10,2,7,1),(10,3,7,1),(10,4,7,1),(8,5,7,1),(8,6,7,1),
	(10,1,15,1),(10,2,15,1),(10,3,15,1),(10,4,15,1),(8,5,15,1),(8,6,15,0),
	(11,1,10,1),(11,2,10,1),(11,3,10,1),(11,4,10,1),(11,5,10,1),(11,6,10,1),
	(12,1,10,1),(12,2,10,1),(12,3,10,1),(12,4,10,1),(12,5,10,1),(12,6,10,1),
	(13,1,14,1),(13,2,14,1),(13,3,14,1),(13,4,14,1),(13,5,14,1),(13,6,14,1),
	(14,1,8,1),(14,2,8,1),(14,3,8,1),(14,4,8,1),(14,5,8,1),(14,6,8,1),
	(15,25,2,4),(15,26,2,7),(15,27,2,9),(15,28,2,2)


SELECT * FROM FlattenedProducts
SELECT * FROM FlattenedProductVariants
SELECT * FROM ColourUsage
SELECT * FROM BrandUsage
SELECT * FROM ProductTypeUsage
SELECT * FROM SizeUsage