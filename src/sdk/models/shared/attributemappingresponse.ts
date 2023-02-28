import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeResponse } from "./attributeresponse";
import { AttributeValidation } from "./attributevalidation";
import { Expose, Transform, Type } from "class-transformer";


export class AttributeMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attribute" })
  @Type(() => AttributeResponse)
  attribute?: AttributeResponse;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mapping" })
  mapping?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => AttributeValidation)
  validation?: AttributeValidation;
}