import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadFileStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=csvLink" })
  csvLink?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCsv" })
  errorCsv?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=statuses" })
  statuses?: any[];
}