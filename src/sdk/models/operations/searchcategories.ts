import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum SearchCategoriesStatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  All = "ALL",
}
export enum SearchCategoriesTypeEnum {
  Primary = "PRIMARY",
  Alternate = "ALTERNATE",
  All = "ALL",
}

export class SearchCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=keyword",
  })
  keyword?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=false;name=nodeIds",
  })
  nodeIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: SearchCategoriesStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: SearchCategoriesTypeEnum;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class SearchCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryPage?: shared.CategoryPage;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
