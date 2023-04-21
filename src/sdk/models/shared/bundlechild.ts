/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";
import { Expose, Type } from "class-transformer";

export class BundleChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ProductAttribute })
  @Expose({ name: "attributes" })
  @Type(() => ProductAttribute)
  attributes?: ProductAttribute[];

  /**
   * Item ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: number;

  /**
   * Stock Keeping Unit (SKU) of item
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sku" })
  sku?: string;
}
