import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export enum GetCategoryItemAttributesStatusEnum {
  Assigned = "ASSIGNED",
  Unassigned = "UNASSIGNED",
}

export class GetCategoryItemAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=nodeId",
  })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetCategoryItemAttributesStatusEnum;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoryItemAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoryItemAttributes?: shared.GetCategoryItemAttributes;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
