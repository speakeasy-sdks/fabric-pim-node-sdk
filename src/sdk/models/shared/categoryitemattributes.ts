import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategoryItemAttribute } from "./categoryitemattribute";


export class CategoryItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributes", elemType: CategoryItemAttribute })
  itemAttributes?: CategoryItemAttribute[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}