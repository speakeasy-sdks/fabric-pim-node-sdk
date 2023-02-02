import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BulkProductAttributeRequestActionEnum {
    Create = "CREATE",
    Update = "UPDATE",
    Delete = "DELETE"
}


export class BulkProductAttributeRequestLocales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: any;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: any;
}


export class BulkProductAttributeRequestValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeTypes" })
  attributeTypes?: BulkProductAttributeRequestValidationAttributeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: string;

  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: any;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=incrementBy" })
  incrementBy?: number;

  @SpeakeasyMetadata({ data: "json, name=inheritable" })
  inheritable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inverse" })
  inverse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oneOf" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: BulkProductAttributeRequestValidationRange;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startWith" })
  startWith?: number;

  @SpeakeasyMetadata({ data: "json, name=unique" })
  unique?: boolean;
}


export class BulkProductAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: BulkProductAttributeRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locales", elemType: BulkProductAttributeRequestLocales })
  locales?: BulkProductAttributeRequestLocales[];

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optionsType" })
  optionsType?: BulkProductAttributeRequestOptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata({ data: "json, name=textSubType" })
  textSubType?: BulkProductAttributeRequestTextSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BulkProductAttributeRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: BulkProductAttributeRequestValidation;
}
