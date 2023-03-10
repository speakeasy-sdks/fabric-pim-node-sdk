import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetCategoryTreeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodeId" })
  nodeId?: number;
}

export class GetCategoryTreeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoryTreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoryTreeQueryParams;

  @SpeakeasyMetadata()
  headers: GetCategoryTreeHeaders;
}

export class GetCategoryTreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryTree?: shared.CategoryTree;

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