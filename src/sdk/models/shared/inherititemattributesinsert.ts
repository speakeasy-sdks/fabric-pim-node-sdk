/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Action to set the inherited attribute
 */
export enum InheritItemAttributesInsertActionEnum {
  Set = "SET",
}

export class InheritItemAttributesInsert extends SpeakeasyBase {
  /**
   * Action to set the inherited attribute
   */
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: InheritItemAttributesInsertActionEnum;

  /**
   * Name of the attribute that can be inherited
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
