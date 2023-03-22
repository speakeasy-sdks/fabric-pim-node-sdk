/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

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

  /**
   * Time when the item was added to PIM (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  /**
   * Children SKUs
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dependents" })
  dependents?: string[];

  /**
   * Item ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: number;

  /**
   * Time when item was last updated (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  /**
   * Stock Keeping Unit (SKU) of item
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;

  /**
   * Item type - either ITEM or BUNDLE
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}
