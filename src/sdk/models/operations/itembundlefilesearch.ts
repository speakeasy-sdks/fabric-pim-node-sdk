import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ItemBundleFileSearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class ItemBundleFileSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ItemBundleFileSearchHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.FileSearchRequest;
}


export class ItemBundleFileSearchResponse extends SpeakeasyBase {
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
