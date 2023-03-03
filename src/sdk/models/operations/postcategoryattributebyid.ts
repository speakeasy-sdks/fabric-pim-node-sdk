import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class PostCategoryAttributeByIDHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class PostCategoryAttributeByIDRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryAttributeByIDHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCategoryAttributesRequest;
}

export class PostCategoryAttributeByIDResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryAttributes?: shared.CategoryAttributes;

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