import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum InheritItemAttributesUpdateActionEnum {
  Set = "SET",
  Unset = "UNSET",
}

export class InheritItemAttributesUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: InheritItemAttributesUpdateActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
