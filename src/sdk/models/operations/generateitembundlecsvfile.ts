import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GenerateItemBundleCSVfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=accountId",
  })
  accountId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=nodeId",
  })
  nodeId: string;
}

export class GenerateItemBundleCSVfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GenerateItemBundleCSVfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateItemBundleCSVfilePathParams;

  @SpeakeasyMetadata()
  headers: GenerateItemBundleCSVfileHeaders;
}

export class GenerateItemBundleCSVfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  generateItemBundleCSVfile200ApplicationCsvBinaryString?: Uint8Array;
}
