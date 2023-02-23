import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum ModifyNodeSourcesRequestSourcesActionEnum {
    Set = "SET",
    Unset = "UNSET"
}

export class ModifyNodeSourcesRequestSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: ModifyNodeSourcesRequestSourcesActionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}

export class ModifyNodeSourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: ModifyNodeSourcesRequestSources })
  sources?: ModifyNodeSourcesRequestSources[];
}