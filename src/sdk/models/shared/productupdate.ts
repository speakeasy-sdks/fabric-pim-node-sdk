import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InheritItemAttributesUpdate } from "./inherititemattributesupdate";


export class ProductUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=attributeValues" })
  attributeValues?: any[];

  @SpeakeasyMetadata({ data: "json, name=inheritedAttributes", elemType: InheritItemAttributesUpdate })
  inheritedAttributes?: InheritItemAttributesUpdate[];

  @SpeakeasyMetadata({ data: "json, name=parentSku" })
  parentSku?: string;

  @SpeakeasyMetadata({ data: "json, name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}