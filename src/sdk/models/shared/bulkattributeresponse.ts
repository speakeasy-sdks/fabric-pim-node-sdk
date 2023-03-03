import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class BulkAttributeResponseAttributesFailed extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  errors?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class BulkAttributeResponseAttributesSuccess extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class BulkAttributeResponseAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: BulkAttributeResponseAttributesFailed })
  @Expose({ name: "failed" })
  @Type(() => BulkAttributeResponseAttributesFailed)
  failed?: BulkAttributeResponseAttributesFailed[];

  @SpeakeasyMetadata({ elemType: BulkAttributeResponseAttributesSuccess })
  @Expose({ name: "success" })
  @Type(() => BulkAttributeResponseAttributesSuccess)
  success?: BulkAttributeResponseAttributesSuccess[];
}

export class BulkAttributeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributes" })
  @Type(() => BulkAttributeResponseAttributes)
  attributes?: BulkAttributeResponseAttributes;
}