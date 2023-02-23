import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AttributeGroupTypeResponseAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeValidationId" })
  attributeValidationId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=formulaManuallyOverWritten" })
  formulaManuallyOverWritten?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=textSubType" })
  textSubType?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export class AttributeGroupTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=attribute", elemType: AttributeGroupTypeResponseAttribute })
  attribute?: AttributeGroupTypeResponseAttribute[];

  @SpeakeasyMetadata({ data: "json, name=attributeGroupId" })
  attributeGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=isEditable" })
  isEditable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}