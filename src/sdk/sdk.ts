/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attributes } from "./attributes";
import { BulkImport } from "./bulkimport";
import { Category } from "./category";
import { Product } from "./product";
import axios, { AxiosInstance } from "axios";

/**
 * Sandbox
 */
export const ServerSandbox = "sandbox";
/**
 * Production
 */
export const ServerProd = "prod";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList: Record<string, string> = {
  [ServerSandbox]: "https://sandbox.copilot.fabric.inc",
  [ServerProd]: "https://live.copilot.fabric.inc",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * As brands and retailers grow, they often expand their item catalogs, resulting in the need to enrich and manage more product (commonly referred to as item in fabric) data. fabric Product Information Management (PIM) solution alleviates the burden of managing large amounts of item data by means of a central storage repository. fabric PIM helps you with improved data quality, consistent customer experience, reduced time to market, easy integration with external systems, reduced management costs and risks, faster and easier updates, and easy scaling. You can create, import, enrich, validate, distribute, and manage complex item information, centrally. As a result, you deliver product experiences that drive sales through every channel. <br> <br> During onboarding, you are given the necessary credentials to access PIM - Copilot UI, APIs, or both. As a prerequisite, you create a list of items to be sold, identify their unique as well as common properties, and envision their organization into categories and sub categories. A basic workflow is: <br> 1) **Create item attributes** using POST /api-product/v1/product/attribute/bulk. <br> 2) **Update attribute mapping** using POST /api-product/v1/product/attribute/mapping <br> 3) **Create Primary category** using the POST /api-category/v1/category to create the original organizational structure. <br> 4) **Assign item attributes** to Primary category using POST /api-category/v1/category/item-attribute. <br> 5) **Create items** using POST /api-product/v1/product/bulk/insert. <br> 6) **Create Alternate category**, for distribution management and fulfilling various merchandising objectives.
 *
 * @see {@link https://knowledgebase.fabric.inc/knowledgebase/pim} - Find out more about PIM
 */
export class Fabric {
  /**
   * Item attributes are the objective and factual descriptions of items that shoppers see when they browse through your site. Attributes may be technical specifications like size, weight, etc., design specifications like color, material, etc., or basic specifications like name, description, and ID. Ites attributes are crucial as they directly influence purchasing decisions. Complete and correct item information help shoppers narrow down their search and filter items with minimal cognitive load.
   */
  public attributes: Attributes;
  /**
   * Set of APIs to help bulk import of items, bundles and attributes through CSV files
   */
  public bulkImport: BulkImport;
  /**
   * Categories (also called hierarchies or nodes) are hierarchical structures to organize items and services into intuitive groups. Organizing items in this way simplifies item discovery and lifecycle management. There are two types of categories - **Primary** and **Alternate**. They enable you to create, organize, and distribute item data. <br> <br> - Primary category is the original catalog tree with nested levels of categories that place each item where it belongs, within a category. For example, `Computers` is a parent category with `Laptops` and `Desktops` as children categories, and `MacBbook Pro` is an item within `Laptops`. This organization can be represented as Computers > Laptops > MacBook Pro. <br> <br> - Alternate categories serve as alternate organizations of the Primary category. Their main purpose is distribution management by displaying items on your website based on separate browsing structure configurations you set to help you achieve various merchandizing objectives, such as organizational requirements, multi-regional assortments, multi-channel assortments, and collections. For example, a company that sells, repairs, and supports computers and related items and services will have a Primary category containing a full list of their SKUs. However, this Primary category is not granular enough to use on their storefront. Hence, multiple Alternate hierarchies are created to target specific shopper segment experiences. For laptop consumers they'll have one Alternate category, which lists all the laptops and PCs. For large businesses they'll have  another Alternate category, which lists all commercial laptops, PCs, printers, and servers. Both of the Alternate categories act as filters of the Primary category, tailored to the purpose of that merchandising strategy. <br> <br> **Category**, a subset of PIM endpoints, aims to simplify catalog management by letting you create, update, and get one or more categories, category attributes, and item attributes. In addition, you can add and update category sources, source exclusions, and item attribute conditions.
   */
  public category: Category;
  /**
   * **Product**, a subset of PIM endpoints, aims at making item management more efficient. They create, update, and get items, which may be individual items or collection of items (called bundles). Each item has a title, item ID, description, category, and assigned attributes. Multiple options of a given item become variants of that item. For example, a t-shirt with three sizes may have small, medium, and large variants. Each variant has its own item ID, attributes, and other data points. Each variant is nested under its parent item, allowing the different options to appear on the same product page. You can also create or update one or more item attributes and attribute groups.
   */
  public product: Product;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "3.7.0";
  private _genVersion = "2.17.8";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[ServerSandbox];

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
