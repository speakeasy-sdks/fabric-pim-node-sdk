import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BundleChild } from "./bundlechild";
import { ProductAttribute } from "./productattribute";
import { Expose, Type } from "class-transformer";

export class GetBundleItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ elemType: BundleChild })
  @Expose({ name: "children" })
  @Type(() => BundleChild)
  children?: BundleChild[];

  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;
}
