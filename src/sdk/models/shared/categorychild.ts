import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
import { Breadcrumbs } from "./breadcrumbs";



export class CategoryChild extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Attribute })
  attributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=breadcrumbs", elemType: Breadcrumbs })
  breadcrumbs?: Breadcrumbs[];

  @SpeakeasyMetadata({ data: "json, name=children", elemType: CategoryChild })
  children?: CategoryChild[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
