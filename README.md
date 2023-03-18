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
npm add @speakeasy-sdks/pim-sdk
```

### Yarn

```bash
yarn add @speakeasy-sdks/pim-sdk
```
<!-- End SDK Installation -->

## Authentication 

For more details on getting access to the Fabric API please see [here](https://knowledgebase.fabric.inc/docs/developer-portal/xm-developer-guide/)

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  ModifyAttributeGroupsRequest,
  ModifyAttributeGroupsResponse
} from "@speakeasy-sdks/pim-sdk/dist/sdk/models/operations";
import {
  AttributeGroupRequestAttributeGroupActionEnum,
  AttributeGroupRequestAttributeGroupTypeEnum,
  AttributeGroupTypeRequestActionEnum,
} from "@speakeasy-sdks/pim-sdk/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { Fabric } from "@speakeasy-sdks/pim-sdk";
const sdk = new Fabric();

const req: ModifyAttributeGroupsRequest = {
  attributeGroupRequest: {
    attributeGroup: [
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Update,
        description: "Item weight, in KG",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 7151.9,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 8442.66,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 6027.63,
          },
        ],
        id: "6259ec8d006b0d00092b3189",
        name: "weight",
        priorityOrder: 1,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Update,
        description: "Item weight, in KG",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 5448.83,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 8472.52,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 4236.55,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 6235.64,
          },
        ],
        id: "6259ec8d006b0d00092b3189",
        name: "weight",
        priorityOrder: 1,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Update,
        description: "Item weight, in KG",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 3843.82,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 4375.87,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "6245f16d11ae770009f19292",
            order: 2975.34,
          },
        ],
        id: "6259ec8d006b0d00092b3189",
        name: "weight",
        priorityOrder: 1,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
    ],
    transactional: false,
  },
  xSiteContext: {
    account: "609ac75051f11a0007cf38b3",
    channel: 12,
    date: "2021-12-28T16:36:50.055Z",
    stage: "sandbox",
  },
};

sdk.attributes.modifyAttributeGroups(req).then((res: ModifyAttributeGroupsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### attributes

* `modifyAttributeGroups` - Create, update and delete attribute groups
* `modifyAttributeMappings` - Create and Update attribute mappings
* `postCategoryAttributeBulk` - Create, update and delete category attributes
* `postProductAttributeBulk` - Create update and delete item attributes
* `searchAttributeGroups` - Find attribute groups
* `searchAttributeMappings` - Find attribute mapping

### bulkImport

* `itemAttributeFileSearch` - Get imported files for item attributes
* `itemBundleFileSearch` - Get imported files for bundles
* `fileSearch` - Get imported files for items
* `generateCSVfile` - Generate CSV template file for items
* `generateItemAttributeCSVfile` - Generate CSV template for item attributes
* `generateItemAttributeS3url` - Generate S3 bucket URL for item attribute import
* `generateItemBundleCSVfile` - Generate CSV template for bundles
* `generateItemBundleS3url` - Generate S3 bucket URL for bundle import
* `generateS3url` - Generate S3 bucket URL for item import
* `getFileStatus` - Get file upload status

### category

* `categoryCreate` - Create category
* `categoryModify` - Modify category
* `getCategoriesById` - Get categories
* `getCategoriesNodeSourceExclusions` - Get category source exclusions
* `getCategoriesNodeSources` - Get category source inclusions
* `getCategoryAttributesByID` - Get assigned category attributes
* `getCategoryItemAttributes` - Get assigned item attributes
* `getCategoryItemAttributesCondition` - Get item attribute conditions
* `getCategorySKUs` - Get SKUs in a category
* `getCategoryTree` - Get category tree
* `modifyCategoriesNodeSourceExclusions` - Add and remove category source exclusions
* `modifyCategoriesNodeSources` - Add and remove category source inclusions
* `postCategoryAttributeByID` - Assign and unassign category attributes
* `postCategoryItemAttributeByID` - Add and remove item attribute conditions
* `postCategoryItemibuteByID` - Assign and unassign item attributes
* `searchCategories` - Find categories

### product

* `createProducts` - Create items and bundles
* `getProductAttribute` - Get item attributes
* `getProducts` - Get items and children items
* `getProductsV2` - Get items and limited children items
* `productSearch` - Find items
* `updateBundles` - Update items in bundle
* `updateProducts` - Update items and bundles
* `upsertProducts` - Upsert items and bundles
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
