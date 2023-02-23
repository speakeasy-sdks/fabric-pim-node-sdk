import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum AttributeValidationAttributeTypesEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Asset = "ASSET",
    Datetime = "DATETIME"
}

// AttributeValidationRange
/** 
 * Specified range of values must be between this min and/or max
**/
export class AttributeValidationRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: any;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: any;
}

export class AttributeValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeTypes" })
  attributeTypes?: AttributeValidationAttributeTypesEnum[];

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
  range?: AttributeValidationRange;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unique" })
  unique?: boolean;
}