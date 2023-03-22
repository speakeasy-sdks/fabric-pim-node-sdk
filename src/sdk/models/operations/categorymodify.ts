/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CategoryModifySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=x-api-key",
  })
  apiKey: string;
}

export class CategoryModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  modifyCategoryRequest?: shared.ModifyCategoryRequest;

  /**
   * Human-readable numeric category ID
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=nodeId",
  })
  nodeId: number;

  /**
   * Provided by fabric support after a tenant is created
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-api-key",
  })
  xApiKey?: string;

  /**
   * JSON object containing `channel`, `account`, `stage`, `date`, and `site` <br> .
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class CategoryModifyResponse extends SpeakeasyBase {
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
  modifyCategory?: shared.ModifyCategory;

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
