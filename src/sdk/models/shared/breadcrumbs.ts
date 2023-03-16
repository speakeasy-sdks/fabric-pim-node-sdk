import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum BreadcrumbsHierarchyEnum {
  Primary = "PRIMARY",
  Alternate = "ALTERNATE",
}

export class Breadcrumbs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hierarchy" })
  hierarchy?: BreadcrumbsHierarchyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "level" })
  level?: number;

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
