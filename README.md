<div align="center">
    <picture>
        <img src="https://user-images.githubusercontent.com/68016351/222832872-23483018-514d-4cbc-9948-939a0133a829.png" width="500">
    </picture>
   <p>Node SDK for Fabric PIM API.</p>
   <a href="https://knowledgebase.fabric.inc/docs/openapi/pim/reference/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000000&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/fabric-pim-node-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/fabric-pim-node-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/fabric-pim-node-sdk/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/fabric-pim-node-sdk?sort=semver&style=for-the-badge" /></a>
</div>

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
import {
  ModifyAttributeMappingsRequest,
  ModifyAttributeMappingsResponse 
} from "@fabric/pim-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "@fabric/pim-sdk";


const sdk = new SDK();
    
const req: ModifyAttributeMappingsRequest = {
  headers: {
    authorization: "unde",
    xSiteContext: {
      account: "deserunt",
      channel: 7151.9,
      date: "nulla",
      stage: "id",
    },
  },
  request: {
    mappings: [
      {
        attributeId: "perspiciatis",
        description: "nulla",
        mapping: "nihil",
        name: "fuga",
        required: true,
        validation: {
          attributeTypes: [
            "DECIMAL",
            "SERIAL",
          ],
          contains: "saepe",
          exact: "inventore",
          formula: "sapiente",
          inheritable: true,
          inverse: false,
          oneOf: "voluptatum",
          range: {
            max: "autem",
            min: "vel",
          },
          required: false,
          unique: false,
        },
      },
      {
        attributeId: "similique",
        description: "reprehenderit",
        mapping: "molestiae",
        name: "quo",
        required: true,
        validation: {
          attributeTypes: [
            "TEXT",
            "ASSET",
          ],
          contains: "voluptatem",
          exact: "consequatur",
          formula: "fugiat",
          inheritable: true,
          inverse: false,
          oneOf: "eos",
          range: {
            max: "accusamus",
            min: "accusamus",
          },
          required: false,
          unique: true,
        },
      },
      {
        attributeId: "quibusdam",
        description: "et",
        mapping: "praesentium",
        name: "occaecati",
        required: false,
        validation: {
          attributeTypes: [
            "TEXT",
            "ASSET",
            "ASSET",
          ],
          contains: "culpa",
          exact: "qui",
          formula: "sed",
          inheritable: false,
          inverse: true,
          oneOf: "occaecati",
          range: {
            max: "odit",
            min: "esse",
          },
          required: true,
          unique: false,
        },
      },
      {
        attributeId: "amet",
        description: "est",
        mapping: "id",
        name: "blanditiis",
        required: true,
        validation: {
          attributeTypes: [
            "BOOLEAN",
            "TEXT",
            "SERIAL",
          ],
          contains: "et",
          exact: "voluptatem",
          formula: "laborum",
          inheritable: false,
          inverse: true,
          oneOf: "iure",
          range: {
            max: "earum",
            min: "ut",
          },
          required: true,
          unique: true,
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


### attributes

* `modifyAttributeMappings` - Update attribute mappings
* `searchAttributeMappings` - Find attribute mapping

### category

* `categoryCreate` - Create category
* `categoryModify` - Modify category
* `getCategoriesById` - Get categories
* `getCategoriesNodeSourceExclusions` - Get available category source exclusions
* `getCategoriesNodeSources` - Get available category sources
* `getCategoryAttributesByID` - Get category attributes
* `getCategoryItemAttributes` - Get available product attributes
* `getCategoryItemAttributesCondition` - Get available conditions for product attribute
* `getCategorySKUs` - Get SKUs in a category
* `getCategoryTree` - Get category tree
* `modifyCategoriesNodeSourceExclusions` - Create and update category source exclusions
* `modifyCategoriesNodeSources` - Create and update category sources
* `postCategoryAttributeBulk` - Create, update, or delete category attributes
* `postCategoryAttributeByID` - Create, update, and delete attributes of a category
* `postCategoryItemAttributeByID` - Create or update product attribute conditions
* `postCategoryItemibuteByID` - Create, update, and remove product attributes for a category
* `searchCategories` - Find categories

### product

* `itemAttributeFileSearch` - Get imported files for product attributes
* `itemBundleFileSearch` - Get imported files for product bundles
* `createProducts` - Create products and bundles
* `fileSearch` - Get imported files for products
* `generateCSVfile` - Generate CSV template file for products
* `generateItemAttributeCSVfile` - Generate CSV template for product attributes
* `generateItemAttributeS3url` - Generate S3 bucket URL for product attributes
* `generateItemBundleCSVfile` - Generate CSV template for product bundles
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
