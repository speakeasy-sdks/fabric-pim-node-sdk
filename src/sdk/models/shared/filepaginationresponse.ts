import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FileResponse } from "./fileresponse";
import { Expose, Type } from "class-transformer";


export class FilePaginationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FileResponse })
  @Expose({ name: "files" })
  @Type(() => FileResponse)
  files?: FileResponse[];

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}