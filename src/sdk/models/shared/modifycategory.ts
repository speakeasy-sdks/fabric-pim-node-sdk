import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ModifyCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributes" })
  attributes?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "breadcrumbs" })
  breadcrumbs?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "children" })
  children?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;
}
