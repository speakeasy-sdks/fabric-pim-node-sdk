/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class CategoryItemAttributeConditions extends SpeakeasyBase {
  /**
   * 24-character system-generated category ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemAttributeConditions" })
  itemAttributeConditions?: Record<string, any>[];

  /**
   * Human-readable numeric ID of category, for external users
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
