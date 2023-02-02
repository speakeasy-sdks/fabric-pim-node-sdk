import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


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
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: AttributeMappingSortDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: AttributeMappingSortFieldEnum;
}
