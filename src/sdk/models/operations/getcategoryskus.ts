/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GetCategorySKUsRequest extends SpeakeasyBase {
  /**
   * 24-character system-generated category ID. Either `id` or `nodeId` must be specified.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  /**
   * Human-readable numeric category ID. Either `id` or `nodeId` must be specified.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=nodeId",
  })
  nodeId?: number;

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
   * JSON object containing `channel`, `account`, `stage`, `date`, and `site` <br> .
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GetCategorySKUsResponse extends SpeakeasyBase {
  /**
   * Client error
   */
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  skuPage?: shared.SKUPage;

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
