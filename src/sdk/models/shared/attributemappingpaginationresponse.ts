import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeMappingResponse } from "./attributemappingresponse";
import { Expose, Type } from "class-transformer";


export class AttributeMappingPaginationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeMappingResponse })
  @Expose({ name: "mappings" })
  @Type(() => AttributeMappingResponse)
  mappings?: AttributeMappingResponse[];

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