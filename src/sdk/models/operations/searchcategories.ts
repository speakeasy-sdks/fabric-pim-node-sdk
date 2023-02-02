import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=nodeIds" })
  nodeIds?: number[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.XSiteContextEnum1;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.XSiteContextEnum;
}


export class SearchCategoriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


export class SearchCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchCategoriesQueryParams;

  @SpeakeasyMetadata()
  headers: SearchCategoriesHeaders;
}


export class SearchCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryPage?: shared.CategoryPage;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
