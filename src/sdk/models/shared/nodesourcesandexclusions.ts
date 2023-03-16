import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class NodeSourcesAndExclusionsSourceExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class NodeSourcesAndExclusionsSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "breadcrumbString" })
  breadcrumbString?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class NodeSourcesAndExclusions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ elemType: NodeSourcesAndExclusionsSourceExclusions })
  @Expose({ name: "sourceExclusions" })
  @Type(() => NodeSourcesAndExclusionsSourceExclusions)
  sourceExclusions?: NodeSourcesAndExclusionsSourceExclusions[];

  @SpeakeasyMetadata({ elemType: NodeSourcesAndExclusionsSources })
  @Expose({ name: "sources" })
  @Type(() => NodeSourcesAndExclusionsSources)
  sources?: NodeSourcesAndExclusionsSources[];
}
