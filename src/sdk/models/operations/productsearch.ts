import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum ProductSearchTypeEnum {
  Item = "ITEM",
  Bundle = "BUNDLE",
  All = "ALL",
}

export class ProductSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=allAttributes",
  })
  allAttributes?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=excludeChildren",
  })
  excludeChildren?: boolean;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=false;name=itemIds",
  })
  itemIds?: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=keyword",
  })
  keyword?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=onlyChildren",
  })
  onlyChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ProductSearchTypeEnum;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
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
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  productSearch200ApplicationJSONOneOf?: any;
}
