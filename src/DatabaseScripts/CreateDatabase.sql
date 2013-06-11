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



IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[FK_Products_Style]') AND parent_object_id = OBJECT_ID(N'[dbo].[Products]'))
ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_Style]
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

IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Style]') AND type in (N'U'))
DROP TABLE [dbo].[Style]
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

CREATE TABLE Style
(
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Caption NVARCHAR(100) NOT NULL
)


USE [AngularCatalogue]
GO

/****** Object:  Table [dbo].[Products]    Script Date: 06/12/2013 00:07:30 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
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
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Brands] FOREIGN KEY([BrandsId])
REFERENCES [dbo].[Brands] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Brands]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_ProductTypes] FOREIGN KEY([ProductTypeId])
REFERENCES [dbo].[ProductTypes] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_ProductTypes]
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD  CONSTRAINT [FK_Products_Style] FOREIGN KEY([StyleId])
REFERENCES [dbo].[Style] ([Id])
GO
ALTER TABLE [dbo].[Products] CHECK CONSTRAINT [FK_Products_Style]
GO




CREATE TABLE [dbo].[ProductVariants](
	[ProductId] [int] NOT NULL,
	[ColourId] [int] NOT NULL,
	[SizeId] [int] NOT NULL,
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



INSERT INTO Sizes(Caption)
VALUES('XS'),('S'),('M'),('L'),('XL'),('2XL')

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