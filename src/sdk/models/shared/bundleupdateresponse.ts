import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class BundleUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdOn" })
  createdOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "itemId" })
  itemId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedOn" })
  modifiedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "quantity" })
  quantity?: number;
}