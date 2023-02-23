import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetS3URLRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;
}