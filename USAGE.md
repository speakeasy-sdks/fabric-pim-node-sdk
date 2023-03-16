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
        description: "porro",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "vero",
            order: 5448.83,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "nihil",
            order: 6235.64,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "eum",
            order: 4375.87,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Add,
            id: "saepe",
            order: 567.13,
          },
        ],
        id: "sapiente",
        name: "enim",
        priorityOrder: 3834.41,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Workflow,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Delete,
        description: "vel",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "similique",
            order: 3927.85,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "quo",
            order: 710.36,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "dicta",
            order: 6481.72,
          },
        ],
        id: "voluptatem",
        name: "consequatur",
        priorityOrder: 8326.2,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Delete,
        description: "eos",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "reiciendis",
            order: 4736.08,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "et",
            order: 4614.79,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "dolor",
            order: 6788.8,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Add,
            id: "quisquam",
            order: 6399.21,
          },
        ],
        id: "culpa",
        name: "qui",
        priorityOrder: 5373.73,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
    ],
    transactional: true,
  },
  xSiteContext: {
    account: "occaecati",
    channel: 1059.07,
    date: "esse",
    stage: "rem",
  },
};

sdk.attributes.modifyAttributeGroups(req).then((res: ModifyAttributeGroupsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->