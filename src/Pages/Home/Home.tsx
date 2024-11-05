import { useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { Symbol } from "../../Element/SeverSectionCardSymbol";
import {
    Cat,
    Pig,
    Shy,
    Bird,
    Blog,
    Fall,
    Fish,
    Lady,
    Left,
    Star,
    Team,
    Arrow,
    Chain,
    Ghost,
    Right,
    Flower,
    Circle,
    Planet,
    WeTitle,
    DevTitle,
    CloudTwo,
    GhostMan,
    CloudOne,
    Community,
    RightFish,
    CloudThree,
    EvelopTitle,
    Ticket,
} from "../../Config/Images";
import {
    PRIMARY_CARD,
    SECOND_CARD,
    THIRD_CARD,
    FORTH_CARD,
} from "../../Config/CardConstant";
import { NextArrow } from "../../Components/Arrow/NextArrow";
import { PrevArrow } from "../../Components/Arrow/PrevArrow";
import {
    IMG_ITEMS,
    LOGO_ITEMS,
    CAROUSEL_ITEMS,
    LETTER_ITEMS,
    TEAM_ITEMS,
} from "../../Config/ImgConstant";

const opts = {
    width: "100%",
    height: "100%",
    playerVars: { autoplay: 1 },
};

export const Home: React.FC = () => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const videoReady = (event: { target: { pauseVideo: () => void } }) => {
        event.target.pauseVideo();
    };
    const [teamMembers, setTeamMembers] = useState(TEAM_ITEMS);

    const showNextTeamMember = () => {
        setTeamMembers((prevMembers) => {
            const selectItemIndex = prevMembers.findIndex(
                (item) => item.selected === true
            );

            const updatedMembers = prevMembers.map((item, index) => ({
                ...item,
                selected: index === (selectItemIndex + 1) % prevMembers.length,
            }));

            return updatedMembers;
        });
    };

    const showPrevTeamMember = () => {
        setTeamMembers((prevMembers) => {
            const selectItemIndex = prevMembers.findIndex(
                (item) => item.selected === true
            );

            const updatedMembers = prevMembers.map((item, index) => ({
                ...item,
                selected: index === (selectItemIndex + 3) % prevMembers.length,
            }));

            return updatedMembers;
        });
    };

    return (
        <div>
            <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 bg-primary">
                {IMG_ITEMS.map((item, index: number) => {
                    return (
                        <div key={index}>
                            <img
                                src={item.name}
                                className="w-full h-full"
                                alt="img"
                            />
                        </div>
                    );
                })}
                <div className="col-start-1 bg-black w-full aspect-square z-30"></div>
                <div className="relative bg-radial w-full aspect-square lg:pl-7 pl-3 z-30">
                    <div className="absolute top-1 w-full">
                        <div className=" w-1/3">
                            <img
                                src={WeTitle}
                                className="w-full"
                                alt="first-title"
                            />
                        </div>
                        <div className="relative mt-1.5">
                            <div className="w-2/3 h-auto">
                                <img
                                    src={DevTitle}
                                    className="w-full"
                                    alt="second-title"
                                />
                            </div>
                            <div className="absolute top-3/4 w-5/6 h-auto">
                                <img
                                    src={EvelopTitle}
                                    className="w-full"
                                    alt="third-title"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-x-20 md:col-span-4 col-span-2 group">
                    {LOGO_ITEMS.map((item, index) => {
                        return (
                            <div
                                className="relative z-20 animate-example animation-running group-hover:animation-paused cursor-pointer md:block hidden"
                                key={index}
                            >
                                <img
                                    src={item.name}
                                    className="h-full w-full"
                                    alt="Logo"
                                />
                            </div>
                        );
                    })}
                </div>
                <div>
                    <img src={Pig} className="w-full h-full" alt="Pig" />
                </div>
                <div className="flex flex-col">
                    <p className="font-inter 2xl:text-5xl xl:text-4xl text-3xl font-bold leading-none text-section_best pl-7 mt-1">
                        best
                    </p>
                    <p className="text-center font-junge 2xl:text-64 xl:text-5xl text-4xl text-section_websites py-3">
                        websites
                    </p>
                    <div className="flex justify-end pr-6">
                        <p className="font-inter 2xl:text-40 xl:text-3xl text-2xl font-black text-section_on">
                            on the
                        </p>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <img
                        src={Planet}
                        className="h-full w-full absolute z-0"
                        alt="Planet"
                    />
                    {LETTER_ITEMS.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 2xl:text-86 text-6xl text-section_planet font-bold z-10 text-right  content-center pr-3"
                            >
                                {item.letter}
                            </div>
                        );
                    })}
                </div>
                <div>
                    <img src={Shy} className="h-full w-full" alt="Shy" />
                </div>
            </div>
            <div className="xl:px-36 md:px-24 px-12 xl:py-39 md:py-24 py-12 bg-primary">
                <div className="flex justify-center">
                    <p className="font-jersey 2xl:text-7xl xl:text-6xl md:text-5xl text-4xl text-center leading-none md:w-1/2 w-full">
                        Nearly all websites are copycats. But not
                        <span className="text-section_best"> there</span>.
                    </p>
                </div>
                <div className="flex justify-center font-istok 2xl:text-xl text-base text-section_at md:pt-6 pt-4 md:pb-16 pb-8">
                    <p className="md:w-1/2 w-full text-center">
                        At JokerwebDesign.com we search and find the uniqueness
                        for every new website we build
                    </p>
                </div>
                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {PRIMARY_CARD.map((item, index) => {
                        return (
                            <div
                                className={`flex flex-col 3xl:h-64 md:h-72 h-52 ${item.background} 2xl:p-8 md:p-6 p-4 rounded-3xl`}
                                key={index}
                            >
                                <p className="flex-none font-istok md:text-2xl text-lg font-bold tracking-tightest">
                                    {item.title}
                                </p>
                                <p className="flex-1 font-istok md:text-base text-xs tracking-tightest pt-2">
                                    {item.content}
                                </p>
                                <div
                                    className={`relative z-0 flex-none md:h-9 h-4 md:w-9 w-4 rounded-full border border-black ${item.circleColor} hover:bg-circle`}
                                >
                                    {index === 1 ? (
                                        <Symbol color="white" />
                                    ) : (
                                        <Symbol color="black" />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="relative bg-linear xl:px-36 md:px-24 px-12 pt-16">
                <div className="absolute top-0 right-0 z-0">
                    <img src={Star} className="h-full w-full" alt="Star" />
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="z-50">
                        <div className="w-full h-full md:aspect-auto aspect-city relative rounded-3xl border-8 border-city z-10 bg-city_img bg-cover bg-center">
                            <div className="absolute bottom-0 right-0">
                                <div className="sm:h-28 h-20 sm:w-28 w-20 bg-city rounded-tl-full"></div>
                            </div>
                            <div className="absolute bottom-0 sm:-right-12 -right-8 z-30 md:w-1/2 xs:w-1/3 w-1/2">
                                <img
                                    src={Bird}
                                    className="h-full w-full"
                                    alt="Bird"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:gap-y-12 gap-y-6 z-10">
                        <div>
                            <p className="font-jersey xl:text-64 md:text-4xl text-3xl text-white leading-none tracking-tightest">
                                On the internet everybody is equal.
                                <span className="font-jersey xl:text-64 md:text-4xl text-3xl text-main_red leading-none tracking-tightest">
                                    Thats not true.
                                </span>
                            </p>
                            <p className="font-jersey xl:text-64 md:text-4xl text-3xl text-white leading-none tracking-tightest">
                                Equal are those who limit themselves in their
                                minds.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 grid-cols-1 xl:gap-6 gap-4">
                            {SECOND_CARD.map((item, index) => {
                                return (
                                    <div
                                        className="bg-box_linear sm:rounded-3xl rounded-2xl p-1"
                                        key={index}
                                    >
                                        <div className="bg-card_linear flex flex-col xl:gap-y-6 gap-y-4 xl:p-6 p-4 sm:rounded-3xl rounded-2xl h-full">
                                            <p className="font-istok xl:text-2xl text-base font-bold text-card leading-none tracking-tightest">
                                                {item.title}
                                            </p>
                                            <p className="font-istok xl:text-base text-xs text-white leading-none tracking-tightest">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="relative py-6 z-10">
                    <div className="sm:rounded-3xl rounded-2xl border-4 border-ghost overflow-hidden">
                        <img
                            src={Ghost}
                            className="h-full w-full"
                            alt="Ghost"
                        />
                    </div>
                </div>
            </div>
            <div className="relative bg-primary xl:px-36 md:px-24 px-12 xl:pt-9 pt-4 pb-40">
                <div className="flex flex-col lg:gap-y-3 gap-y-1 justify-center items-center xl:py-5 py-2">
                    <div className="flex justify-center items-center">
                        <p className="font-jersey xl:text-10xl lg:text-8xl md:text-7xl text-5xl leading-150 tracking-tightest">
                            PROBLEM
                        </p>
                        <div className="sm:pl-6 pl-0">
                            <p className="font-jersey xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-start tracking-tightest xl:leading-9 leading-6">
                                with
                            </p>
                            <p className="bg-section_best font-jersey xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-white text-start tracking-tightest xl:leading-9 leading-6">
                                creators
                            </p>
                            <p className="font-jersey xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-start tracking-tightest xl:leading-9 leading-6">
                                businesses
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-istok xl:text-xl md:text-base text-sm font-bold text-section_at text-center md:leading-6 leading-5 md:w-1/2 w-full">
                            These days everyone calls himself a website creator.
                            There are tons of tools and templates that allow
                            entering the business with ease, but is that
                            evolving somewhere? No. Read below to find out why.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-y-6">
                    <div className="sm:col-span-5 col-span-12 bg-section_maincard  rounded-3xl border border-box_color">
                        <div className="flex justify-around items-center bg-orange_100  rounded-3xl border border-box_color">
                            <p className="font-jersey text-purple_700 2xl:text-6xl lg:text-3xl md:text-2xl text-xl tracking-tightest">
                                No transparency.
                            </p>
                            <div>
                                <img
                                    src={Circle}
                                    className="h-full w-full"
                                    alt="Icon"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col xl:gap-y-10 md:gap-y-8 gap-y-4 xl:px-12 px-6 xl:py-11 py-6">
                            <p className="font-istok xl:text-xl md:text-base text-sm text-letter tracking-tightest">
                                Hidden Costs: Many web design agencies and
                                platforms advertise low prices but often don’t
                                disclose the full costs upfront. For instance,
                                the initial quote might not include essential
                                services like hosting, maintenance, SEO, or
                                revisions, leading to unexpected expenses.
                            </p>
                            <p className="font-istok xl:text-xl md:text-base text-sm text-letter tracking-tightest">
                                Agencies might use technical jargon that clients
                                don’t understand, making it hard for them to
                                grasp what they are paying for.
                            </p>
                        </div>
                    </div>
                    <div className="relative sm:flex hidden justify-center col-span-2">
                        <div className="absolute -bottom-2/3 font-jersey xl:text-300 text-200 tracking-tightest">
                            +
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 sm:col-span-5 col-span-12">
                        <div className="relative flex justify-end items-center h-full border border-black rounded-3xl bg-cyan_600 sm:aspect-auto aspect-flower">
                            <div className="absolute bottom-0 left-0 z-0 sm:h-full h-auto sm:w-auto w-1/2">
                                <img
                                    src={Flower}
                                    className="h-full w-full"
                                    alt="Flower"
                                />
                            </div>
                            <p className="font-jersey 2xl:text-7xl lg:text-5xl text-4xl text-white tracking-tightest md:pr-7 pr-3 z-10">
                                Lack of passion
                            </p>
                        </div>
                        <div className="flex flex-col xl:gap-y-10 md:gap-y-8 gap-y-4 border border-black rounded-3xl bg-cyan_100 xl:p-12 p-6">
                            <p className="font-istok xl:text-xl md:text-base text-sm text-gray_900 tracking-tightest">
                                Many web design companies and platforms
                                prioritize efficiency and scalability by using
                                templates and pre-built themes. While this
                                speeds up the process and reduces costs, it can
                                limit creativity and lead to cookie-cutter
                                websites.
                            </p>
                            <p className="font-istok xl:text-xl md:text-base text-sm text-gray_900 tracking-tightest">
                                As the industry has grown, some companies treat
                                website creation as a mass-produced service
                                rather than a craft.
                            </p>
                        </div>
                    </div>
                    <div className="flex-col justify-between flex sm:hidden sm:gap-0 gap-4 sm:col-end-13 sm:col-span-5 col-span-12 pb-3">
                        <div className="flex justify-between items-center border border-black rounded-3xl bg-orange_200">
                            <p className="font-jersey 2xl:text-7xl lg:text-4xl md:text-3xl text-2xl text-red_700 tracking-tightest py-6">
                                No innovation
                            </p>
                            <div>
                                <img
                                    src={Chain}
                                    className="h-full w-full"
                                    alt="Flower"
                                />
                            </div>
                        </div>
                        <div className="border border-black rounded-3xl xl:p-12 p-6">
                            <p className="font-istok xl:text-xl text-base text-gray_900 tracking-tightest">
                                Many web design companies and platforms
                                prioritize efficiency and scalability by using
                                templates and pre-built themes.
                            </p>
                        </div>
                    </div>
                    <div className="sm:col-span-5 col-span-12 bg-zinc_950 rounded-t-3xl border  border-x-box_color border-t-box_color border-b-zinc_950 ">
                        <div className="flex justify-around items-center bg-small_linear rounded-3xl border border-box_color">
                            <div>
                                <img
                                    src={Circle}
                                    className="h-full w-full"
                                    alt="Icon"
                                />
                            </div>
                            <p className="font-jersey text-gray_400 2xl:text-6xl lg:text-3xl md:text-2xl text-xl tracking-tightest">
                                Less empathy
                            </p>
                        </div>
                        <div className="flex flex-col xl:gap-y-10 md:gap-y-8 gap-y-4 xl:px-12 px-6 xl:pt-13 pt-9">
                            <p className="font-istok xl:text-xl md:text-base text-sm text-white tracking-tightest">
                                These days everyone calls himself website
                                creator. There are tons of tools and templates
                                that allow to enter the business with an ease,
                                but is that evolving somwehere?
                            </p>
                            <p className="font-istok xl:text-xl md:text-base text-sm text-white tracking-tightest">
                                These days everyone calls himself website
                                creator.
                            </p>
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-col justify-between sm:gap-0 gap-4 sm:col-end-13 sm:col-span-5 col-span-12 pb-3">
                        <div className="flex justify-between items-center border border-black rounded-3xl bg-orange_200 px-6">
                            <p className="font-jersey 2xl:text-7xl lg:text-4xl md:text-3xl text-2xl text-red_700 tracking-tightest py-6">
                                No innovation
                            </p>
                            <div>
                                <img
                                    src={Chain}
                                    className="h-full w-full"
                                    alt="Flower"
                                />
                            </div>
                        </div>
                        <div className="border border-black rounded-3xl xl:p-12 p-6">
                            <p className="font-istok xl:text-xl md:text-base text-sm text-gray_900 tracking-tightest">
                                Many web design companies and platforms
                                prioritize efficiency and scalability by using
                                templates and pre-built themes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc_950  sm:rounded-tr-3xl border-zinc_950 xl:px-12 px-6">
                    <p className="font-istok xl:text-xl md:text-base text-sm text-white tracking-tightest">
                        There are tons of tools
                    </p>
                    <p className="font-istok xl:text-xl md:text-base text-sm text-white tracking-tightest py-4">
                        These days everyone calls himself website creator. There
                        are tons of tools and templates that allow to enter the
                        business with an ease, but is that evolving somwehere?
                    </p>
                </div>
                <div className="relative flex justify-center bg-zinc_950 xl:p-14 p-11 rounded-b-1/2">
                    <div className="absolute sm:-bottom-2/3 xs:-bottom-[40%] xxs:-bottom-[30%] -bottom-[25%] sm:w-auto w-3/4">
                        <img src={Fall} className="h-full w-full" alt="Fall" />
                    </div>
                </div>
            </div>
            <div className="relative bg-primary">
                <div className="absolute bg-zinc_950 w-full -top-12 rounded-t-1/2 p-12 z-0"></div>
                <div className="relative w-full z-10">
                    <div className="w-full flex flex-col items-center bg-rock bg-no-repeat bg-cover bg-zinc_950">
                        <div className="font-jersey 2xl:text-10xl xl:text-8xl sm:text-6xl text-5xl text-white 2xl:leading-100 leading-40 text-center tracking-tightest w-2/3">
                            Creativity
                        </div>
                        <div className="font-jersey 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-white text-center 2xl:leading-100 xl:leading-75 lg:leading-none sm:leading-2 tracking-tightest">
                            can’t be bought. Unle$$...you will buy it from us.
                        </div>
                        <div className="bg-black font-istok xl:text-xl text-xs text-white tracking-tightest sm:leading-25 leading-none sm:w-2/3 w-3/4 px-6 xl:py-7 sm:py-4 py-1">
                            An image or even a video is better than thousand
                            words.
                        </div>
                        <div className="sm:w-2/3 w-3/4 z-20 sm:py-9 py-3 mt-3">
                            <div className="w-full h-32 rounded-12 overflow-hidden m-auto">
                                <YouTube
                                    className="h-full"
                                    opts={opts}
                                    onReady={videoReady}
                                    videoId="hGKM7jO4qK8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary xl:px-36 md:px-24 px-12">
                <div className="flex justify-between sm:pt-24 pt-12">
                    <div>
                        <p>
                            <span className="font-jersey 2xl:text-6xl sm:text-4xl text-2xl text-gray_800 leading-64 tracking-tightest">
                                We sell digital
                            </span>
                            &nbsp;
                            <span className="font-jersey 2xl:text-6xl sm:text-4xl text-2xl text-red_800 leading-64 tracking-tightest">
                                ART
                            </span>
                        </p>
                        <p className="sm:pt-2 pt-1">
                            <span className="bg-red_800 font-finger text-white 2xl:text-7xl sm:text-5xl text-4xl 2xl:leading-132 leading-none tracking-tightest sm:pl-9 pl-3 sm:pr-4 pr-1">
                                for you
                            </span>
                            &nbsp;
                            <span className="bg-primary font-finger 2xl:text-4xl sm:text-2xl text-lg text-gray_300 2xl:leading-94 lg:leading-none leading-8 tracking-tightest">
                                or for your competitors
                            </span>
                        </p>
                    </div>
                    <div className="relative lg:block hidden 2xl:w-auto w-1/4">
                        <img src={Fish} className="h-full w-full" alt="Fish" />
                        <div className="absolute xl:bottom-0 -bottom-6 -left-[28px]">
                            <img
                                src={RightFish}
                                className="h-full w-full"
                                alt="RightFish"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 sm:pt-16 pt-6 sm:pb-6 pb-2">
                    <div className="sm:col-start-2 col-start-1 sm:col-span-3 col-span-4">
                        <p className="font-istok xl:text-2xl text-base font-bold leading-6 tracking-tightest">
                            Digital art is a wallpaper or heavy graphics?
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative bg-beach bg-cover bg-no-repeat w-full z-0 xl:px-36 md:px-24 px-12 lg:pb-80 sm:pb-60 pb-40">
                <div className="relative grid lg:grid-cols-4 grid-cols-3 z-10">
                    <div className="lg:col-start-2 col-start-1 col-span-3 font-istok xl:text-xl md:text-base text-sm tracking-tightest md:pt-0 pt-2">
                        Absolutely no. Digital art is a combination of different
                        disciplines to be used for reaching one common goal -
                        improve business results on the internet.
                    </div>
                </div>
                <div className="relative grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 md:gap-6 gap-4 md:pt-11 pt-4 z-10">
                    {THIRD_CARD.map((item, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`${
                                    index === 0 && "lg:col-start-2 col-start-1"
                                }`}
                            >
                                <div className="rounded-3xl border border-black overflow-hidden">
                                    <img
                                        src={item.img}
                                        className="h-auto w-full"
                                        alt="Beach"
                                    />
                                </div>
                                <div className="flex flex-col h-full md:pt-9 pt-4">
                                    <p className="font-istok font-bold xl:text-xl text-base tracking-tightest">
                                        {item.title}
                                    </p>
                                    <p className="font-istok xl:text-xl md:text-base text-sm md:py-6 py-2 tracking-tightest">
                                        {item.content}
                                    </p>
                                    <div className="md:h-9 h-4 md:w-9 w-4 rounded-full border border-black">
                                        <img
                                            src={Arrow}
                                            className="h-full w-full"
                                            alt="Arrow"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute xs:-bottom-8 bottom-0 xl:left-20 lg:left-36 left-2/3 xl:w-full lg:w-2/3 w-1/3">
                    <img src={GhostMan} className="h-auto" alt="GhostMan" />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 bg-primary">
                {FORTH_CARD.map((item, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                index === 0 &&
                                "col-span-2 border-none rounded-l-none"
                            } flex justify-center items-center border-dotted rounded-3xl border border-gray_700 sm:h-80 h-40 ${
                                item.style
                            }`}
                        >
                            <div>
                                {item.icon && (
                                    <div className="flex justify-center">
                                        <div>
                                            <img
                                                src={item.icon}
                                                className="xl:w-full w-2/3"
                                                alt="Icon"
                                            />
                                        </div>
                                    </div>
                                )}
                                <p
                                    className={`font-jersey ${
                                        index === 0
                                            ? "xl:text-64 md:text-5xl text-4xl"
                                            : "xl:text-xl md:text-base text-sm leading-none tracking-tightest"
                                    }`}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bg-primary lg:py-40 md:py-20 sm:py-10 py-4">
                <div className="xl:px-36 md:px-24 px-12">
                    <p>
                        <span className="font-jersey sm:text-64 text-3xl leading-64 tracking-tightest">
                            Case studies
                        </span>
                        &nbsp;
                        <span className="font-jersey sm:text-64 text-3xl leading-64 tracking-tightest">
                            &lt;|&gt;
                        </span>
                    </p>
                    <div className="font-istok lg:text-xl sm:text-lg xs:text-base text-xs text-section_at lg:leading-25 leading-none tracking-tightest sm:pt-6 pt-2">
                        <p>
                            You can put all your energy into scaling your
                            business while we set up a consistent stream of
                            vetted business leads to your pipeline.
                        </p>
                    </div>
                </div>
                <div className="relative z-30 sm:py-10 py-3">
                    <Slider {...settings}>
                        {CAROUSEL_ITEMS.map((item, index) => {
                            return (
                                <div
                                    className=" sm:px-5 px-2 pb-24 lg:aspect-carousel aspect-carousel_two sm:!w-23 !w-43"
                                    key={index}
                                >
                                    <div className="w-full h-full rounded-3xl border-2 shadow-lg shadow-black border-black overflow-hidden">
                                        <img
                                            src={item.image}
                                            className="h-full w-full"
                                            alt={`Plane-${index}`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                    <div className="absolute sm:right-[8%] right-[14%] 4xl:top-[5%] 3.5xl:top-[6%] 1.5xl:top-[8%] xl:top-[8.5%] 1.5md:top-[10%] sm:top-[12%] xs:top-[3%] top-[5%] sm:px-5 px-2 pb-24 lg:aspect-carousel aspect-carousel_two sm:!w-23 !w-43">
                        <div className="w-full h-full relative flex justify-center bg-section_maincard rounded-3xl">
                            <div className="absolute w-1/2 flex justify-center bottom-0 translate-y-1/2">
                                <img
                                    src={Cat}
                                    alt="Cat"
                                    className="w-full h-full before:bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-street bg-cover z-0 xl:px-36 md:px-24 px-12 pb-10">
                <div className="relative w-full text-center xl:py-4 py-2">
                    <p className="font-jersey 2xl:text-64 xl:text-5xl text-4xl 2xl:leading-64 leading-none tracking-tightest">
                        The &nbsp;
                        <span className="font-jersey 2xl:text-10xl xl:text-8xl text-6xl 2xl:leading-150 leading-none tracking-tightest">
                            team
                        </span>
                        &nbsp; of Jokers
                    </p>
                </div>
                {teamMembers.map((item, index) => {
                    return (
                        item.selected === true && (
                            <div
                                className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-40 lg:gap-x-24 gap-x-10 z-10 md:gap-y-0 gap-y-8 xl:pt-6 pt-4"
                                key={index}
                            >
                                <div>
                                    <div className="flex justify-between bg-black rounded-2xl w-full px-6 xl:py-4 py-1">
                                        <div className="flex justify-center items-center font-istok font-bold xl:text-2xl text-xs text-white tracking-tightest">
                                            {item.title}
                                        </div>
                                        <div>
                                            <img
                                                src={Team}
                                                className=""
                                                alt="Team"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col 2xl:gap-y-8 gap-y-6 xl:pt-9 pt-5 px-4">
                                        {item.first_content.map(
                                            (item, index) => {
                                                return (
                                                    <p
                                                        className="font-istok 2xl:text-xl lg:text-lg text-sm tracking-tightest"
                                                        key={index}
                                                    >
                                                        {item}
                                                    </p>
                                                );
                                            }
                                        )}
                                        {item.second_content.map(
                                            (item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="flex"
                                                    >
                                                        <div>
                                                            <img
                                                                src={Ticket}
                                                                className="xl:h-full h-2/3 xl:w-full w-2/3"
                                                                alt="Tick"
                                                            />
                                                        </div>
                                                        <p className="font-istok 2xl:text-xl lg:text-lg text-sm pl-2">
                                                            {item}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col bg-teammember bg-center bg-cover bg-no-repeat rounded-3xl border-4 border-black">
                                    <div className="flex justify-between items-center xl:px-6 px-4 xl:pt-12 md:pt-9 pt-3 xl:pb-6 md:pb-4 pb-2 border-b border-slate_800 z-10">
                                        <p className="font-istok 2xl:text-64 xl:text-5xl md:text-3xl text-xl font-bold tracking-tightest">
                                            {item.name}
                                        </p>
                                        <div className="flex xl:gap-6 gap-4">
                                            <div className="2xl:h-20 xl:h-14 sm:h-10 h-8 2xl:w-20 xl:w-14 sm:w-10 w-8">
                                                <img
                                                    src={Left}
                                                    className="h-full w-full"
                                                    alt="Left"
                                                    onClick={showPrevTeamMember}
                                                />
                                            </div>
                                            <div className="2xl:h-20 xl:h-14 sm:h-10 h-8 2xl:w-20 xl:w-14 sm:w-10 w-8">
                                                <img
                                                    src={Right}
                                                    className="h-full w-full"
                                                    alt="Right"
                                                    onClick={showNextTeamMember}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-end items-center pt-10">
                                        <div className="1.5xl:h-490 lg:h-[400px] xs:h-[350px] 1.5xl:w-450 lg:w-[260px] xs:w-[230px] w-[200px]">
                                            <img
                                                src={item.img}
                                                className="h-full w-full"
                                                alt="TeamMember"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    );
                })}
                <div className="absolute left-0 -bottom-16 md:block hidden">
                    <img
                        src={Lady}
                        className="xl:h-2/3 h-1/3 xl:w-2/3 w-1/3"
                        alt="Lady"
                    />
                </div>
            </div>
            <div className="bg-primary xl:px-36 md:px-24 px-12 2xl:py-48 xl:py-36 md:py-24 py-12">
                <div className="text-center font-jersey 2xl:text-64 xl:text-5xl md:text-4xl text-3xl leading-none tracking-tightest">
                    <p>Expand your perception</p>
                    <p> with our content</p>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-x-20 gap-x-16 2xl:pt-16 md:pt-10 pt-5 md:gap-y-0 gap-y-4">
                    <div className="flex flex-col 2xl:gap-y-6 md:gap-y-3 gap-y-1">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src={Blog}
                                    className="lg:h-full h-2/3 xl:w-full w-2/3"
                                    alt="Blog"
                                />
                            </div>
                            <p className="font-inter xl:text-base text-xs text-slate_200 lg:pl-2 pl-1">
                                Blog
                            </p>
                        </div>
                        <div>
                            <img
                                src={CloudOne}
                                className="h-full w-full"
                                alt="Cloud"
                            />
                        </div>
                        <div className="2xl:p-6 p-2">
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4 xl:py-7 py-3 border-b border-slate_50 hover:text-header_button cursor-pointer">
                                <p>
                                    Complete guide to lead generation
                                    outsourcing in B2B
                                </p>
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4 xl:py-7 py-3 border-b border-slate_50 hover:text-header_button cursor-pointer">
                                <p>
                                    B2B appointment setting costs & pricing
                                    models explained
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col 2xl:gap-y-6 gap-y-3">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src={Community}
                                    className="lg:h-full h-2/3 xl:w-full w-2/3"
                                    alt="Community"
                                />
                            </div>
                            <p className="font-inter xl:text-base text-xs text-slate_200 lg:pl-2 pl-1">
                                Community
                            </p>
                        </div>
                        <div>
                            <img
                                src={CloudTwo}
                                className="h-full w-full"
                                alt="Cloud"
                            />
                        </div>
                        <div className="2xl:p-6 p-2">
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4 xl:py-7 py-3 border-b border-slate_50 hover:text-header_button cursor-pointer">
                                <p>
                                    SEO podcast: kas slypi už sėkmingo pardavimo
                                </p>
                            </div>
                            <div className="font-inter font-bold 2xl:text-xl text-base hover:underline hover:underline-offset-4 hover:text-header_button cursor-pointer tracking-tightest xl:py-7 py-3 border-b border-slate_50">
                                Dizaino pavyzdžių galerija
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4    xl:py-7 py-3 hover:text-header_button cursor-pointer">
                                SEO podcast: kas slypi už sėkmingo pardavimo
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col 2xl:gap-y-6 gap-y-3">
                        <div className="flex items-center">
                            <div>
                                <img
                                    src={Blog}
                                    className="lg:h-full h-2/3 xl:w-full w-2/3"
                                    alt="Blog"
                                />
                            </div>
                            <p className="font-inter xl:text-base text-xs text-slate_200 lg:pl-2 pl-1">
                                Resources
                            </p>
                        </div>
                        <div>
                            <img
                                src={CloudThree}
                                className="h-full w-full"
                                alt="Cloud"
                            />
                        </div>
                        <div className="2xl:p-6 p-2">
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4 xl:py-7 py-3 border-b border-slate_50 hover:text-header_button cursor-pointer">
                                <p>
                                    Complete guide to lead generation
                                    outsourcing in B2B
                                </p>
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-base tracking-tightest hover:underline hover:underline-offset-4 xl:py-7 py-3 border-b border-slate_50 hover:text-header_button cursor-pointer">
                                <p>
                                    B2B appointment setting costs & pricing
                                    models explained
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
