import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";

export enum GetCategoryItemAttributesConditionStatusEnum {
    Assigned = "ASSIGNED",
    Unassigned = "UNASSIGNED"
}

export class GetCategoryItemAttributesConditionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCategoryItemAttributesConditionStatusEnum;
}

export class GetCategoryItemAttributesConditionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoryItemAttributesConditionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetCategoryItemAttributesConditionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCategoryItemAttributesConditionQueryParams;

  @SpeakeasyMetadata()
  headers: GetCategoryItemAttributesConditionHeaders;

  @SpeakeasyMetadata()
  security: GetCategoryItemAttributesConditionSecurity;
}

export class GetCategoryItemAttributesConditionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoryItemAttributeConditions?: shared.GetCategoryItemAttributeConditions;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}