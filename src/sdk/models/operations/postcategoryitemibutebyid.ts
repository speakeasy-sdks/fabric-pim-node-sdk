import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCategoryItemibuteByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


export class PostCategoryItemibuteByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostCategoryItemibuteByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryItemibuteByIdHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCategoryItemAttributesRequest;

  @SpeakeasyMetadata()
  security: PostCategoryItemibuteByIdSecurity;
}


export class PostCategoryItemibuteByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categoryItemAttributes?: shared.CategoryItemAttributes;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}
