declare module 'listmonk' {
  interface ApiClient {
    basePath: string;
  }

  interface SubscribeOptions {
    email: string;
    name?: string;
    status?: string;
    lists: number[];
    attributes?: Record<string, any>;
  }

  interface CampaignOptions {
    name: string;
    subject: string;
    lists: number[];
    from_email: string;
    type: string;
    content_type: string;
    body: string;
    template_id: number;
  }

  interface TransactionalOptions {
    template_id: number;
    data: {
      subject: string;
      email: string;
      from_email: string;
      content: any;
    };
  }

  interface RequestOptions {
    headers: {
      Authorization: string;
    };
  }

  class SubscribersApi {
    apiClient: ApiClient;
    subscribersPost(options: SubscribeOptions, requestOpts?: RequestOptions): Promise<any>;
  }

  class CampaignsApi {
    apiClient: ApiClient;
    campaignsPost(options: CampaignOptions, requestOpts?: RequestOptions): Promise<any>;
  }

  class TemplatesApi {
    apiClient: ApiClient;
    transactionalPost(options: TransactionalOptions, requestOpts?: RequestOptions): Promise<any>;
  }

  class AdminApi {
    apiClient: ApiClient;
    adminReloadPost(callback: (error: any, data: any, response: any) => void): void;
  }

  export {
    SubscribersApi,
    CampaignsApi,
    TemplatesApi,
    AdminApi
  };
} 