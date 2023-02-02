import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { ProductChild } from "./productchild";
import { ProductCategory } from "./productcategory";



export class BundleProductSearchResponseProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=bundleItems", elemType: ProductChild })
  bundleItems?: ProductChild[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ProductCategory })
  categories?: ProductCategory[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=dependents" })
  dependents?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class BundleProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: BundleProductSearchResponseProducts })
  products?: BundleProductSearchResponseProducts[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
