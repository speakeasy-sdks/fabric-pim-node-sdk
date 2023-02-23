import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum NodeSourcesAndExclusionsRequestSourceExclusionsActionEnum {
    Set = "SET",
    Unset = "UNSET"
}

export class NodeSourcesAndExclusionsRequestSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: NodeSourcesAndExclusionsRequestSourceExclusionsActionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}

export class NodeSourcesAndExclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceExclusions", elemType: NodeSourcesAndExclusionsRequestSourceExclusions })
  sourceExclusions?: NodeSourcesAndExclusionsRequestSourceExclusions[];
}