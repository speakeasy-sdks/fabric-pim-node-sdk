import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CategoryItemAttributeTypeEnum {
  Text = "TEXT",
  Boolean = "BOOLEAN",
  Serial = "SERIAL",
  Decimal = "DECIMAL",
  Integer = "INTEGER",
  Datetime = "DATETIME",
}

export class CategoryItemAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: CategoryItemAttributeTypeEnum;
}
