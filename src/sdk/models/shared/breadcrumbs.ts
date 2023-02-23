import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum BreadcrumbsHierarchyEnum {
    Primary = "PRIMARY",
    Alternate = "ALTERNATE"
}

export class Breadcrumbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=hierarchy" })
  hierarchy?: BreadcrumbsHierarchyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}