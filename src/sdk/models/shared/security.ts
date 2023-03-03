import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeAPIKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-api-key" })
  apiKey: string;
}