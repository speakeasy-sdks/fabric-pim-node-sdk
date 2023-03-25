/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Category status. <br> **Note**: If omitted, returns Alternate categories in Active status by default. <br> **Note**: When `type` is Primary, `status` must be Active. Inactive status is not applicable for Primary category.
 */
export enum GetCategoriesByIdStatusEnum {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  All = "ALL",
}

/**
 * Category type. <br> **Note**: If omitted, returns `ALTERNATE` categories by default.
 */
export enum GetCategoriesByIdTypeEnum {
  Primary = "PRIMARY",
  Alternate = "ALTERNATE",
  All = "ALL",
}

export class GetCategoriesByIdRequest extends SpeakeasyBase {
  /**
   * List of 24-character system-generated category IDs. If `ids` and `nodeIds` are omitted, this endpoint returns all Alternate categories in Active status. As a result, `size` and `page` becomes mandatory to accommodate large data.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" })
  ids?: string[];

  /**
   * Keywords to search for categories. Returns a pagination response. As a result, `size` and `page` becomes applicable to support large data.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=keyword",
  })
  keyword?: string;

  /**
   * List of human-readable numeric category IDs. When `ids` and `nodeIds` are omitted, `size` and `page` becomes applicable to support pagination.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=false;name=nodeIds",
  })
  nodeIds?: number[];

  /**
   * Page number to be retrieved. <br> **Note**: <br> 1) Applicable only in a paginated response.  <br> 2) Always paired with `size` <br> 3) No default value set. Unless a value is specified, endpoint returns an error.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * Number of records per page <br> **Note**: <br> 1) Always paired with `page` <br> 2) Applicable only in a paginated response <br> 3) No default value set. Unless a value is specified, endpoint returns an error.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  /**
   * Category status. <br> **Note**: If omitted, returns Alternate categories in Active status by default. <br> **Note**: When `type` is Primary, `status` must be Active. Inactive status is not applicable for Primary category.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: GetCategoriesByIdStatusEnum;

  /**
   * Category type. <br> **Note**: If omitted, returns `ALTERNATE` categories by default.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetCategoriesByIdTypeEnum;

  /**
   * JSON object containing `channel`, `account`, `stage`, `date`, and `site` <br> .
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategoriesByIdResponse extends SpeakeasyBase {
  /**
   * OK
   */
  @SpeakeasyMetadata()
  categoryPage?: shared.CategoryPage;

  /**
   * Client error
   */
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Internal server error
   */
  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
