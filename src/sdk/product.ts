import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";

export class Product {
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
   * itemAttributeFileSearch - Get imported files for product attributes
   *
   * Gets a list of files used to import product attributes, along with their current statuses.
  **/
  itemAttributeFileSearch(
    req: operations.ItemAttributeFileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemAttributeFileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemAttributeFileSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/file/attribute/search";

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
        const res: operations.ItemAttributeFileSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.filePaginationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * itemBundleFileSearch - Get imported files for product bundles
   *
   * Gets a list of files used to import product bundles, along with their current statuses.
  **/
  itemBundleFileSearch(
    req: operations.ItemBundleFileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ItemBundleFileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ItemBundleFileSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/file/bundle/search";

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
        const res: operations.ItemBundleFileSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.filePaginationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createProducts - Create products and bundles
   *
   * Creates multiple products or bundles along with their attributes. In addition, this endpoint supports data validation to ensure accuracy and consistency. <br> **Note**: <br> 1) As a prerequisite category and attributes must be created beforehand. <br> 2) To add a product variant, parentSku must be additionally specified. <br> 3) A product is assigned to only one category but it can be fetched from alternate categories. <br> 4) Up to 50 products or bundles can be added.
  **/
  createProducts(
    req: operations.CreateProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/bulk/insert";

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
        const res: operations.CreateProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productModifyError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * fileSearch - Get imported files for products
   *
   * Gets a list of files used to import products, along with their current statuses
  **/
  fileSearch(
    req: operations.FileSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FileSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FileSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/file/search";

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
        const res: operations.FileSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.filePaginationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateCSVfile - Generate CSV template file for products
   *
   * Generates CSV template to upload products for a specific category.
  **/
  generateCSVfile(
    req: operations.GenerateCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateCSVfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/product/bulk/template/{accountId}/{nodeId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateCSVfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/csv`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.generateCSVfile200ApplicationCsvBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateItemAttributeCSVfile - Generate CSV template for product attributes
   *
   * Generates CSV template to upload product attributes. 
  **/
  generateItemAttributeCSVfile(
    req: operations.GenerateItemAttributeCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemAttributeCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemAttributeCSVfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/bulk/template/attribute";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateItemAttributeCSVfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/csv`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.generateItemAttributeCSVfile200ApplicationCsvBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateItemAttributeS3url - Generate S3 bucket URL for product attributes
   *
   * Generates S3 bucket URL to upload product attribute using CSV file
  **/
  generateItemAttributeS3url(
    req: operations.GenerateItemAttributeS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemAttributeS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemAttributeS3urlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/upload-url/attribute";

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
        const res: operations.GenerateItemAttributeS3urlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getS3URLItemAttributeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateItemBundleCSVfile - Generate CSV template for product bundles
   *
   * Generates CSV template to upload bundles for a specific category.
  **/
  generateItemBundleCSVfile(
    req: operations.GenerateItemBundleCSVfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemBundleCSVfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemBundleCSVfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/product/bulk/template/bundle/{accountId}/{nodeId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GenerateItemBundleCSVfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/csv`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.generateItemBundleCSVfile200ApplicationCsvBinaryString = out;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateItemBundleS3url - Generate S3 bucket URL for product bundles
   *
   * Generates S3 bucket URL to upload product bundles using CSV file
  **/
  generateItemBundleS3url(
    req: operations.GenerateItemBundleS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateItemBundleS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateItemBundleS3urlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/upload-url/bundle";

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
        const res: operations.GenerateItemBundleS3urlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getS3URLBundleResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateS3url - Generate S3 bucket URL for bulk upload of products
   *
   * Generates S3 bucket URL to upload products using CSV file. Follow these steps for bulk upload usign CSV: <br> 1) Download the template using *GET /api-product/v1/product/bulk/template/:accountid/:nodeId* <br> 2) Upload the url using *POST /api-product/v1/upload-url*<br> 3) Open the URL from the response of the above endpoint (*POST /api-product/v1/upload-url*), change the method to PUT, update **binary** in the requestBody type to view the select file option and upload a CSV from local system <br> 4) You may check the status using this endpoint *GET /api-product/v1/product/bulk/file/:fileId/status*
  **/
  generateS3url(
    req: operations.GenerateS3urlRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateS3urlResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateS3urlRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/upload-url";

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
        const res: operations.GenerateS3urlResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getS3URLResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getFileStatus - Get file upload status by ID
   *
   * Gets file upload status by ID
  **/
  getFileStatus(
    req: operations.GetFileStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/product/bulk/file/{fileId}/status", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFileStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getFileStatus200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProductAttribute - Get product attributes
   *
   * Product attributes define characteristics of a product. For example, product name, its identifiers, and description are the common attributes of any product. Attributes are key-value pairs (color: red) that hold information for each property of a product. <br> This endpoint gets all attributes of a product, by SKU or itemId. <br> **Note**: The *Get product* (GET /v1/product) gets product details and their attribute. So, this endpoint is recommended when you have the product SKU or item ID, and only require its attributes.
  **/
  getProductAttribute(
    req: operations.GetProductAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductAttributeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/attribute";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productAttributePage = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProducts - Get products
   *
   * Products can be individual products or a bundle of products. This endpoints allows you to get a list of products - individual products and product bundles, along with their attributes, child products and their details. <br> **Note**: Optional filter parameters can be passed in as query to narrow down the search results.
  **/
  getProducts(
    req: operations.GetProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getProducts200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProductsV2 - Get products by SKU, itemId or parentSku
   *
   * Gets products (individual product or bundle of products) by SKUs, itemIds or parentSkus. Optionally, `page` and `size` can be used query parameters. **Note**: `status` and `date` query parameters works only with pagination when parentSku is omitted. Separate responses are added for bundle and product, use the dropdown to view the corresponding response.
  **/
  getProductsV2(
    req: operations.GetProductsV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProductsV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProductsV2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/product";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProductsV2Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getProductsV2200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyAttributeGroups - Create, update, or delete attribute groups
   *
   * Attribute groups enables merchants to collect various attributes together to make it easier to manage large volume of product information. <br> This endpoint creates, updates, or deletes attribute groups. <br> **Note**: Attribute group is optional. If created, must have at least one attribute.
  **/
  modifyAttributeGroups(
    req: operations.ModifyAttributeGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyAttributeGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyAttributeGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/attribute-group";

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
        const res: operations.ModifyAttributeGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.attributeGroupResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postProductAttributeBulk - Create and update attributes for multiple products
   *
   * Product attributes allow you to define specific characteristics for your items. Common examples of attributes include size, color, and material. Well-defined attributes are important because they enable product discovery and make catalog management easier. <br> This endpoint creates and updates product attributes to be assigned later. <br> **Note**: <br> 1) You can add and manage unlimited attributes for your products. Once they are created, they appear as a selectable option on product pages. <br> 2) In addition, you can assign attributes to products on an individual level or in bulk.
  **/
  postProductAttributeBulk(
    req: operations.PostProductAttributeBulkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostProductAttributeBulkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostProductAttributeBulkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/attribute/bulk";

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
        const res: operations.PostProductAttributeBulkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bulkAttributeResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * productSearch - Find products
   *
   * Finds products - both individually and in bundles. Optional filter parameters help narrow down the search results. When the response is large, `page` and `size` becomes mandatory to support pagination.
  **/
  productSearch(
    req: operations.ProductSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ProductSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ProductSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/search";
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ProductSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productSearch200ApplicationJSONOneOf = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchAttributeGroups - Find attribute groups
   *
   * Finds attribute groups
  **/
  searchAttributeGroups(
    req: operations.SearchAttributeGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAttributeGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAttributeGroupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/attribute-group/search";

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
        const res: operations.SearchAttributeGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.attributeGroupSearchResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBundles - Update bundles
   *
   * Adds and removes items, and also changes quantities within a bundle.
  **/
  updateBundles(
    req: operations.UpdateBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBundlesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/bundle/update";

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
        const res: operations.UpdateBundlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bundleUpdateResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateProducts - Update products and bundles
   *
   * Updates multiple products or bundles, along with their attributes. <br> **Note**: Up to 50 products or bundles can be updated.
  **/
  updateProducts(
    req: operations.UpdateProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/bulk/update";

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
        const res: operations.UpdateProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productModifyError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * upsertProducts - Upsert products or bundles
   *
   * Creates or updates products or bundles along with their attributes. <br> **Note**: <br> 1) If the SKU already exists, this endpoint updates a product. Otherwise, creates a new product with that SKU. <br> 2) Up to 50 products or bundles can be added or updated.
  **/
  upsertProducts(
    req: operations.UpsertProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpsertProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpsertProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/product/bulk/upsert";

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
        const res: operations.UpsertProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.clientError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productModifyError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.serverError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
