import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetProductsStatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export class GetProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdAfter",
  })
  createdAfter?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdBefore",
  })
  createdBefore?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=false;name=itemIds",
  })
  itemIds?: number[];

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetProductsStatusEnum;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getProducts200ApplicationJSONOneOf?: any;
}
