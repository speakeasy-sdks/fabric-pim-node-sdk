import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupTypeRequest } from "./attributegrouptyperequest";


export enum AttributeGroupRequestAttributeGroupActionEnum {
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}

export enum AttributeGroupRequestAttributeGroupTypeEnum {
    Workflow = "WORKFLOW",
    Collection = "COLLECTION"
}


export class AttributeGroupRequestAttributeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: AttributeGroupRequestAttributeGroupActionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editableAttributes", elemType: AttributeGroupTypeRequest })
  editableAttributes?: AttributeGroupTypeRequest[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priorityOrder" })
  priorityOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AttributeGroupRequestAttributeGroupTypeEnum;
}


export class AttributeGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeGroup", elemType: AttributeGroupRequestAttributeGroup })
  attributeGroup?: AttributeGroupRequestAttributeGroup[];

  @SpeakeasyMetadata({ data: "json, name=transactional" })
  transactional: boolean;
}
