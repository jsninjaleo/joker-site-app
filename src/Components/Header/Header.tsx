import HeaderFinger from "../../Assets/Img/header_finger.png";

export const Header: React.FC = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-primary flex items-end">
                <div className="h-4/5">
                    <img src={HeaderFinger} className="h-full" alt="Finger" />
                </div>
            </div>
            <div className="flex col-span-10 justify-between items-center font-jersey xl:text-64 text-5xl pl-16 pr-10 xl:py-8 py-6 bg-black">
                <div>
                    <span className="text-main_red">JOKER</span>
                    <span className="text-main_orange">web</span>
                    <span className="text-main_green">Design</span>
                    <span className="text-main_red">.com</span>
                </div>
                <div className="bg-header_button text-white px-13 py-3.5">
                    <p className="xl:text-64 text-5xl leading-none">DOWNLOAD</p>
                    <p className="text-xl leading-none">proposal</p>
                </div>
            </div>
        </div>
    );
};
