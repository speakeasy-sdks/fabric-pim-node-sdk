import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";



export class ProductChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;
}
