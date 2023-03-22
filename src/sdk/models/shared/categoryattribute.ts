/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Attribute type
 */
export enum CategoryAttributeTypeEnum {
  Text = "TEXT",
  Boolean = "BOOLEAN",
  Serial = "SERIAL",
  Decimal = "DECIMAL",
  Integer = "INTEGER",
  Datetime = "DATETIME",
}

export class CategoryAttribute extends SpeakeasyBase {
  /**
   * 24-character system-generated attribute ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Attribute name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Attribute type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CategoryAttributeTypeEnum;

  /**
   * Value corresponding to `type`
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: any;
}
