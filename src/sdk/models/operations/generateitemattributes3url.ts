import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GenerateItemAttributeS3urlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GenerateItemAttributeS3urlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateItemAttributeS3urlHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GetS3URLItemAttributeRequest;
}

export class GenerateItemAttributeS3urlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getS3URLItemAttributeResponse?: shared.GetS3URLItemAttributeResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}