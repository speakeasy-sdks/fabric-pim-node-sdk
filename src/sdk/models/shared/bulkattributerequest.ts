import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum BulkAttributeRequestActionEnum {
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}
export enum BulkAttributeRequestOptionsTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME"
}
export enum BulkAttributeRequestTextSubTypeEnum {
    SmallText = "SMALL_TEXT",
    TextArea = "TEXT_AREA",
    Html = "HTML"
}
export enum BulkAttributeRequestTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME",
    Options = "OPTIONS"
}
export enum BulkAttributeRequestValidationAttributeTypesEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Asset = "ASSET",
    Datetime = "DATETIME"
}

// BulkAttributeRequestValidationRange
/** 
 * Specified range of values must be between this min and/or max
**/
export class BulkAttributeRequestValidationRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: any;
}

export class BulkAttributeRequestValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributeTypes" })
  attributeTypes?: BulkAttributeRequestValidationAttributeTypesEnum[];

  @SpeakeasyMetadata()
  @Expose({ name: "contains" })
  contains?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "exact" })
  exact?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inheritable" })
  inheritable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "inverse" })
  inverse?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "oneOf" })
  oneOf?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "range" })
  @Type(() => BulkAttributeRequestValidationRange)
  range?: BulkAttributeRequestValidationRange;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "unique" })
  unique?: boolean;
}

export class BulkAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: BulkAttributeRequestActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "format" })
  format?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "optionsType" })
  optionsType?: BulkAttributeRequestOptionsTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "textSubType" })
  textSubType?: BulkAttributeRequestTextSubTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: BulkAttributeRequestTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => BulkAttributeRequestValidation)
  validation?: BulkAttributeRequestValidation;
}