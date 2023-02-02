import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoryItemAttributeByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


export class PostCategoryItemAttributeByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryItemAttributeByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CategoryItemAttributeConditionsRequest;
}


export class PostCategoryItemAttributeByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryItemAttributeConditions?: shared.CategoryItemAttributeConditions;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
