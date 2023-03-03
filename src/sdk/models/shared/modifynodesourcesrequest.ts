import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum ModifyNodeSourcesRequestSourcesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}

export class ModifyNodeSourcesRequestSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action?: ModifyNodeSourcesRequestSourcesActionEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}

export class ModifyNodeSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ elemType: ModifyNodeSourcesRequestSources })
  @Expose({ name: "sources" })
  @Type(() => ModifyNodeSourcesRequestSources)
  sources?: ModifyNodeSourcesRequestSources[];
}