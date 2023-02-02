import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileResponse } from "./fileresponse";



export class FilePaginationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileResponse })
  files?: FileResponse[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
