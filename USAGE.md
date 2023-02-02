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