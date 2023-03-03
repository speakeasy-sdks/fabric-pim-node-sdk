import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Breadcrumbs } from "./breadcrumbs";
import { Expose, Type } from "class-transformer";


export class CategoryChild extends SpeakeasyBase {
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
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}