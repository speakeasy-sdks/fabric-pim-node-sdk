import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategoryItemAttribute } from "./categoryitemattribute";
import { Expose, Type } from "class-transformer";

export class CategoryItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata({ elemType: CategoryItemAttribute })
  @Expose({ name: "itemAttributes" })
  @Type(() => CategoryItemAttribute)
  itemAttributes?: CategoryItemAttribute[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
