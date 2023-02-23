import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StatusResponse } from "./statusresponse";

export enum FileResponseTypeEnum {
    Import = "IMPORT",
    Export = "EXPORT"
}

export class FileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: number;

  @SpeakeasyMetadata({ data: "json, name=secondsTakenToImport" })
  secondsTakenToImport?: number;

  @SpeakeasyMetadata({ data: "json, name=secondsTakenToProcess" })
  secondsTakenToProcess?: number;

  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: StatusResponse })
  statuses?: StatusResponse[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileResponseTypeEnum;
}