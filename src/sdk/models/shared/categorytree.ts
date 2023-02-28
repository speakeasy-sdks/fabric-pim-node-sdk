import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { CategoryChild } from "./categorychild";
import { Expose, Type } from "class-transformer";

export enum CategoryTreeHierarchyEnum {
    Primary = "PRIMARY",
    Alternate = "ALTERNATE"
}

export class CategoryTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Attribute })
  @Expose({ name: "attributes" })
  @Type(() => Attribute)
  attributes?: Attribute[];

  @SpeakeasyMetadata({ elemType: CategoryChild })
  @Expose({ name: "children" })
  @Type(() => CategoryChild)
  children?: CategoryChild[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hierarchy" })
  hierarchy?: CategoryTreeHierarchyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isActive" })
  isActive?: boolean;

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