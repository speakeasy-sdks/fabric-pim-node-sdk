<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@fabric/pim-sdk";
import { ModifyAttributeMappingsRequest, ModifyAttributeMappingsResponse } from "@fabric/pim-sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


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