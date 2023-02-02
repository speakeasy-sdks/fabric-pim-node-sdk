import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetS3UrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;
}
