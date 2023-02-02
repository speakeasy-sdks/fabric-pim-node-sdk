import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemAttributeFileSearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class ItemAttributeFileSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ItemAttributeFileSearchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FileSearchRequest;
}


export class ItemAttributeFileSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  filePaginationResponse?: shared.FilePaginationResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
