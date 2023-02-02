import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostProductAttributeBulkHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class PostProductAttributeBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostProductAttributeBulkHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BulkProductAttributeRequest })
  request?: shared.BulkProductAttributeRequest[];
}


export class PostProductAttributeBulkResponse extends SpeakeasyBase {
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