/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NoProductsResponse extends SpeakeasyBase {
  /**
   * Number of records in a page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  /**
   * Number of pages for the given `pageSize`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  /**
   * Item details
   */
  @SpeakeasyMetadata()
  @Expose({ name: "products" })
  products?: string[];

  /**
   * Total number of records
   */
  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
