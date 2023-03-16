import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class PostProductAttributeBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "request, media_type=application/json",
    elemType: shared.BulkProductAttributeRequest,
  })
  requestBody?: shared.BulkProductAttributeRequest[];

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class PostProductAttributeBulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkAttributeResponse?: shared.BulkAttributeResponse;

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
