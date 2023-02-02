import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryAttribute } from "./categoryattribute";



export class CategoryAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: CategoryAttribute })
  attributes?: CategoryAttribute[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}
