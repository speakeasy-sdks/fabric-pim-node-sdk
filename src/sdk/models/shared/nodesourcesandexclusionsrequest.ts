import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum NodeSourcesAndExclusionsRequestSourceExclusionsActionEnum {
  Set = "SET",
  Unset = "UNSET",
}

export class NodeSourcesAndExclusionsRequestSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: NodeSourcesAndExclusionsRequestSourceExclusionsActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}

export class NodeSourcesAndExclusionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({
    elemType: NodeSourcesAndExclusionsRequestSourceExclusions,
  })
  @Expose({ name: "sourceExclusions" })
  @Type(() => NodeSourcesAndExclusionsRequestSourceExclusions)
  sourceExclusions?: NodeSourcesAndExclusionsRequestSourceExclusions[];
}
