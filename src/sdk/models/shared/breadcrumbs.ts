/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Category type
 */
export enum BreadcrumbsHierarchyEnum {
  Primary = "PRIMARY",
  Alternate = "ALTERNATE",
}

export class Breadcrumbs extends SpeakeasyBase {
  /**
   * Time of category creation (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  /**
   * Category type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "hierarchy" })
  hierarchy?: BreadcrumbsHierarchyEnum;

  /**
   * 24-character system-generated category ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * true: Category is Active <br> false: Category is Inactive <br> **Note**: Inactive status is not applicable for Primary category.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isActive" })
  isActive?: boolean;

  /**
   * Depth below the root of the tree
   */
  @SpeakeasyMetadata()
  @Expose({ name: "level" })
  level?: number;

  /**
   * Time when category was last updated (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  /**
   * Category name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Human-readable numeric ID of category, for external users
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
