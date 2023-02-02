import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodeSourceExclusionsSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}


export class NodeSourceExclusions extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=sourceExclusions", elemType: NodeSourceExclusionsSourceExclusions })
  sourceExclusions?: NodeSourceExclusionsSourceExclusions[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
