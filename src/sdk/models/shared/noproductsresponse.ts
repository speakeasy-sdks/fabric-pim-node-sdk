import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NoProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
