import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

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
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: any;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: any;
}

export class BulkAttributeRequestValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeTypes" })
  attributeTypes?: BulkAttributeRequestValidationAttributeTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=contains" })
  contains?: string;

  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: any;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=inheritable" })
  inheritable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inverse" })
  inverse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oneOf" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: BulkAttributeRequestValidationRange;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unique" })
  unique?: boolean;
}

export class BulkAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: BulkAttributeRequestActionEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=optionsType" })
  optionsType?: BulkAttributeRequestOptionsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata({ data: "json, name=textSubType" })
  textSubType?: BulkAttributeRequestTextSubTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: BulkAttributeRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: BulkAttributeRequestValidation;
}