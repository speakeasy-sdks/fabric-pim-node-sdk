import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Category {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * categoryCreate - Create category
   *
   * Creates Primary or Alternate category to organize products into logical groups. <br> **Note**: <br> 1) To add **Primary**  category, only `name` is required in the request. <br> 2) To add a **child** category, both `name` and `parentNodeId` are required. For **child** category, you can additionally specify `order` of display. <br> 3) To add an **Alternate** category, both `name` and `type` are required. <br> **Note**: Category details including category ID received in the response are required for subsequent calls. For example, it's required to *Create product* (POST /v1/product/bulk/insert).
  **/
  categoryCreate(
    req: operations.CategoryCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoryCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoryCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CategoryCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modifyCategory = plainToInstance(
                shared.ModifyCategory,
                httpRes?.data as shared.ModifyCategory,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * categoryModify - Modify category
   *
   * Updates category details such as name, parent, and its order of appearance amongst sibling categories.
  **/
  categoryModify(
    req: operations.CategoryModifyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CategoryModifyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CategoryModifyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/category/{nodeId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CategoryModifyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.modifyCategory = plainToInstance(
                shared.ModifyCategory,
                httpRes?.data as shared.ModifyCategory,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoriesById - Get categories
   *
   * Lists categories and their details including attributes, breadcrumbs, and details of child categories. <br> **Note**: <br> 1) Specify `ids` or `nodeIds` to get specific categories. <br> 2) Use `type` to get a specific category type. <br> 3) When query parameters are omitted, this endpoint returns a paginated response listing all Alternate categories in Active status. As a result, `size` and `page` becomes mandatory to support large data.
  **/
  getCategoriesById(
    req: operations.GetCategoriesByIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesByIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesByIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryPage = plainToInstance(
                shared.CategoryPage,
                httpRes?.data as shared.CategoryPage,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoriesNodeSourceExclusions - Get available category source exclusions
   *
   * Gets available exclusions applied to a category source.
  **/
  getCategoriesNodeSourceExclusions(
    req: operations.GetCategoriesNodeSourceExclusionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesNodeSourceExclusionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesNodeSourceExclusionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/source/exclusion";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesNodeSourceExclusionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.nodeSourceExclusions = plainToInstance(
                shared.NodeSourceExclusions,
                httpRes?.data as shared.NodeSourceExclusions,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoriesNodeSources - Get available category sources
   *
   * Gets all the available category sources. <br> Products are created under the Primary category, and Alternate categories are created to export alternate organizations of the Primary category. So, the Primary category is the source of products that appear in Alternate categories. The category sources are Primary categories that can be used as product sources in Alternate categories. Sources behave similar to symlinks.
  **/
  getCategoriesNodeSources(
    req: operations.GetCategoriesNodeSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoriesNodeSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoriesNodeSourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/source";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoriesNodeSourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.nodeSources = plainToInstance(
                shared.NodeSources,
                httpRes?.data as shared.NodeSources,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoryAttributesByID - Get category attributes
   *
   * Gets all attributes of a category. <br> **Note**: <br> *Get category* endpoint (GET /v1/category) returns categories, their attributes, child categories, and breadcrumb details. So, this endpoint is recommended if you have a category ID and only require its attributes.
  **/
  getCategoryAttributesByID(
    req: operations.GetCategoryAttributesByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryAttributesByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryAttributesByIDRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/attribute";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoryAttributesByIDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.attributePage = plainToInstance(
                shared.AttributePage,
                httpRes?.data as shared.AttributePage,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoryItemAttributes - Get available product attributes
   *
   * Gets all the product (aka item) attributes for the specified category. <br> **Note**: Products may also inherit product attributes from parent categories.
  **/
  getCategoryItemAttributes(
    req: operations.GetCategoryItemAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryItemAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryItemAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/item-attribute";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoryItemAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCategoryItemAttributes = plainToInstance(
                shared.GetCategoryItemAttributes,
                httpRes?.data as shared.GetCategoryItemAttributes,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoryItemAttributesCondition - Get available conditions for product attribute
   *
   * You can filter products from Alternate categories based on the conditions set using the POST /v1/category/item-attribute/condition endpoint. <br> **Note**: Products may inherit conditions from parent category as well.
  **/
  getCategoryItemAttributesCondition(
    req: operations.GetCategoryItemAttributesConditionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryItemAttributesConditionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryItemAttributesConditionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/item-attribute/condition";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoryItemAttributesConditionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getCategoryItemAttributeConditions = plainToInstance(
                shared.GetCategoryItemAttributeConditions,
                httpRes?.data as shared.GetCategoryItemAttributeConditions,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategorySKUs - Get SKUs in a category
   *
   * Gets SKUs of all products belonging to a category. <br> **Note**: <br> 1) To get SKUs, Algolia search is recommended over this endpoint. <br> 2) Categories must exist in the system to get SKUs in that category. If SKUs are not created in the given category ID, this endpoint returns an empty list.
  **/
  getCategorySKUs(
    req: operations.GetCategorySKUsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategorySKUsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategorySKUsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/sku";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategorySKUsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.skuPage = plainToInstance(
                shared.SKUPage,
                httpRes?.data as shared.SKUPage,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getCategoryTree - Get category tree
   *
   * Hierarchy of parent and children categories form a tree structure. This endpoint returns a tree of categories rooted in the category identified by `id` or `nodeId`.<br> **Note**: <br> 1) If parent category does not exist in the system, you'll get a `404 - Not found` error <br> 2) If a child category does not exist for the given parent, you'll get a success response but `children` property will show a blank array.
  **/
  getCategoryTree(
    req: operations.GetCategoryTreeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCategoryTreeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCategoryTreeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/tree";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCategoryTreeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryTree = plainToInstance(
                shared.CategoryTree,
                httpRes?.data as shared.CategoryTree,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyCategoriesNodeSourceExclusions - Create and update category source exclusions
   *
   * Creates and updates exclusions for category source, by ID. For example, a category source 'Electronics' has Laptop, Mobile, and Tablet as child categories. It's possible to exclude Tablet using this endpoint, so that it does not appear for shoppers.
  **/
  modifyCategoriesNodeSourceExclusions(
    req: operations.ModifyCategoriesNodeSourceExclusionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyCategoriesNodeSourceExclusionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyCategoriesNodeSourceExclusionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/source/exclusion";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyCategoriesNodeSourceExclusionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.nodeSourcesAndExclusions = plainToInstance(
                shared.NodeSourcesAndExclusions,
                httpRes?.data as shared.NodeSourcesAndExclusions,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyCategoriesNodeSources - Create and update category sources
   *
   * Creates and updates category sources. <br> Primary category is the original catalog tree consisting of nested levels of child categories and is used to place products where they belong. Alternate categories are dynamic and populated from the Primary category, which is the original source of items. Source for an Alternate category points to a Primary category, and makes all products in the Primary category appear within the Alternate category; it behaves like a symlink.
  **/
  modifyCategoriesNodeSources(
    req: operations.ModifyCategoriesNodeSourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyCategoriesNodeSourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyCategoriesNodeSourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/source";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyCategoriesNodeSourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.nodeSourcesAndExclusions = plainToInstance(
                shared.NodeSourcesAndExclusions,
                httpRes?.data as shared.NodeSourcesAndExclusions,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCategoryAttributeBulk - Create, update, or delete category attributes
   *
   * Creates, updates, and deletes category attributes. The primary purpose is to create and edit the attributes to be assigned to categories. <br> **Note**: They are generic category attributes and not specific to a category.
  **/
  postCategoryAttributeBulk(
    req: operations.PostCategoryAttributeBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryAttributeBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryAttributeBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/attribute/bulk";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCategoryAttributeBulkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.bulkAttributeResponse = plainToInstance(
                shared.BulkAttributeResponse,
                httpRes?.data as shared.BulkAttributeResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCategoryAttributeByID - Create, update, and delete attributes of a category
   *
   * Category attributes let you define characteristics of categories and child categories. <br> This endpoint creates, updates, or removes attributes of a single category. The primary purpose is to assign attributes.
  **/
  postCategoryAttributeByID(
    req: operations.PostCategoryAttributeByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryAttributeByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryAttributeByIDRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/attribute";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCategoryAttributeByIDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryAttributes = plainToInstance(
                shared.CategoryAttributes,
                httpRes?.data as shared.CategoryAttributes,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCategoryItemAttributeByID - Create or update product attribute conditions
   *
   * Creates or updates conditions for product attributes so that products can be filtered based on these conditions, from an Alternate category. <br> For example, a Primary category called **Chairs** has three chairs of different materials. An Alternate category called **Wooden Chairs** with Primary category **Chairs** as source will list all the three chairs. Through this endpoint you can add a 'product attribute condition' to filter chairs made of wood from **Wooden Chairs**. Another example: Using this endpoint, you can combine categories and list items on sale (where sale attribute is true).
  **/
  postCategoryItemAttributeByID(
    req: operations.PostCategoryItemAttributeByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryItemAttributeByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryItemAttributeByIDRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/item-attribute/condition";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCategoryItemAttributeByIDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryItemAttributeConditions = plainToInstance(
                shared.CategoryItemAttributeConditions,
                httpRes?.data as shared.CategoryItemAttributeConditions,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postCategoryItemibuteByID - Create, update, and remove product attributes for a category
   *
   * Categories lets merchants segregate and group items. They also allow specifying 'mandatory' and 'optional' attributes that all products (aka items) within that category must have. They are used to store structured information about products. <br> This endpoint creates and updates (also deletes) product attributes for the specified category.
  **/
  postCategoryItemibuteByID(
    req: operations.PostCategoryItemibuteByIDRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCategoryItemibuteByIDResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCategoryItemibuteByIDRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/item-attribute";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCategoryItemibuteByIDResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryItemAttributes = plainToInstance(
                shared.CategoryItemAttributes,
                httpRes?.data as shared.CategoryItemAttributes,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchCategories - Find categories
   *
   * Finds categories, by keywords, category identifiers, type, or status. <br> **Note**: <br> 1) Categories and child categories must already exist in the system. <br> 2) When query parameters are omitted, this endpoint returns a paginated response with all the categories. As a result, `page` and `size` become mandatory to accommodate large data. <br> 3) GET /v1/category (Store admin context) or Algolia search (Shopper context) is strongly recommended over this endpoint.
  **/
  searchCategories(
    req: operations.SearchCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/category/search";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SearchCategoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.categoryPage = plainToInstance(
                shared.CategoryPage,
                httpRes?.data as shared.CategoryPage,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.clientError = plainToInstance(
                shared.ClientError,
                httpRes?.data as shared.ClientError,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.serverError = plainToInstance(
                shared.ServerError,
                httpRes?.data as shared.ServerError,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
