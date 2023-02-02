import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { GetBundleItems } from "./getbundleitems";
import { ProductCategory } from "./productcategory";



export class Bundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=bundleItems", elemType: GetBundleItems })
  bundleItems?: GetBundleItems[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ProductCategory })
  categories?: ProductCategory[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
