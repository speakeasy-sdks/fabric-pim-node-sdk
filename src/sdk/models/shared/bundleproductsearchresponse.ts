import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { ProductCategory } from "./productcategory";
import { Expose, Type } from "class-transformer";

export class BundleProductSearchResponseProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ elemType: ProductCategory })
  @Expose({ name: "categories" })
  @Type(() => ProductCategory)
  categories?: ProductCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dependents" })
  dependents?: string[];

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
  @Expose({ name: "type" })
  type?: string;
}

export class BundleProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: BundleProductSearchResponseProducts })
  @Expose({ name: "products" })
  @Type(() => BundleProductSearchResponseProducts)
  products?: BundleProductSearchResponseProducts[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
