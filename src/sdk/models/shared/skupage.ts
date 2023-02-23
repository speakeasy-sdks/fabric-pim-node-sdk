import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SKUPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=skus" })
  skus?: string[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}