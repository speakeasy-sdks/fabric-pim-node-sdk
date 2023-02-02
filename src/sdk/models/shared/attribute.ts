import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AttributeTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME"
}


export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AttributeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
