import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoryAttributeByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


export class PostCategoryAttributeByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostCategoryAttributeByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryAttributeByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCategoryAttributesRequest;

  @SpeakeasyMetadata()
  security: PostCategoryAttributeByIdSecurity;
}


export class PostCategoryAttributeByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryAttributes?: shared.CategoryAttributes;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
