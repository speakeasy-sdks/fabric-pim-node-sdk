import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ModifyCategoryAttributesRequestAttributesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}

export class ModifyCategoryAttributesRequestAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ModifyCategoryAttributesRequestAttributesActionEnum;

  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}

export class ModifyCategoryAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ModifyCategoryAttributesRequestAttributes })
  attributes: ModifyCategoryAttributesRequestAttributes[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}