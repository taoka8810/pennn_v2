import { getBaseURL } from "~/utils/getBaseURL";
import { WP_Tag } from "~/utils/wp-type";

// エンドポイントのベースを取得
const baseURL = getBaseURL();

export const getAllTag = async (): Promise<WP_Tag[]> => {
  const res = await fetch(`${baseURL}/tags`);
  return res.json();
};

export const getTagById = async (id: number): Promise<WP_Tag> => {
  const res = await fetch(`${baseURL}/tags/${id}`);
  return res.json();
};
