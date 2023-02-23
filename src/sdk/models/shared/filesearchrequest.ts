import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class FileSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: any;
}