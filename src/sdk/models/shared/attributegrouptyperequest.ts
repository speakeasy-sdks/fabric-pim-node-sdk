import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum AttributeGroupTypeRequestActionEnum {
    Add = "ADD",
    Update = "UPDATE",
    Delete = "DELETE"
}

export class AttributeGroupTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: AttributeGroupTypeRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}