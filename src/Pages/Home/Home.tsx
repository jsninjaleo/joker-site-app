import React from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import {
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
    Beach,
    Chain,
    Ghost,
    Right,
    Flower,
    Circle,
    Planet,
    Street,
    WeTitle,
    DevTitle,
    CloudTwo,
    GhostMan,
    CloudOne,
    Community,
    RightFish,
    CloudThree,
    TeamMemeber,
    EvelopTitle,
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
    TICK_ITEMS,
    CAROUSEL_ITEMS,
    LETTER_ITEMS,
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

    return (
        <div>
            <div className="grid grid-cols-6 bg-primary">
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
                <div className="col-start-1 bg-black w-full aspect-square"></div>
                <div className="relative bg-radial w-full aspect-square lg:pl-7 pl-3">
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
                <div className="flex justify-end items-center gap-x-20 col-span-4">
                    {LOGO_ITEMS.map((item, index) => {
                        return (
                            <div key={index}>
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
                    <p className="font-inter 2xl:text-5xl text-4xl font-bold leading-none text-section_best pl-7 mt-1">
                        best
                    </p>
                    <p className="text-center font-junge 2xl:text-64 text-5xl text-section_websites py-3">
                        websites
                    </p>
                    <div className="flex justify-end pr-6">
                        <p className="font-inter 2xl:text-40 text-3xl font-black text-section_on">
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
                                className="flex-1 2xl:text-86 text-6xl text-section_planet font-bold z-10 text-right content-center pr-3"
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
            <div className="xl:px-36 px-24 xl:py-39 py-24 bg-primary">
                <p className="font-jersey 2xl:text-7xl text-6xl text-center leading-none">
                    Nearly all websites are
                </p>
                <p className="font-jersey 2xl:text-7xl text-6xl text-center leading-none">
                    copycats. But not
                    <span className="text-section_best"> there</span>.
                </p>
                <div className="font-istok 2xl:text-xl text-base text-center text-section_at pt-6 pb-16">
                    <p>
                        At JokerwebDesign.com we search and find the uniqueness
                        for every new
                    </p>
                    <p>website we build</p>
                </div>
                <div className="grid 2xl:grid-cols-4 grid-cols-3 gap-6">
                    {PRIMARY_CARD.map((item, index) => {
                        return (
                            <div
                                className={`flex flex-col 3xl:h-64 h-72 ${item.background} 2xl:p-8 p-6 rounded-3xl`}
                                key={index}
                            >
                                <p className="flex-none font-istok text-2xl font-bold tracking-tightest">
                                    {item.title}
                                </p>
                                <p className="flex-1 font-istok text-base tracking-tightest pt-2">
                                    {item.content}
                                </p>
                                <div
                                    className={`flex-none h-9 w-9 rounded-full border border-black ${item.circleColor}`}
                                >
                                    <img
                                        src={item.arrow}
                                        className="h-full w-full"
                                        alt="Arrow"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="relative bg-linear xl:px-36 px-24 pt-16">
                <div className="absolute top-0 right-0 z-0">
                    <img src={Star} className="h-full w-full" alt="Star" />
                </div>
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="z-50">
                        <div className="w-full h-full relative rounded-3xl border-8 border-city z-10 bg-city_img bg-cover bg-center">
                            <div className="absolute bottom-0 right-0">
                                <div className="h-28 w-28 bg-city rounded-tl-full"></div>
                            </div>
                            <div className="absolute bottom-0 -right-24 z-30">
                                <img
                                    src={Bird}
                                    className="h-full xl:w-full w-4/5"
                                    alt="Bird"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:gap-y-12 gap-y-6 z-10">
                        <div>
                            <p className="font-jersey xl:text-64 text-4xl text-white leading-none tracking-tightest">
                                On the internet everybody is equal.
                                <span className="font-jersey xl:text-64 text-4xl text-main_red leading-none tracking-tightest">
                                    Thats not true.
                                </span>
                            </p>
                            <p className="font-jersey xl:text-64 text-4xl text-white leading-none tracking-tightest">
                                Equal are those who limit themselves in their
                                minds.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 xl:gap-x-6 gap-x-4">
                            {SECOND_CARD.map((item, index) => {
                                return (
                                    <div
                                        className="bg-box_linear rounded-3xl p-1"
                                        key={index}
                                    >
                                        <div className="bg-card_linear flex flex-col xl:gap-y-6 gap-y-4 xl:p-6 p-4 rounded-3xl h-full">
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
                    <div className="rounded-3xl border-4 border-ghost overflow-hidden">
                        <img
                            src={Ghost}
                            className="h-full w-full"
                            alt="Ghost"
                        />
                    </div>
                </div>
            </div>
            <div className="relative bg-primary xl:px-36 px-24 xl:pt-9 pt-4 pb-40">
                <div className=" text-center">
                    <div className="flex flex-col gap-y-3 justify-center items-center xl:py-5 py-2">
                        <div className="flex justify-center items-center">
                            <p className="font-jersey xl:text-10xl text-8xl leading-150 tracking-tightest">
                                PROBLEM
                            </p>
                            <div className="py-5 pl-6">
                                <p className="font-jersey xl:text-5xl text-4xl text-start tracking-tightest xl:leading-9 leading-6">
                                    with
                                </p>
                                <p className="bg-section_best font-jersey xl:text-5xl text-4xl text-white text-start tracking-tightest xl:leading-9 leading-6">
                                    creators
                                </p>
                                <p className="font-jersey xl:text-5xl text-4xl text-start tracking-tightest xl:leading-9 leading-6">
                                    businesses
                                </p>
                            </div>
                        </div>
                        <div className="font-istok xl:text-xl text-base font-bold text-section_at text-center leading-6 w-3/4">
                            These days everyone calls himself a website creator.
                            There are tons of tools and templates that allow
                            entering the business with ease, but is that
                            evolving somewhere? No. Read below to find out why.
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-y-6">
                    <div className="col-span-5 bg-section_maincard  rounded-3xl border border-box_color">
                        <div className="flex justify-around items-center bg-orange_100  rounded-3xl border border-box_color">
                            <p className="font-jersey text-purple_700 2xl:text-6xl text-3xl tracking-tightest">
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
                        <div className="flex flex-col xl:gap-y-10 gap-y-8 xl:px-12 px-6 xl:py-11 py-6">
                            <p className="font-istok xl:text-xl text-base text-letter tracking-tightest">
                                Hidden Costs: Many web design agencies and
                                platforms advertise low prices but often don’t
                                disclose the full costs upfront. For instance,
                                the initial quote might not include essential
                                services like hosting, maintenance, SEO, or
                                revisions, leading to unexpected expenses.
                            </p>
                            <p className="font-istok xl:text-xl text-base text-letter tracking-tightest">
                                Agencies might use technical jargon that clients
                                don’t understand, making it hard for them to
                                grasp what they are paying for.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center col-span-2">
                        <div className="absolute -bottom-2/3 font-jersey xl:text-300 text-200 tracking-tightest">
                            +
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 col-span-5">
                        <div className="relative flex justify-end items-center h-full border border-black rounded-3xl bg-cyan_600">
                            <div className="absolute bottom-0 left-0 z-0 xl:w-1/4 w-1/2">
                                <img
                                    src={Flower}
                                    className="h-full w-full"
                                    alt="Flower"
                                />
                            </div>
                            <p className="font-jersey 2xl:text-7xl text-5xl text-white tracking-tightest pr-7 z-10">
                                Lack of passion
                            </p>
                        </div>
                        <div className="flex flex-col xl:gap-y-10 gap-y-8 border border-black rounded-3xl bg-cyan_100 xl:p-12 p-6">
                            <p className="font-istok xl:text-xl text-base text-gray_900 tracking-tightest">
                                Many web design companies and platforms
                                prioritize efficiency and scalability by using
                                templates and pre-built themes. While this
                                speeds up the process and reduces costs, it can
                                limit creativity and lead to cookie-cutter
                                websites.
                            </p>
                            <p className="font-istok xl:text-xl text-base text-gray_900 tracking-tightest">
                                As the industry has grown, some companies treat
                                website creation as a mass-produced service
                                rather than a craft.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-5 bg-zinc_950 rounded-t-3xl border  border-x-box_color border-t-box_color border-b-zinc_950 ">
                        <div className="flex justify-around items-center bg-small_linear rounded-3xl border border-box_color">
                            <div>
                                <img
                                    src={Circle}
                                    className="h-full w-full"
                                    alt="Icon"
                                />
                            </div>
                            <p className="font-jersey text-gray_400 2xl:text-6xl text-3xl tracking-tightest">
                                Less empathy
                            </p>
                        </div>
                        <div className="flex flex-col xl:gap-y-10 gap-y-8 xl:px-12 px-6 xl:pt-13 pt-9">
                            <p className="font-istok xl:text-xl text-base text-white tracking-tightest">
                                These days everyone calls himself website
                                creator. There are tons of tools and templates
                                that allow to enter the business with an ease,
                                but is that evolving somwehere?
                            </p>
                            <p className="font-istok xl:text-xl text-base text-white tracking-tightest">
                                These days everyone calls himself website
                                creator.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between col-end-13 col-span-5 pb-3">
                        <div className="flex justify-around items-center border border-black rounded-3xl bg-orange_200">
                            <p className="font-jersey 2xl:text-7xl text-4xl text-red_700 tracking-tightest py-6">
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
                </div>
                <div className="bg-zinc_950  rounded-tr-3xl border-zinc_950 xl:pl-12 pl-6 pr-32">
                    <p className="font-istok xl:text-xl text-base text-white tracking-tightest">
                        There are tons of tools
                    </p>
                    <p className="font-istok xl:text-xl text-base text-white tracking-tightest py-4">
                        These days everyone calls himself website creator. There
                        are tons of tools and templates that allow to enter the
                        business with an ease, but is that evolving somwehere?
                    </p>
                </div>
                <div className="relative flex justify-center bg-zinc_950 xl:p-14 p-11 rounded-b-1/2">
                    <div className="absolute -bottom-2/3">
                        <img src={Fall} className="h-full w-full" alt="Fall" />
                    </div>
                </div>
            </div>
            <div className="relative bg-primary">
                <div className="absolute bg-zinc_950 w-full -top-12 rounded-t-1/2 p-12 z-0"></div>
                <div className="relative w-full z-10">
                    <div className="w-full flex flex-col items-center bg-rock bg-no-repeat bg-cover bg-zinc_950">
                        <div className="font-jersey 2xl:text-10xl xl:text-8xl text-6xl text-white 2xl:leading-100 leading-40 text-center tracking-tightest w-2/3">
                            Cretivity
                        </div>
                        <div className="font-jersey 2xl:text-6xl xl:text-5xl text-4xl text-white 2xl:leading-100 leading-75 tracking-tightest w-2/3">
                            can’t be bought. Unle$$...you will buy it from us.
                        </div>
                        <div className="bg-black font-istok xl:text-xl text-xs text-white tracking-tightest leading-25 w-2/3 px-6 xl:py-7 py-4">
                            An image or even a video is better than thousand
                            words.
                        </div>
                        <div className="w-2/3 z-20 py-9">
                            <div
                                className="w-full h-full"
                                style={{
                                    margin: "auto",
                                    marginTop: "12px",
                                    height: "32vw",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                }}
                            >
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
            <div className="bg-primary xl:px-36 px-24">
                <div className="flex justify-between pt-24">
                    <div>
                        <p>
                            <span className="font-jersey 2xl:text-6xl text-4xl text-gray_800 leading-64 tracking-tightest">
                                We sell digital
                            </span>
                            &nbsp;
                            <span className="font-jersey 2xl:text-6xl text-4xl text-red_800 leading-64 tracking-tightest">
                                ART
                            </span>
                        </p>
                        <p className="pt-2">
                            <span className="bg-red_800 font-finger text-white 2xl:text-7xl text-5xl 2xl:leading-132 leading-none tracking-tightest pl-9 pr-4">
                                for you
                            </span>
                            &nbsp;
                            <span className="bg-primary font-finger 2xl:text-4xl text-2xl text-gray_300 2xl:leading-94 leading-none tracking-tightest">
                                or for your competitors
                            </span>
                        </p>
                    </div>
                    <div className="relative 2xl:w-auto w-1/4">
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
                <div className="grid grid-cols-4 pt-16 pb-6">
                    <div className="col-start-2 col-span-3">
                        <p className="font-istok xl:text-2xl text-base font-bold leading-6 tracking-tightest">
                            Digital art is a wallpaper or heavy graphics?
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-80"></div>
                <img src={Beach} className="h-full w-full" alt="Beach" />
                <div className="absolute top-0 xl:px-36 px-24">
                    <div className="relative grid grid-cols-4 z-10">
                        <div className="col-start-2 col-span-3 font-istok xl:text-xl text-base tracking-tightest">
                            Absolutely no. Digital art is a combination of
                            different disciplines to be used for reaching one
                            common goal - improve business results on the
                            internet.
                        </div>
                    </div>
                    <div className="relative grid grid-cols-4 gap-x-6 pt-11 z-10">
                        {THIRD_CARD.map((item, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className={`${
                                        index === 0 && "col-start-2"
                                    }`}
                                >
                                    <div className="rounded-3xl border border-black overflow-hidden">
                                        <img
                                            src={item.img}
                                            className="h-auto w-full"
                                            alt="Beach"
                                        />
                                    </div>
                                    <div className="flex flex-col h-full pt-9">
                                        <p className="font-istok font-bold xl:text-xl text-base tracking-tightest">
                                            {item.title}
                                        </p>
                                        <p className="font-istok xl:text-xl text-base py-6 tracking-tightest">
                                            {item.content}
                                        </p>
                                        <div className=" h-9 w-9 rounded-full border border-black">
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
                </div>
                <div className="absolute -bottom-8 left-36 max-xl:left-20">
                    <img src={GhostMan} className="h-auto" alt="GhostMan" />
                </div>
            </div>
            <div className="grid grid-cols-4">
                {FORTH_CARD.map((item, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`${
                                index === 0 &&
                                "col-span-2 border-none rounded-l-none"
                            } flex justify-center items-center border-dotted rounded-3xl border border-gray_700 h-80 ${
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
                                            ? "xl:text-64 text-5xl"
                                            : "xl:text-xl text-base"
                                    }`}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="bg-primary py-40">
                <div className="px-36">
                    <p>
                        <span className="font-jersey text-64 leading-64 tracking-tightest">
                            Case studies
                        </span>
                        &nbsp;
                        <span className="font-jersey text-64 leading-64 tracking-tightest">
                            &lt;|&gt;
                        </span>
                    </p>
                    <div className="font-istok text-xl text-section_at leading-25 tracking-tightest pt-6">
                        <p>
                            You can put all your energy into scaling your
                            business while
                        </p>
                        <p>
                            we set up a consistent stream of vetted business
                            leads to your pipeline.
                        </p>
                    </div>
                </div>
                <div className="relative z-30 py-10">
                    <Slider {...settings}>
                        {CAROUSEL_ITEMS.map((item, index) => {
                            return item.isFullImage ? (
                                <div
                                    className="px-5 pb-16 aspect-carousel"
                                    style={{ width: "23vw" }}
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
                            ) : (
                                <div
                                    className="px-5 pb-16 aspect-carousel"
                                    style={{ width: "23vw" }}
                                >
                                    <div className="w-full h-full relative flex justify-center bg-section_maincard rounded-3xl">
                                        <div className="absolute w-1/2 flex justify-center bottom-0 translate-y-1/2">
                                            <img
                                                src={item.image}
                                                alt={`Plane-${index}`}
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
            <div className="relative z-0">
                <img src={Street} className="w-3/5" alt="Street" />
                <div className="absolute top-0 xl:px-36 px-24 w-full">
                    <div className="relative w-full text-center xl:py-4 py-2">
                        <p className="font-jersey 2xl:text-64 xl:text-5xl text-4xl 2xl:leading-64 leading-none tracking-tightest">
                            The &nbsp;
                            <span className="font-jersey 2xl:text-10xl xl:text-8xl text-6xl 2xl:leading-150 leading-none tracking-tightest">
                                team
                            </span>
                            &nbsp; of Jokers
                        </p>
                    </div>
                    <div className="grid grid-cols-2 xl:gap-x-40 gap-x-28 z-10 xl:pt-6 pt-4">
                        <div>
                            <div className="flex justify-between bg-black rounded-3xl w-full px-6 xl:py-4 py-1">
                                <div className="flex justify-center items-center font-istok font-bold xl:text-2xl text-xs text-white tracking-tightest">
                                    Account executive
                                </div>
                                <div>
                                    <img src={Team} className="" alt="Team" />
                                </div>
                            </div>
                            <div className="flex flex-col xl:gap-y-6 gap-y-4 xl:pt-9 pt-5 px-4">
                                <p className="font-istok xl:text-xl text-sm tracking-tightest">
                                    Account managers take care of every need you
                                    might have and outline the objectives to
                                    launch a successful campaign
                                </p>
                                <p className="font-istok xl:text-xl text-sm tracking-tightest">
                                    With an industry pro in every nichel, we'll
                                    find the most relevant AM to lead your
                                    project.
                                </p>
                                {TICK_ITEMS.map((item, index: number) => {
                                    return (
                                        <div key={index} className="flex">
                                            <div>
                                                <img
                                                    src={item.img}
                                                    className="xl:h-full h-2/3 xl:w-full w-2/3"
                                                    alt="Tick"
                                                />
                                            </div>
                                            <p className="font-istok xl:text-xl text-sm pl-2">
                                                {item.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="bg-teammember bg-center bg-cover rounded-3xl border-4 border-black">
                            <div className="flex justify-between items-center xl:px-6 px-4 xl:pt-12 pt-9 xl:pb-6 pb-4 border-b border-slate_800 z-10">
                                <p className="font-istok 2xl:text-64 xl:text-5xl text-3xl font-bold tracking-tightest">
                                    Monica
                                </p>
                                <div className="flex xl:gap-6 gap-4">
                                    <div className="2xl:h-20 xl:h-14 h-10 2xl:w-20 xl:w-14 w-10">
                                        <img
                                            src={Left}
                                            className="h-full w-full"
                                            alt="Left"
                                        />
                                    </div>
                                    <div className="2xl:h-20 xl:h-14 h-10 2xl:w-20 xl:w-14 w-10">
                                        <img
                                            src={Right}
                                            className="h-full w-full"
                                            alt="Right"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end items-center">
                                <div className="w-4/5">
                                    <img
                                        src={TeamMemeber}
                                        className="h-full w-full"
                                        alt="TeamMember"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 -bottom-16">
                    <img
                        src={Lady}
                        className="xl:h-full h-2/3 xl:w-full w-2/3"
                        alt="Lady"
                    />
                </div>
            </div>
            <div className="bg-primary xl:px-36 px-24 2xl:py-48 xl:py-36 py-24">
                <div className="text-center font-jersey 2xl:text-64 text-5xl leading-none tracking-tightest">
                    <p>Expand your perception</p>
                    <p> with our content</p>
                </div>
                <div className="grid grid-cols-3 xl:gap-x-20 gap-x-16 2xl:pt-16 pt-10">
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
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3 border-b border-slate_50">
                                <p>
                                    Complete guide to lead generation
                                    outsourcing in B2B
                                </p>
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3 border-b border-slate_50">
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
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3 border-b border-slate_50">
                                <p>
                                    SEO podcast: kas slypi už sėkmingo pardavimo
                                </p>
                            </div>
                            <div className="font-inter font-bold 2xl:text-xl text-xs text-header_button tracking-tightest xl:py-7 py-3 border-b border-slate_50">
                                <p className="underline decoration-header_button underline-offset-4">
                                    Dizaino pavyzdžių galerija
                                </p>
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3">
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
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3 border-b border-slate_50">
                                <p>
                                    Complete guide to lead generation
                                    outsourcing in B2B
                                </p>
                            </div>
                            <div className="font-istok font-bold 2xl:text-xl text-xs tracking-tightest xl:py-7 py-3 border-b border-slate_50">
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
