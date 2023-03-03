import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CategoryItemAttributeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemAttributeConditions" })
  itemAttributeConditions?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}