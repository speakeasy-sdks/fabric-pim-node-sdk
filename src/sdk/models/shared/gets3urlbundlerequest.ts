import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GetS3URLBundleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fileName" })
  fileName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: string;
}