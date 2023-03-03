import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum BulkProductAttributeRequestActionEnum {
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}

export class BulkProductAttributeRequestLocales extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "locale" })
  locale?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum BulkProductAttributeRequestOptionsTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME"
}
export enum BulkProductAttributeRequestTextSubTypeEnum {
    SmallText = "SMALL_TEXT",
    TextArea = "TEXT_AREA",
    Html = "HTML"
}
export enum BulkProductAttributeRequestTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME",
    Options = "OPTIONS"
}
export enum BulkProductAttributeRequestValidationAttributeTypesEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Asset = "ASSET",
    Datetime = "DATETIME",
    Resource = "RESOURCE",
    DynamicLov = "DYNAMIC_LOV"
}

// BulkProductAttributeRequestValidationRange
/** 
 * Specified range of values must be between this min and/or max
**/
export class BulkProductAttributeRequestValidationRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: any;
}

export class BulkProductAttributeRequestValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributeTypes" })
  attributeTypes?: BulkProductAttributeRequestValidationAttributeTypesEnum[];

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
  @Expose({ name: "incrementBy" })
  incrementBy?: number;

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
  @Type(() => BulkProductAttributeRequestValidationRange)
  range?: BulkProductAttributeRequestValidationRange;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "startWith" })
  startWith?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unique" })
  unique?: boolean;
}

export class BulkProductAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: BulkProductAttributeRequestActionEnum;

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

  @SpeakeasyMetadata({ elemType: BulkProductAttributeRequestLocales })
  @Expose({ name: "locales" })
  @Type(() => BulkProductAttributeRequestLocales)
  locales?: BulkProductAttributeRequestLocales[];

  @SpeakeasyMetadata()
  @Expose({ name: "mapping" })
  mapping?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "optionsType" })
  optionsType?: BulkProductAttributeRequestOptionsTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "textSubType" })
  textSubType?: BulkProductAttributeRequestTextSubTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: BulkProductAttributeRequestTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => BulkProductAttributeRequestValidation)
  validation?: BulkProductAttributeRequestValidation;
}