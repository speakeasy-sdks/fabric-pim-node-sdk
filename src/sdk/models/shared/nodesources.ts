import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class NodeSourcesSources extends SpeakeasyBase {
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

export class NodeSources extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: NodeSourcesSources })
  @Expose({ name: "sources" })
  @Type(() => NodeSourcesSources)
  sources?: NodeSourcesSources[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}