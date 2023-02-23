import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetS3URLBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;
}