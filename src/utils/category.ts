export const changeCategoryLabel = (category: string) => {
  switch (category) {
    case "web":
      return "Web";
    case "hobby":
      return "Hobby";
    case "other":
      return "Other";
  }
};
