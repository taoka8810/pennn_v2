import { getBaseURL } from "~/utils/getBaseURL";
import { WP_Category } from "~/utils/wp-type";

// エンドポイントのベースを取得
const baseURL = getBaseURL();

export const getAllCategory = async (): Promise<WP_Category[]> => {
  const res = await fetch(`${baseURL}/categories`);
  return res.json();
};

export const getCategoryById = async (id: number): Promise<WP_Category> => {
  const res = await fetch(`${baseURL}/categories/${id}`);
  return res.json();
};
