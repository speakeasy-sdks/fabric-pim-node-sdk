import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AttributeGroupResponseAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

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
export enum AttributeGroupResponseTypeEnum {
    Workflow = "WORKFLOW",
    Collection = "COLLECTION"
}

export class AttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: AttributeGroupResponseAttributes })
  attributes?: AttributeGroupResponseAttributes[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AttributeGroupResponseTypeEnum;
}