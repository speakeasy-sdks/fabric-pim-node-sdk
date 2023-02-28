import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AttributeMappingSortDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export enum AttributeMappingSortFieldEnum {
    CreatedOn = "createdOn",
    UpdatedOn = "updatedOn",
    Mapping = "mapping"
}

// AttributeMappingSort
/** 
 * Individual fields to sort
**/
export class AttributeMappingSort extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "direction" })
  direction?: AttributeMappingSortDirectionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: AttributeMappingSortFieldEnum;
}