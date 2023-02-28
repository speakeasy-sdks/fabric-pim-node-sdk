import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


// AttributeMappingMatch
/** 
 * Specification for matching attribute mapping.
**/
export class AttributeMappingMatch extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributeId" })
  attributeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mapping" })
  mapping?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: string;
}