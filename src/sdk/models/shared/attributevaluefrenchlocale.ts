import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class AttributeValueFrenchLocale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}