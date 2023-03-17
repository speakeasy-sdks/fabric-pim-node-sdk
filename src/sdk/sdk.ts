import { Attributes } from "./attributes";
import { BulkImport } from "./bulkimport";
import { Category } from "./category";
import { Product } from "./product";
import axios, { AxiosInstance } from "axios";

export const ServerSandbox = "sandbox";
export const ServerProd = "prod";

export const ServerList: Record<string, string> = {
  [ServerSandbox]: "https://sandbox.copilot.fabric.inc",
  [ServerProd]: "https://live.copilot.fabric.inc",
} as const;

export type SDKProps = {
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: As brands and retailers grow, they often expand their item catalogs, resulting in the need to enrich and manage more product (commonly referred to as item in fabric) data. fabric Product Information Management (PIM) solution alleviates the burden of managing large amounts of item data by means of a central storage repository. fabric PIM helps you with improved data quality, consistent customer experience, reduced time to market, easy integration with external systems, reduced management costs and risks, faster and easier updates, and easy scaling. You can create, import, enrich, validate, distribute, and manage complex item information, centrally. As a result, you deliver product experiences that drive sales through every channel. <br> <br> During onboarding, you are given the necessary credentials to access PIM - Copilot UI, APIs, or both. As a prerequisite, you create a list of items to be sold, identify their unique as well as common properties, and envision their organization into categories and sub categories. A basic workflow is: <br> 1) **Create item attributes** using POST /api-product/v1/product/attribute/bulk. <br> 2) **Update attribute mapping** using POST /api-product/v1/product/attribute/mapping <br> 3) **Create Primary category** using the POST /api-category/v1/category to create the original organizational structure. <br> 4) **Assign item attributes** to Primary category using POST /api-category/v1/category/item-attribute. <br> 5) **Create items** using POST /api-product/v1/product/bulk/insert. <br> 6) **Create Alternate category**, for distribution management and fulfilling various merchandising objectives.
 * https://knowledgebase.fabric.inc/knowledgebase/pim - Find out more about PIM
 */
export class Fabric {
  public attributes: Attributes;
  public bulkImport: BulkImport;
  public category: Category;
  public product: Product;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "3.3.1";
  private _genVersion = "1.12.1";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[ServerSandbox];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.attributes = new Attributes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.bulkImport = new BulkImport(
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
