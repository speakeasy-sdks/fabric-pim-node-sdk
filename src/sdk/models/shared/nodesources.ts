import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodeSourcesSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}


export class NodeSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: NodeSourcesSources })
  sources?: NodeSourcesSources[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
