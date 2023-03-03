<!-- Start SDK Example Usage -->
```typescript
import {
  ModifyAttributeGroupsRequest,
  ModifyAttributeGroupsResponse 
} from "@fabric/pim-sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Fabric } from "@fabric/pim-sdk";


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
        action: "undefined",
        description: "perspiciatis",
        editableAttributes: [
          {
            action: "UPDATE",
            id: "fuga",
            order: 6458.94,
          },
          {
            action: "UPDATE",
            id: "iusto",
            order: 2975.34,
          },
          {
            action: "undefined",
            id: "inventore",
            order: 9636.63,
          },
          {
            action: "UPDATE",
            id: "eum",
            order: 4776.65,
          },
        ],
        id: "autem",
        name: "vel",
        priorityOrder: 5288.95,
        type: "COLLECTION",
      },
      {
        action: "DELETE",
        description: "reprehenderit",
        editableAttributes: [
          {
            action: "undefined",
            id: "quasi",
            order: 3373.96,
          },
          {
            action: "ADD",
            id: "est",
            order: 202.18,
          },
          {
            action: "UPDATE",
            id: "fugiat",
            order: 9571.56,
          },
          {
            action: "undefined",
            id: "eos",
            order: 8700.13,
          },
        ],
        id: "accusamus",
        name: "reiciendis",
        priorityOrder: 4736.08,
        type: "undefined",
      },
      {
        action: "undefined",
        description: "praesentium",
        editableAttributes: [
          {
            action: "undefined",
            id: "soluta",
            order: 1182.74,
          },
          {
            action: "DELETE",
            id: "rerum",
            order: 5820.2,
          },
          {
            action: "ADD",
            id: "sed",
            order: 9446.69,
          },
        ],
        id: "possimus",
        name: "occaecati",
        priorityOrder: 1059.07,
        type: "COLLECTION",
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