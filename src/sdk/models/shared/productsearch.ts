import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { ProductCategory } from "./productcategory";
import { ProductChild } from "./productchild";
import { Expose, Type } from "class-transformer";


export class ProductSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ elemType: ProductCategory })
  @Expose({ name: "categories" })
  @Type(() => ProductCategory)
  categories?: ProductCategory[];

  @SpeakeasyMetadata({ elemType: ProductChild })
  @Expose({ name: "children" })
  @Type(() => ProductChild)
  children?: ProductChild[];

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