import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategorySingle } from "./categorysingle";



export class CategoryPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: CategorySingle })
  categories?: CategorySingle[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
