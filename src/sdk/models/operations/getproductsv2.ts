import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetProductsV2StatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}
export enum GetProductsV2TypeEnum {
  Item = "ITEM",
  Bundle = "BUNDLE",
}

export class GetProductsV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdAfter",
  })
  createdAfter?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdBefore",
  })
  createdBefore?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=modifiedAfter",
  })
  modifiedAfter?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=modifiedBefore",
  })
  modifiedBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=parentSku",
  })
  parentSku?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skus" })
  skus?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetProductsV2StatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetProductsV2TypeEnum;
}

export class GetProductsV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProductsV2200ApplicationJSONOneOf?: any;
}
