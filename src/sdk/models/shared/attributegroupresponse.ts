import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AttributeGroupResponseAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

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
export enum AttributeGroupResponseTypeEnum {
  Workflow = "WORKFLOW",
  Collection = "COLLECTION",
}

export class AttributeGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: AttributeGroupResponseAttributes })
  @Expose({ name: "attributes" })
  @Type(() => AttributeGroupResponseAttributes)
  attributes?: AttributeGroupResponseAttributes[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: AttributeGroupResponseTypeEnum;
}
