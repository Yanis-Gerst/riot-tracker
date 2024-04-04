import conquerorImg from "../assets/runes/Conqueror.png";
import sorceryImg from "../assets/runes/Sorcery.png";
import top from "../assets/roles/Top.png";
import jungle from "../assets/roles/Jungle.png";
import mid from "../assets/roles/Mid.png";
import bottom from "../assets/roles/Bottom.png";
import support from "../assets/roles/Support.png";

export const rolesImg = [top, jungle, mid, bottom, support];

export const getRunesImg = (name: string) => {
  switch (name) {
    case "conqueror":
      return conquerorImg;
    case "sorcery":
      return sorceryImg;
  }
};
