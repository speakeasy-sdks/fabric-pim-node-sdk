import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GetBundleItems } from "./getbundleitems";
import { ProductAttribute } from "./productattribute";
import { ProductCategory } from "./productcategory";
import { Expose, Type } from "class-transformer";

export class Bundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ elemType: GetBundleItems })
  @Expose({ name: "bundleItems" })
  @Type(() => GetBundleItems)
  bundleItems?: GetBundleItems[];

  @SpeakeasyMetadata({ elemType: ProductCategory })
  @Expose({ name: "categories" })
  @Type(() => ProductCategory)
  categories?: ProductCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

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
