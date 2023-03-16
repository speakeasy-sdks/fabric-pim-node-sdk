import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class ModifyCategoriesNodeSourceExclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  nodeSourcesAndExclusionsRequest?: shared.NodeSourcesAndExclusionsRequest;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-api-key",
  })
  xApiKey?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class ModifyCategoriesNodeSourceExclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeSourcesAndExclusions?: shared.NodeSourcesAndExclusions;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
