import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { ProductCategory } from "./productcategory";
import { ProductChild } from "./productchild";



export class ProductSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: ProductCategory })
  categories?: ProductCategory[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: ProductChild })
  children?: ProductChild[];

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
