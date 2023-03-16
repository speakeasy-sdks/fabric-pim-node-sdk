import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum ModifyCategoryAttributesRequestAttributesActionEnum {
  Set = "SET",
  Unset = "UNSET",
}

export class ModifyCategoryAttributesRequestAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: ModifyCategoryAttributesRequestAttributesActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}

export class ModifyCategoryAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ModifyCategoryAttributesRequestAttributes })
  @Expose({ name: "attributes" })
  @Type(() => ModifyCategoryAttributesRequestAttributes)
  attributes: ModifyCategoryAttributesRequestAttributes[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
