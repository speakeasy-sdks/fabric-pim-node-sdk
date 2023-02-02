import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchAttributeMappingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class SearchAttributeMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchAttributeMappingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AttributeMappingSearch;
}


export class SearchAttributeMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeMappingPaginationResponse?: shared.AttributeMappingPaginationResponse;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
