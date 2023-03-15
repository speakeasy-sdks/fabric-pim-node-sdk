import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum ModifyCategoryItemAttributesRequestItemAttributesActionEnum {
  Set = "SET",
  Unset = "UNSET",
}

export class ModifyCategoryItemAttributesRequestItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: ModifyCategoryItemAttributesRequestItemAttributesActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mandatory" })
  mandatory?: boolean;
}

export class ModifyCategoryItemAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({
    elemType: ModifyCategoryItemAttributesRequestItemAttributes,
  })
  @Expose({ name: "itemAttributes" })
  @Type(() => ModifyCategoryItemAttributesRequestItemAttributes)
  itemAttributes: ModifyCategoryItemAttributesRequestItemAttributes[];

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
