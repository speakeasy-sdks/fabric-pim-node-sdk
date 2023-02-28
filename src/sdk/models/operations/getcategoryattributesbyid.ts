import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";

export enum GetCategoryAttributesByIDStatusEnum {
    Assigned = "ASSIGNED",
    Unassigned = "UNASSIGNED"
}

export class GetCategoryAttributesByIDQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCategoryAttributesByIDStatusEnum;
}

export class GetCategoryAttributesByIDHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoryAttributesByIDRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoryAttributesByIDQueryParams;

  @SpeakeasyMetadata()
  headers: GetCategoryAttributesByIDHeaders;
}

export class GetCategoryAttributesByIDResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributePage?: shared.AttributePage;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}