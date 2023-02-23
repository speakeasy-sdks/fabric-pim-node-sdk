import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GenerateItemBundleS3urlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class GenerateItemBundleS3urlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateItemBundleS3urlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GetS3URLBundleRequest;
}

export class GenerateItemBundleS3urlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getS3URLBundleResponse?: shared.GetS3URLBundleResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}