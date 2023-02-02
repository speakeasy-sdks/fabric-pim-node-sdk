import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InheritItemAttributesUpdateActionEnum {
    Set = "SET",
    Unset = "UNSET"
}


export class InheritItemAttributesUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: InheritItemAttributesUpdateActionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
