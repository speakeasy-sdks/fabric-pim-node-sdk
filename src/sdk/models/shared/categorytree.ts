import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { CategoryChild } from "./categorychild";


export enum CategoryTreeHierarchyEnum {
    Primary = "PRIMARY",
    Alternate = "ALTERNATE"
}


export class CategoryTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: CategoryChild })
  children?: CategoryChild[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=hierarchy" })
  hierarchy?: CategoryTreeHierarchyEnum;

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
