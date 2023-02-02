import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateCsVfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GenerateCsVfileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContextOrAuthorization;
}


export class GenerateCsVfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateCsVfilePathParams;

  @SpeakeasyMetadata()
  headers: GenerateCsVfileHeaders;
}


export class GenerateCsVfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientError?: shared.ClientError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverError?: shared.ServerError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  generateCSVfile200ApplicationCsvBinaryString?: Uint8Array;
}
