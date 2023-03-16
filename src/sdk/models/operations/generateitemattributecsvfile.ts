import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";

export class GenerateItemAttributeCSVfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GenerateItemAttributeCSVfileResponse extends SpeakeasyBase {
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
  generateItemAttributeCSVfile200ApplicationCsvBinaryString?: Uint8Array;
}
