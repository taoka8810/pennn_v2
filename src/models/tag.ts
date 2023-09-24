import { getBaseURL } from "~/utils/getBaseURL";
import { WP_Tag } from "~/utils/wp-type";

// エンドポイントのベースを取得
const baseURL = getBaseURL();

/**
 * ## getAllTags関数
 *
 * クエリで指定したタグを全て取得する
 *
 * @params `amount`: 取得するタグの数を指定する
 * @params `order`: 昇順か降順を指定
 * @params `orderby`
 */
export const getAllTag = async (
  amount: number | null,
  order: "asc" | "desc" | null,
  orderby: keyof WP_Tag | null
): Promise<WP_Tag[]> => {
  // それぞれのquery stringを生成
  const perPageQuery = amount ? `per_page=${amount}` : null;
  const orderQuery = order && `order=${order}`;
  const orderbyQuery = orderby && `orderby=${orderby}`;

  const query = `${perPageQuery}&${orderQuery}&${orderbyQuery}`;

  const res = await fetch(`${baseURL}/tags?${query}`);
  return res.json();
};

export const getTagById = async (id: number): Promise<WP_Tag> => {
  const res = await fetch(`${baseURL}/tags/${id}`);
  return res.json();
};
