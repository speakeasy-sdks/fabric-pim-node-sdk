import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class FileSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: any;
}