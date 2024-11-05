import Beast from "../Assets/Img/beast.jpg";
import Flame from "../Assets/Img/flame.jpg";
import Man from "../Assets/Img/man.jpg";
import Woman from "../Assets/Img/woman.jpg";
import Man_Two from "../Assets/Img/shy.jpg";
import Woman_Two from "../Assets/Img/team_member.png";
import PrimaryLogo from "../Assets/Img/primaryLogo.png";
import SecondaryLogo from "../Assets/Img/secondaryLogo.png";
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

export const TEAM_ITEMS = [
    {
        id: "1",
        title: "CEO",
        first_content: [
            "Account managers take care of every need you might have and outline the objectives to launch a successful campaign",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
        ],
        second_content: [
            "Pajamų kontrolė ir biudžeto valdymas",
            "Aukščiausio lygio klientų aptarnavimas",
            "Pajamų kontrolė ir biudžeto valdymas",
        ],
        name: "Monica",
        img: Woman_Two,
        selected: true,
    },
    {
        id: "2",
        title: "Development",
        first_content: [
            "Account managers take care of every need you might have and outline the objectives to launch a successful campaign",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
        ],
        second_content: [
            "Aukščiausio lygio klientų aptarnavimas",
            "Pajamų kontrolė ir biudžeto valdymas",
        ],
        name: "Lamos",
        img: Man,
        selected: false,
    },
    {
        id: "3",
        title: "Design",
        first_content: [
            "Account managers take care of every need you might have and outline the objectives to launch a successful campaign",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
        ],
        second_content: [
            "Pajamų kontrolė ir biudžeto valdymas",
            "Aukščiausio lygio klientų aptarnavimas",
            "Pajamų kontrolė ir biudžeto valdymas",
        ],
        name: "Alina",
        img: Woman,
        selected: false,
    },
    {
        id: "4",
        title: "Marketing",
        first_content: [
            "Account managers take care of every need you might have and outline the objectives to launch a successful campaign",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
            "With an industry pro in every nichel, we'll find the most relevant AM to lead your project.",
        ],
        second_content: [
            "Aukščiausio lygio klientų aptarnavimas",
            "Pajamų kontrolė ir biudžeto valdymas",
        ],
        name: "Paul",
        img: Man_Two,
        selected: false,
    },
];
