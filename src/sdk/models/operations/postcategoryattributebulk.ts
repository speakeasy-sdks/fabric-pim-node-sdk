import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PostCategoryAttributeBulkHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class PostCategoryAttributeBulkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostCategoryAttributeBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostCategoryAttributeBulkHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BulkAttributeRequest })
  request?: shared.BulkAttributeRequest[];

  @SpeakeasyMetadata()
  security: PostCategoryAttributeBulkSecurity;
}

export class PostCategoryAttributeBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkAttributeResponse?: shared.BulkAttributeResponse;

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}