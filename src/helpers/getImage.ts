export const getImgUrl = (name: string, fileType: string): string => {
  let image;

  switch (fileType) {
    case "png":
      image = require.context("../assets/", false, /\.png$/);
      break;
    case "jpg":
      image = require.context("../assets/", false, /\.jpg$/);
      break;
    case "gif":
      image = require.context("../assets/", false, /\.gif$/);
      break;
  }

  return image ? image("./" + name + "." + fileType) : "";
};
