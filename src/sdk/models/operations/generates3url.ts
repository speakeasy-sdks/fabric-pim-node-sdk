import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GenerateS3urlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class GenerateS3urlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateS3urlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GetS3URLRequest;
}

export class GenerateS3urlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getS3URLResponse?: shared.GetS3URLResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}