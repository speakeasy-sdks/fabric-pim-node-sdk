import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BundleChild } from "./bundlechild";
import { ProductAttribute } from "./productattribute";


export class GetBundleItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: BundleChild })
  children?: BundleChild[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}