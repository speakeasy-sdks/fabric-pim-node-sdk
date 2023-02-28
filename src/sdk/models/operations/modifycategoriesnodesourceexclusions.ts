import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ModifyCategoriesNodeSourceExclusionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" })
  xApiKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class ModifyCategoriesNodeSourceExclusionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class ModifyCategoriesNodeSourceExclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyCategoriesNodeSourceExclusionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.NodeSourcesAndExclusionsRequest;

  @SpeakeasyMetadata()
  security: ModifyCategoriesNodeSourceExclusionsSecurity;
}

export class ModifyCategoriesNodeSourceExclusionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nodeSourcesAndExclusions?: shared.NodeSourcesAndExclusions;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;
}