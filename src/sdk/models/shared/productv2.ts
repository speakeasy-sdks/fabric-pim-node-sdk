import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { ProductCategory } from "./productcategory";
import { Expose, Type } from "class-transformer";


export class ProductV2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ elemType: ProductCategory })
  @Expose({ name: "categories" })
  @Type(() => ProductCategory)
  categories?: ProductCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "childrenSize" })
  childrenSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}