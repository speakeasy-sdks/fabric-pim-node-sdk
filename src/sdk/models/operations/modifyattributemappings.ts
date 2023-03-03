import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class ModifyAttributeMappingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}

export class ModifyAttributeMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ModifyAttributeMappingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AttributeMappingModify;
}

export class ModifyAttributeMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributeMappingResponse?: shared.AttributeMappingResponse;

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