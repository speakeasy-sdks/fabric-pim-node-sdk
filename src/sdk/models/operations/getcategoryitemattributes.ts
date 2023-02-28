import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";

export enum GetCategoryItemAttributesStatusEnum {
    Assigned = "ASSIGNED",
    Unassigned = "UNASSIGNED"
}

export class GetCategoryItemAttributesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCategoryItemAttributesStatusEnum;
}

export class GetCategoryItemAttributesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoryItemAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoryItemAttributesQueryParams;

  @SpeakeasyMetadata()
  headers: GetCategoryItemAttributesHeaders;
}

export class GetCategoryItemAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoryItemAttributes?: shared.GetCategoryItemAttributes;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}