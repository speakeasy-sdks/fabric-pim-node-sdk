import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class XSiteContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, name=account" })
  account?: string;

  @SpeakeasyMetadata({ data: "header, name=channel" })
  channel?: number;

  @SpeakeasyMetadata({ data: "header, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "header, name=stage" })
  stage?: string;
}
