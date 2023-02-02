import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductAttributeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku?: string;
}


export class GetProductAttributeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class GetProductAttributeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductAttributeQueryParams;

  @SpeakeasyMetadata()
  headers: GetProductAttributeHeaders;
}


export class GetProductAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productAttributePage?: shared.ProductAttributePage;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}