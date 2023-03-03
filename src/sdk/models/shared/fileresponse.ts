import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StatusResponse } from "./statusresponse";
import { Expose, Transform, Type } from "class-transformer";

export enum FileResponseTypeEnum {
    Import = "IMPORT",
    Export = "EXPORT"
}

export class FileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdBy" })
  createdBy?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdOn?: Date;

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
  @Expose({ name: "progress" })
  progress?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "secondsTakenToImport" })
  secondsTakenToImport?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "secondsTakenToProcess" })
  secondsTakenToProcess?: number;

  @SpeakeasyMetadata({ elemType: StatusResponse })
  @Expose({ name: "statuses" })
  @Type(() => StatusResponse)
  statuses?: StatusResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: FileResponseTypeEnum;
}