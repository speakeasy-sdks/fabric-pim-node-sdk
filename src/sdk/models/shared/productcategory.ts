import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductAttribute } from "./productattribute";


export class ProductCategoryBreadcrumbs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: ProductAttribute })
  attributes?: ProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}

export class ProductCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breadcrumbs", elemType: ProductCategoryBreadcrumbs })
  breadcrumbs?: ProductCategoryBreadcrumbs[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}