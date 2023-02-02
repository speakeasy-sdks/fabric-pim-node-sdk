import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoryItemAttributesItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping" })
  mapping?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetCategoryItemAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemAttributes", elemType: GetCategoryItemAttributesItemAttributes })
  itemAttributes?: GetCategoryItemAttributesItemAttributes[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
