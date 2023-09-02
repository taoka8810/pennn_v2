import { getBaseURL } from "~/utils/getBaseURL";
import { WP_CustomPostType, WP_Post } from "~/utils/wp-type";

// エンドポイントのベースを取得
const baseURL = getBaseURL();

/**
 * ## getAllPost関数
 *
 * 指定したカスタム投稿タイプの投稿を全て取得する
 *
 * @params `postType`: カスタム投稿タイプを指定する
 * @params `fields`: 取得するフィールドを指定する
 */
export const getAllPost = async (
  postType: WP_CustomPostType,
  fields?: Array<keyof WP_Post>
): Promise<WP_Post[]> => {
  // WPデフォルトの投稿(post)はエンドポイントだと"posts"になるのpostTypeを加工
  const route = postType === "post" ? "posts" : postType;

  // クエリパラメータの生成
  const query = fields ? `_fields=${fields.join(",")}` : null;

  // fetch
  const res = await fetch(`${baseURL}/${route}?${query}`);
  return res.json();
};

/**
 * ## getPostById関数
 *
 * 指定したカスタム投稿タイプとidに合致する投稿を取得する
 */
export const getPostById = async (
  id: number,
  postType: WP_CustomPostType
): Promise<WP_Post> => {
  // WPデフォルトの投稿(post)はエンドポイントだと"posts"になるのpostTypeを加工
  const route = postType === "post" ? "posts" : postType;
  const res = await fetch(`${baseURL}/${route}/${id}`);
  return res.json();
};
