import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateItemAttributeCsVfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class GenerateItemAttributeCsVfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateItemAttributeCsVfileHeaders;
}


export class GenerateItemAttributeCsVfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  generateItemAttributeCSVfile200ApplicationCsvBinaryString?: Uint8Array;
}
