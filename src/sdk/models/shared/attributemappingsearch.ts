import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeMappingMatch } from "./attributemappingmatch";
import { AttributeMappingSort } from "./attributemappingsort";
import { Expose, Type } from "class-transformer";

export class AttributeMappingSearchInclude extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attribute" })
  attribute?: boolean;
}

export class AttributeMappingSearch extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "include" })
  @Type(() => AttributeMappingSearchInclude)
  include?: AttributeMappingSearchInclude;

  @SpeakeasyMetadata()
  @Expose({ name: "match" })
  @Type(() => AttributeMappingMatch)
  match?: AttributeMappingMatch;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  page: number;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size: number;

  @SpeakeasyMetadata({ elemType: AttributeMappingSort })
  @Expose({ name: "sort" })
  @Type(() => AttributeMappingSort)
  sort?: AttributeMappingSort[];
}
