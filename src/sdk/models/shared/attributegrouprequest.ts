import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeGroupTypeRequest } from "./attributegrouptyperequest";
import { Expose, Type } from "class-transformer";

export enum AttributeGroupRequestAttributeGroupActionEnum {
  Create = "CREATE",
  Update = "UPDATE",
  Delete = "DELETE",
}
export enum AttributeGroupRequestAttributeGroupTypeEnum {
  Workflow = "WORKFLOW",
  Collection = "COLLECTION",
}

export class AttributeGroupRequestAttributeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: AttributeGroupRequestAttributeGroupActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: AttributeGroupTypeRequest })
  @Expose({ name: "editableAttributes" })
  @Type(() => AttributeGroupTypeRequest)
  editableAttributes?: AttributeGroupTypeRequest[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: AttributeGroupRequestAttributeGroupTypeEnum;
}

export class AttributeGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeGroupRequestAttributeGroup })
  @Expose({ name: "attributeGroup" })
  @Type(() => AttributeGroupRequestAttributeGroup)
  attributeGroup?: AttributeGroupRequestAttributeGroup[];

  @SpeakeasyMetadata()
  @Expose({ name: "transactional" })
  transactional: boolean;
}
