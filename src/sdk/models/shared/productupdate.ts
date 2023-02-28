import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InheritItemAttributesUpdate } from "./inherititemattributesupdate";
import { Expose, Type } from "class-transformer";


export class ProductUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "attributeValues" })
  attributeValues?: any[];

  @SpeakeasyMetadata({ elemType: InheritItemAttributesUpdate })
  @Expose({ name: "inheritedAttributes" })
  @Type(() => InheritItemAttributesUpdate)
  inheritedAttributes?: InheritItemAttributesUpdate[];

  @SpeakeasyMetadata()
  @Expose({ name: "parentSku" })
  parentSku?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "skus" })
  skus?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}