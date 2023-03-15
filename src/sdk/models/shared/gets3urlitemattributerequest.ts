import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class GetS3URLItemAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fileName" })
  fileName?: string;
}
