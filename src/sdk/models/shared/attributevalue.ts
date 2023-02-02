import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
