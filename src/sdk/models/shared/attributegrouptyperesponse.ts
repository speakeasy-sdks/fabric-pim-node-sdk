import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class AttributeGroupTypeResponseAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeValidationId" })
  attributeValidationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "formulaManuallyOverWritten" })
  formulaManuallyOverWritten?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "textSubType" })
  textSubType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class AttributeGroupTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: AttributeGroupTypeResponseAttribute })
  @Expose({ name: "attribute" })
  @Type(() => AttributeGroupTypeResponseAttribute)
  attribute?: AttributeGroupTypeResponseAttribute[];

  @SpeakeasyMetadata()
  @Expose({ name: "attributeGroupId" })
  attributeGroupId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isEditable" })
  isEditable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}