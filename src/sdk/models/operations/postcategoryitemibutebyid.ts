import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCategoryItemibuteByIDHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class PostCategoryItemibuteByIDSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostCategoryItemibuteByIDRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryItemibuteByIDHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ModifyCategoryItemAttributesRequest;

  @SpeakeasyMetadata()
  security: PostCategoryItemibuteByIDSecurity;
}

export class PostCategoryItemibuteByIDResponse extends SpeakeasyBase {
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