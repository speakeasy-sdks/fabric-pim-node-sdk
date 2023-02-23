import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Breadcrumbs } from "./breadcrumbs";
import { CategoryChild } from "./categorychild";

export enum CategorySingleHierarchyEnum {
    Primary = "PRIMARY",
    Alternate = "ALTERNATE"
}

export class CategorySingle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=breadcrumbs", elemType: Breadcrumbs })
  breadcrumbs?: Breadcrumbs[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: CategoryChild })
  children?: CategoryChild[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=hierarchy" })
  hierarchy?: CategorySingleHierarchyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}