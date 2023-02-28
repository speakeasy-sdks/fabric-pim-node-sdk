import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class UploadFileStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "csvLink" })
  csvLink?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "errorCsv" })
  errorCsv?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statuses" })
  statuses?: any[];
}