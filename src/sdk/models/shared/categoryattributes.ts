import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategoryAttribute } from "./categoryattribute";
import { Expose, Type } from "class-transformer";


export class CategoryAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CategoryAttribute })
  @Expose({ name: "attributes" })
  @Type(() => CategoryAttribute)
  attributes?: CategoryAttribute[];

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}