import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryItemAttributeConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributeConditions" })
  itemAttributeConditions?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}
