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