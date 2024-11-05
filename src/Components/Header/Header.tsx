import HeaderFinger from "../../Assets/Img/header_finger.png";

interface HeaderProps {
    toggleModal: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 bg-primary md:flex hidden items-end">
                <div className="lg:h-4/5 h-3/4">
                    <img src={HeaderFinger} className="h-full" alt="Finger" />
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:col-span-10 col-span-12 justify-between items-center font-jersey xl:text-64 lg:text-5xl text-4xl md:pl-16 pl-0 md:pr-10 pr-0 xl:py-8 lg:py-6 py-4 bg-black">
                <div>
                    <span className="text-main_red">JOKER</span>
                    <span className="text-main_orange">web</span>
                    <span className="text-main_green">Design</span>
                    <span className="text-main_red">.com</span>
                </div>
                <div
                    className="bg-header_button hover:bg-red-300 cursor-pointer text-white xl:px-13 sm:px-10 px-6 xl:py-3.5 sm:py-3 py-1"
                    onClick={props.toggleModal}
                >
                    <p className="xl:text-64 lg:text-5xl xs:text-4xl text-3xl leading-none">
                        DOWNLOAD
                    </p>
                    <p className="lg:text-xl xs:text-base text-sm leading-none">
                        proposal
                    </p>
                </div>
            </div>
        </div>
    );
};
