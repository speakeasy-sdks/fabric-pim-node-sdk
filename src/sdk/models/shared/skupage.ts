import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class SKUPage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "skus" })
  skus?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
