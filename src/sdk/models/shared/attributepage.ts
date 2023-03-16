import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Expose, Type } from "class-transformer";

export class AttributePage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Attribute })
  @Expose({ name: "attributes" })
  @Type(() => Attribute)
  attributes?: Attribute[];

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

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
