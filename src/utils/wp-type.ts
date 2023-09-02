// WordPress側のデータ型を定義
// 参照：https://developer.wordpress.org/rest-api/reference/

export type WP_Post = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "feature" | "draft" | "pending" | "private";
  type: string;
  password?: string;
  permalink_template?: string;
  generated_slug?: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quite"
    | "status"
    | "video"
    | "audio";
  meta: string[];
  sticky: boolean;
  template: string;
  categories: number[];
  tags: number[];
};

export type WP_Category = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy:
    | "category"
    | "post_tag"
    | "nav_menu"
    | "link_category"
    | "post_format";
  parent: number;
  meta: any[];
};

export type WP_Tag = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy:
    | "category"
    | "post_tag"
    | "nav_menu"
    | "link_category"
    | "post_format";
  meta: any[];
};

export type WP_User = {
  id: number;
  username?: string;
  name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  url: string;
  description: string;
  link: string;
  locale?: string;
  nickname?: string;
  slug: string;
  roles?: any[];
  capabilities?: any;
  avatar_urls: {
    "24": string;
    "48": string;
    "49": string;
  };
  meta: any[];
};

export type WP_Media = {
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  id: number;
  link: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "feature" | "draft" | "pending" | "private";
  type: string;
  permalink_template?: string;
  generated_slug?: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  meta: any[];
  template: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
  description: {
    rendered: string;
  };
  media_type: string;
  mime_type: string;
  media_details: any;
  post: number;
  source_url: string;
  missing_image_sizes?: any[];
};

export type WP_CustomPostType = "post" | "portforio";
