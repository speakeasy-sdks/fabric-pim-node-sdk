import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchAttributeGroupsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class SearchAttributeGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SearchAttributeGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AttributeGroupSearchRequest;
}


export class SearchAttributeGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeGroupSearchResponse?: shared.AttributeGroupSearchResponse;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
