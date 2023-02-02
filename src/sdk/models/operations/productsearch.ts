import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allAttributes" })
  allAttributes?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeChildren" })
  excludeChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=itemIds" })
  itemIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyChildren" })
  onlyChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.XSiteContextOrAuthorizationEnum1;
}


export class ProductSearchHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class ProductSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ProductSearchQueryParams;

  @SpeakeasyMetadata()
  headers: ProductSearchHeaders;
}


export class ProductSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  productSearch200ApplicationJSONOneOf?: any;
}
