import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class NodeSourcesAndExclusionsSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class NodeSourcesAndExclusionsSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class NodeSourcesAndExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceExclusions", elemType: NodeSourcesAndExclusionsSourceExclusions })
  sourceExclusions?: NodeSourcesAndExclusionsSourceExclusions[];

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: NodeSourcesAndExclusionsSources })
  sources?: NodeSourcesAndExclusionsSources[];
}