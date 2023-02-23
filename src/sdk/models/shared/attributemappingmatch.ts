import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


// AttributeMappingMatch
/** 
 * Specification for matching attribute mapping.
**/
export class AttributeMappingMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;
}