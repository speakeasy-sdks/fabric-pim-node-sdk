import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { Expose, Type } from "class-transformer";


export class ProductChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;
}