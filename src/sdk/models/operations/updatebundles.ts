import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class UpdateBundlesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class UpdateBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateBundlesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BundleUpdateRequest;
}

export class UpdateBundlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BundleUpdateResponse })
  bundleUpdateResponse?: shared.BundleUpdateResponse[];

  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}