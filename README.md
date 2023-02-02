# Fabric PIM Node SDK

As brands and retailers grow, they often expand their product catalogs, resulting in the need to enrich and manage more product data. fabric product information management (PIM) solution alleviates the burden of managing large amounts of product data by means of a central storage repository. fabric PIM helps you with improved data quality, consistent customer experience, reduced time to market, easy integration with external systems, reduced management costs and risks, faster and easier updates, and easy scaling. You can create, import, enrich, validate, distribute, and manage complex product information, centrally. As a result, you deliver product experiences that drive sales through every channel.

More information on the [Fabric PIM API](https://knowledgebase.fabric.inc/docs/openapi/pim/reference/) can be found here

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @fabric/pim-sdk
```

### Yarn

```bash
yarn add @fabric/pim-sdk
```
<!-- End SDK Installation -->

## Authentication 

For more details on getting access to the Fabric API please see [here](https://knowledgebase.fabric.inc/docs/developer-portal/xm-developer-guide/)

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@fabric/pim-sdk";
import { ModifyAttributeMappingsRequest, ModifyAttributeMappingsResponse } from "@fabric/pim-sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ModifyAttributeMappingsRequest = {
  headers: {
    authorization: "sit",
    xSiteContext: {
      account: "voluptas",
      channel: 53.099998,
      date: "consequuntur",
      stage: "dolor",
    },
  },
  request: {
    mappings: [
      {
        attributeId: "voluptas",
        description: "fugit",
        mapping: "et",
        name: "nihil",
        required: true,
        validation: {
          attributeTypes: [
            "BOOLEAN",
            "DATETIME",
            "INTEGER",
          ],
          contains: "ut",
          exact: "dolorem",
          formula: "et",
          inheritable: false,
          inverse: true,
          oneOf: "vitae",
          range: {
            max: "totam",
            min: "dolores",
          },
          required: false,
          unique: true,
        },
      },
      {
        attributeId: "vel",
        description: "odio",
        mapping: "dolore",
        name: "id",
        required: true,
        validation: {
          attributeTypes: [
            "INTEGER",
            "ASSET",
            "DATETIME",
          ],
          contains: "est",
          exact: "aut",
          formula: "odit",
          inheritable: true,
          inverse: false,
          oneOf: "omnis",
          range: {
            max: "aut",
            min: "illo",
          },
          required: false,
          unique: false,
        },
      },
    ],
  },
};

sdk.attributes.modifyAttributeMappings(req).then((res: ModifyAttributeMappingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attributes

* `modifyAttributeMappings` - Update attribute mappings
* `searchAttributeMappings` - Find attribute mapping

### Category

* `categoryCreate` - Create category
* `categoryModify` - Modify category
* `getCategoriesById` - Get categories
* `getCategoriesNodeSourceExclusions` - Get available category source exclusions
* `getCategoriesNodeSources` - Get available category sources
* `getCategoryAttributesById` - Get category attributes
* `getCategoryItemAttributes` - Get available product attributes
* `getCategoryItemAttributesCondition` - Get available conditions for product attribute
* `getCategorySkUs` - Get SKUs in a category
* `getCategoryTree` - Get category tree
* `modifyCategoriesNodeSourceExclusions` - Create and update category source exclusions
* `modifyCategoriesNodeSources` - Create and update category sources
* `postCategoryAttributeBulk` - Create, update, or delete category attributes
* `postCategoryAttributeById` - Create, update, and delete attributes of a category
* `postCategoryItemAttributeById` - Create or update product attribute conditions
* `postCategoryItemibuteById` - Create, update, and remove product attributes for a category
* `searchCategories` - Find categories

### Product

* `itemAttributeFileSearch` - Get imported files for product attributes
* `itemBundleFileSearch` - Get imported files for product bundles
* `createProducts` - Create products and bundles
* `fileSearch` - Get imported files for products
* `generateCsVfile` - Generate CSV template file for products
* `generateItemAttributeCsVfile` - Generate CSV template for product attributes
* `generateItemAttributeS3url` - Generate S3 bucket URL for product attributes
* `generateItemBundleCsVfile` - Generate CSV template for product bundles
* `generateItemBundleS3url` - Generate S3 bucket URL for product bundles
* `generateS3url` - Generate S3 bucket URL for bulk upload of products
* `getFileStatus` - Get file upload status by ID
* `getProductAttribute` - Get product attributes
* `getProducts` - Get products
* `getProductsV2` - Get products by SKU, itemId or parentSku
* `modifyAttributeGroups` - Create, update, or delete attribute groups
* `postProductAttributeBulk` - Create and update attributes for multiple products
* `productSearch` - Find products
* `searchAttributeGroups` - Find attribute groups
* `updateBundles` - Update bundles
* `updateProducts` - Update products and bundles
* `upsertProducts` - Upsert products or bundles

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
