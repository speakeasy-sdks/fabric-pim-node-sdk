import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AttributeGroupTypeRequestActionEnum {
  Add = "ADD",
  Update = "UPDATE",
  Delete = "DELETE",
}

export class AttributeGroupTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: AttributeGroupTypeRequestActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}
