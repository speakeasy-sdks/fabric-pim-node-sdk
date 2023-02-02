import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetS3UrlBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;
}
