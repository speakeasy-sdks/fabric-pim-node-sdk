import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpsertProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class UpsertProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpsertProductsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any[];
}


export class UpsertProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productModifyError?: shared.ProductModifyError;

  @SpeakeasyMetadata()
  productResponse?: shared.ProductResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
