import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class UpdateProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class UpdateProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateProductsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ProductUpdate;
}

export class UpdateProductsResponse extends SpeakeasyBase {
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