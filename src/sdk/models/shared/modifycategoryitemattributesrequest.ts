import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ModifyCategoryItemAttributesRequestItemAttributesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}


export class ModifyCategoryItemAttributesRequestItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ModifyCategoryItemAttributesRequestItemAttributesActionEnum;

  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId: string;

  @SpeakeasyMetadata({ data: "json, name=mandatory" })
  mandatory?: boolean;
}


export class ModifyCategoryItemAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributes", elemType: ModifyCategoryItemAttributesRequestItemAttributes })
  itemAttributes: ModifyCategoryItemAttributesRequestItemAttributes[];

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}
