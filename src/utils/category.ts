export const changeCategoryLabel = (category: "web" | "hobby" | "other") => {
  switch (category) {
    case "web":
      return "Web";
    case "hobby":
      return "Hobby";
    case "other":
      return "Other";
  }
};
