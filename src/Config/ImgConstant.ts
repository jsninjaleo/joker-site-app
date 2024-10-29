import Beast from "../Assets/Img/beast.jpg";
import Cat from "../Assets/Img/cat.png";
import Flame from "../Assets/Img/flame.jpg";
import Man from "../Assets/Img/man.jpg";
import Woman from "../Assets/Img/woman.jpg";
import PrimaryLogo from "../Assets/Img/primaryLogo.png";
import SecondaryLogo from "../Assets/Img/secondaryLogo.png";
import Ticket from "../Assets/Img/tick.svg";
import FirstPlane from "../Assets/Img/plane_one.png";
import SecondPlane from "../Assets/Img/plane_two.png";
import ThirdPlane from "../Assets/Img/plane_three.png";

export const IMG_ITEMS = [
    { id: "1", name: Woman },
    { id: "2", name: Man },
    { id: "3", name: Flame },
    { id: "4", name: Beast },
];

export const LOGO_ITEMS = [
    { id: "1", name: PrimaryLogo },
    { id: "2", name: SecondaryLogo },
    { id: "3", name: PrimaryLogo },
    { id: "4", name: SecondaryLogo },
    { id: "5", name: PrimaryLogo },
];

export const CAROUSEL_ITEMS = [
    {
        image: FirstPlane,
        isFullImage: true,
    },
    {
        image: SecondPlane,
        isFullImage: true,
    },
    {
        image: ThirdPlane,
        isFullImage: true,
    },
    {
        image: Cat,
        isFullImage: false,
    },
    {
        image: FirstPlane,
        isFullImage: true,
    },
];

export const LETTER_ITEMS = [
    {
        id: "1",
        letter: "GL",
    },
    {
        id: "2",
        letter: "O",
    },
    {
        id: "3",
        letter: "BE",
    },
];

export const TICK_ITEMS = [
    {
        id: "1",
        img: Ticket,
        title: "Pajamų kontrolė ir biudžeto valdymas",
    },
    {
        id: "2",
        img: Ticket,
        title: "Aukščiausio lygio klientų aptarnavimas",
    },
    {
        id: "3",
        img: Ticket,
        title: "Pajamų kontrolė ir biudžeto valdymas",
    },
];
