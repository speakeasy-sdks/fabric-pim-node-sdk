import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeMappingResponse } from "./attributemappingresponse";


export class AttributeMappingPaginationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings", elemType: AttributeMappingResponse })
  mappings?: AttributeMappingResponse[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}