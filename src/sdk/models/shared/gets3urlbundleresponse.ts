import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class GetS3URLBundleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fileId" })
  fileId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}