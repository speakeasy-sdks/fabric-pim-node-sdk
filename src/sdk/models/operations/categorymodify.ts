import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class CategoryModifySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=x-api-key",
  })
  apiKey: string;
}

export class CategoryModifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  modifyCategoryRequest?: shared.ModifyCategoryRequest;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=nodeId",
  })
  nodeId: number;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-api-key",
  })
  xApiKey?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class CategoryModifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modifyCategory?: shared.ModifyCategory;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;
}
