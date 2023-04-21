/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AttributeGroupTypeResponseAttribute extends SpeakeasyBase {
  /**
   * 24-character system-generated attribute ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  /**
   * Attribute validation ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "attributeValidationId" })
  attributeValidationId?: string;

  /**
   * Time of attribute creation (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  /**
   * Accurate description of attribute and what it represents
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Formula for the item attribute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  /**
   * true: Formula can be manually overwritten <br> false: Formula cannot be manually overwritten
   */
  @SpeakeasyMetadata()
  @Expose({ name: "formulaManuallyOverWritten" })
  formulaManuallyOverWritten?: boolean;

  /**
   * User ID that modified item attribute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedBy" })
  modifiedBy?: string;

  /**
   * Time when the attribute was last modified (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  /**
   * Attribute name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Conditionally required sub-type for `TEXT` attribute type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "textSubType" })
  textSubType?: string;

  /**
   * Attribute type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}

export class AttributeGroupTypeResponse extends SpeakeasyBase {
  /**
   * 24-character system-generated ID, for internal use
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: AttributeGroupTypeResponseAttribute })
  @Expose({ name: "attribute" })
  @Type(() => AttributeGroupTypeResponseAttribute)
  attribute?: AttributeGroupTypeResponseAttribute[];

  /**
   * 24-character system-generated ID of attribute group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "attributeGroupId" })
  attributeGroupId?: string;

  /**
   * 24-character system-generated attribute ID
   */
  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId?: string;

  /**
   * Time of attribute creation (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  /**
   * true: Attribute is editable <br> false: Attribute is non-editable
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isEditable" })
  isEditable?: boolean;

  /**
   * Time when attribute was last updated (UTC format)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  /**
   * Order of items within the attribute group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;
}
