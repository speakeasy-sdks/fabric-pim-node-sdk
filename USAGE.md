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
  headers: {
    xSiteContext: {
      account: "unde",
      channel: 5928.45,
      date: "porro",
      stage: "nulla",
    },
  },
  request: {
    attributeGroup: [
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Delete,
        description: "perspiciatis",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "fuga",
            order: 6458.94,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "iusto",
            order: 2975.34,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "inventore",
            order: 9636.63,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Add,
            id: "eum",
            order: 4776.65,
          },
        ],
        id: "autem",
        name: "vel",
        priorityOrder: 5288.95,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Workflow,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Update,
        description: "reprehenderit",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "quasi",
            order: 3373.96,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Add,
            id: "est",
            order: 202.18,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Update,
            id: "fugiat",
            order: 9571.56,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "eos",
            order: 8700.13,
          },
        ],
        id: "accusamus",
        name: "reiciendis",
        priorityOrder: 4736.08,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Collection,
      },
      {
        action: AttributeGroupRequestAttributeGroupActionEnum.Delete,
        description: "praesentium",
        editableAttributes: [
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "soluta",
            order: 1182.74,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Delete,
            id: "rerum",
            order: 5820.2,
          },
          {
            action: AttributeGroupTypeRequestActionEnum.Add,
            id: "sed",
            order: 9446.69,
          },
        ],
        id: "possimus",
        name: "occaecati",
        priorityOrder: 1059.07,
        type: AttributeGroupRequestAttributeGroupTypeEnum.Workflow,
      },
    ],
    transactional: true,
  },
};

sdk.attributes.modifyAttributeGroups(req).then((res: ModifyAttributeGroupsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->