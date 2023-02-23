import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class BulkAttributeResponseAttributesFailed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class BulkAttributeResponseAttributesSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class BulkAttributeResponseAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed", elemType: BulkAttributeResponseAttributesFailed })
  failed?: BulkAttributeResponseAttributesFailed[];

  @SpeakeasyMetadata({ data: "json, name=success", elemType: BulkAttributeResponseAttributesSuccess })
  success?: BulkAttributeResponseAttributesSuccess[];
}

export class BulkAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: BulkAttributeResponseAttributes;
}