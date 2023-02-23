import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";


export class BundleChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}