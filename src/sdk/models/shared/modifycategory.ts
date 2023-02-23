import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ModifyCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=breadcrumbs" })
  breadcrumbs?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=children" })
  children?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;
}