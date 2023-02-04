import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Attributes } from "./attributes";
import { Category } from "./category";
import { Product } from "./product";


export const ServerList = [
	"https://{customerDomain}/api-category",
	"https://{customerDomain}/api-product",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://knowledgebase.fabric.inc/knowledgebase/pim - Find out more about PIM*/
export class SDK {
  public attributes: Attributes;
  public category: Category;
  public product: Product;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.1.1";
  private _genVersion = "0.22.1";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.attributes = new Attributes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.category = new Category(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.product = new Product(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}