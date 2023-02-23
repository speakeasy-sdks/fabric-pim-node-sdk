import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeMappingMatch } from "./attributemappingmatch";
import { AttributeMappingSort } from "./attributemappingsort";


export class AttributeMappingSearchInclude extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: boolean;
}

export class AttributeMappingSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: AttributeMappingSearchInclude;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: AttributeMappingMatch;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=sort", elemType: AttributeMappingSort })
  sort?: AttributeMappingSort[];
}