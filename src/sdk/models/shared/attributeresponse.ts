import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeValidation } from "./attributevalidation";
import { FileResponse } from "./fileresponse";
import { StatusResponse } from "./statusresponse";
import { Expose, Transform, Type } from "class-transformer";


export class AttributeResponseLocales extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "locale" })
  locale?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
export enum AttributeResponseTargetEnum {
    Node = "NODE",
    Item = "ITEM"
}
export enum AttributeResponseTypeEnum {
    Text = "TEXT",
    Boolean = "BOOLEAN",
    Serial = "SERIAL",
    Decimal = "DECIMAL",
    Integer = "INTEGER",
    Datetime = "DATETIME"
}

export class AttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: FileResponse })
  @Expose({ name: "files" })
  @Type(() => FileResponse)
  files?: FileResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "format" })
  format?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "formula" })
  formula?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: AttributeResponseLocales })
  @Expose({ name: "locales" })
  @Type(() => AttributeResponseLocales)
  locales?: AttributeResponseLocales[];

  @SpeakeasyMetadata()
  @Expose({ name: "localizable" })
  localizable?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "mapping" })
  mapping?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedOn?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata({ elemType: StatusResponse })
  @Expose({ name: "statuses" })
  @Type(() => StatusResponse)
  statuses?: StatusResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: AttributeResponseTargetEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: AttributeResponseTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => AttributeValidation)
  validation?: AttributeValidation;
}