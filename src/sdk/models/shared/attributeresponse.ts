import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileResponse } from "./fileresponse";
import { StatusResponse } from "./statusresponse";
import { AttributeValidation } from "./attributevalidation";



export class AttributeResponseLocales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
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
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileResponse })
  files?: FileResponse[];

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=formula" })
  formula?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locales", elemType: AttributeResponseLocales })
  locales?: AttributeResponseLocales[];

  @SpeakeasyMetadata({ data: "json, name=localizable" })
  localizable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serialStart" })
  serialStart?: number;

  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: StatusResponse })
  statuses?: StatusResponse[];

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AttributeResponseTargetEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AttributeResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: AttributeValidation;
}
