import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class NodeSourceExclusionsSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}

export class NodeSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata({ elemType: NodeSourceExclusionsSourceExclusions })
  @Expose({ name: "sourceExclusions" })
  @Type(() => NodeSourceExclusionsSourceExclusions)
  sourceExclusions?: NodeSourceExclusionsSourceExclusions[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}