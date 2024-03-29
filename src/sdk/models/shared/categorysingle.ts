import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Breadcrumbs } from "./breadcrumbs";
import { CategoryChild } from "./categorychild";
import { Expose, Type } from "class-transformer";

export enum CategorySingleHierarchyEnum {
  Primary = "PRIMARY",
  Alternate = "ALTERNATE",
}

export class CategorySingle extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Attribute })
  @Expose({ name: "attributes" })
  @Type(() => Attribute)
  attributes?: Attribute[];

  @SpeakeasyMetadata({ elemType: Breadcrumbs })
  @Expose({ name: "breadcrumbs" })
  @Type(() => Breadcrumbs)
  breadcrumbs?: Breadcrumbs[];

  @SpeakeasyMetadata({ elemType: CategoryChild })
  @Expose({ name: "children" })
  @Type(() => CategoryChild)
  children?: CategoryChild[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "hierarchy" })
  hierarchy?: CategorySingleHierarchyEnum;

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
