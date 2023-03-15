import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CategorySingle } from "./categorysingle";
import { Expose, Type } from "class-transformer";

export class CategoryPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CategorySingle })
  @Expose({ name: "categories" })
  @Type(() => CategorySingle)
  categories?: CategorySingle[];

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "totalSize" })
  totalSize?: number;
}
