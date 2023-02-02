import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProductsV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=itemIds" })
  itemIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedAfter" })
  modifiedAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedBefore" })
  modifiedBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentSku" })
  parentSku?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.XSiteContextOrAuthorizationEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.XSiteContextOrAuthorizationEnum2;
}


export class GetProductsV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class GetProductsV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductsV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetProductsV2Headers;
}


export class GetProductsV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProductsV2200ApplicationJSONOneOf?: any;
}
