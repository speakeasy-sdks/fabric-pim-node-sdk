import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";

export enum GetProductsStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

export class GetProductsQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetProductsStatusEnum;
}

export class GetProductsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class GetProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetProductsQueryParams;

  @SpeakeasyMetadata()
  headers: GetProductsHeaders;
}

export class GetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getProducts200ApplicationJSONOneOf?: any;
}