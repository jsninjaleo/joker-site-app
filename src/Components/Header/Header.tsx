import HeaderFinger from "../../Assets/Img/header_finger.png";

export const Header: React.FC = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-primary md:flex hidden items-end">
                <div className="lg:h-4/5 h-3/4">
                    <img src={HeaderFinger} className="h-full" alt="Finger" />
                </div>
            </div>
            <div className="flex md:col-span-10 col-span-12 md:justify-between justify-center items-center font-jersey xl:text-64 lg:text-5xl text-4xl md:pl-16 pl-0 md:pr-10 pr-0 xl:py-8 lg:py-6 py-4 bg-black">
                <div>
                    <span className="text-main_red">JOKER</span>
                    <span className="text-main_orange">web</span>
                    <span className="text-main_green">Design</span>
                    <span className="text-main_red">.com</span>
                </div>
                <div className="bg-header_button text-white xl:px-13 px-10 xl:py-3.5 py-3 md:block hidden">
                    <p className="xl:text-64 lg:text-5xl text-4xl leading-none">
                        DOWNLOAD
                    </p>
                    <p className="lg:text-xl text-base leading-none">
                        proposal
                    </p>
                </div>
            </div>
        </div>
    );
};
