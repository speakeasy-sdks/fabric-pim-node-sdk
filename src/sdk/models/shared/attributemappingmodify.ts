import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeValidation } from "./attributevalidation";


export class AttributeMappingModifyMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: AttributeValidation;
}

export class AttributeMappingModify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings", elemType: AttributeMappingModifyMappings })
  mappings?: AttributeMappingModifyMappings[];
}