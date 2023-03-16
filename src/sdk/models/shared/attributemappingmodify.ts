import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeValidation } from "./attributevalidation";
import { Expose, Type } from "class-transformer";

export class AttributeMappingModifyMappings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mapping" })
  mapping?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => AttributeValidation)
  validation?: AttributeValidation;
}

export class AttributeMappingModify extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeMappingModifyMappings })
  @Expose({ name: "mappings" })
  @Type(() => AttributeMappingModifyMappings)
  mappings?: AttributeMappingModifyMappings[];
}
