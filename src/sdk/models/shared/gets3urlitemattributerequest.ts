import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetS3URLItemAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;
}