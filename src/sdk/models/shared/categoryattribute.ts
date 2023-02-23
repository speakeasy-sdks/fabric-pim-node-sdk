import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum CategoryAttributeTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME"
}

export class CategoryAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CategoryAttributeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}