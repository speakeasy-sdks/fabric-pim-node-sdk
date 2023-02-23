import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ModifyCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;

  @SpeakeasyMetadata({ data: "json, name=parentNodeId" })
  parentNodeId?: number;
}