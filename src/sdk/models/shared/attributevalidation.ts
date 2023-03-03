import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

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
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: any;
}

export class AttributeValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributeTypes" })
  attributeTypes?: AttributeValidationAttributeTypesEnum[];

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
  @Type(() => AttributeValidationRange)
  range?: AttributeValidationRange;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "unique" })
  unique?: boolean;
}