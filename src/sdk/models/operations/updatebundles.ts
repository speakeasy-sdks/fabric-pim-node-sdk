import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class UpdateBundlesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
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
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}