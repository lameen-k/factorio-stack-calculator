import { NameProp } from "data/itemType";

export type imageNameProp = NameProp | string;

export default function imageExist(imageName: imageNameProp) {
  const image = new Image();
  const url_image = "./images/" + imageName + ".png";
  image.src = url_image;
  return !!image.width;
}
