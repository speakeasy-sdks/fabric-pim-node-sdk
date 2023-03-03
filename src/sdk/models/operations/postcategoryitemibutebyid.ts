import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class PostCategoryItemibuteByIDHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class PostCategoryItemibuteByIDRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryItemibuteByIDHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCategoryItemAttributesRequest;
}

export class PostCategoryItemibuteByIDResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryItemAttributes?: shared.CategoryItemAttributes;

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