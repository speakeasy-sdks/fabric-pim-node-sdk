import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetS3UrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileId" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
