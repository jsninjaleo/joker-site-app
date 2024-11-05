import { ArrowTwo } from "../../Config/Images";
import { CircleMan } from "../../Config/Images";

interface FooterProps {
    toggleModal: () => void;
}

export const Footer: React.FC<FooterProps> = (props) => {
    return (
        <div className="bg-black xl:px-36 md:px-24 px-12">
            <div className="grid md:grid-cols-3 grid-cols-1">
                <div className="md:col-span-2 col-span-1">
                    <div className="flex flex-col xl:gap-y-16 md:gap-y-12 gap-y-6 xl:py-24 md:py-16 py-10">
                        <div>
                            <p className="font-jersey 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-white tracking-tightest">
                                JokerwebDesign.com - don’t look the same.
                            </p>
                            <p className="font-jersey 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-base text-slate_300 tracking-tightest">
                                Breathe identity into your website.
                            </p>
                        </div>
                        <div className="flex xs:flex-row flex-col items-center xl:gap-x-6 gap-x-4 xs:gap-y-0 gap-y-4">
                            <div
                                className="bg-header_button hover:bg-red-300 cursor-pointer xl:px-6 md:px-4 px-2 xl:py-5 py-3"
                                onClick={props.toggleModal}
                            >
                                <div className="flex items-center justify-between xl:gap-x-4 gap-x-3">
                                    <p className="font-jersey 2xl:text-64 xl:text-6xl md:text-4xl sm:text-3xl text-4xl text-white leading-none tracking-tightest">
                                        DOWNLOAD
                                    </p>
                                    <div className="h-5 w-5">
                                        <img src={ArrowTwo} alt="Arrow" />
                                    </div>
                                </div>
                                <p className="font-inter font-bold xl:text-base text-sm text-white leading-none tracking-tightest">
                                    proposal
                                </p>
                            </div>
                            <div className="xs:pb-0 pb-5">
                                <p className="border border-white hover:border-header_button xl:px-6 px-4 py-2 font-istok font-bold xl:text-lg text-sm text-white hover:text-header_button cursor-pointer">
                                    Contact CEO directly
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid xs:grid-cols-5 grid-cols-2">
                        <div className="flex flex-col xl:gap-y-6 md:gap-y-4 gap-y-2">
                            <p className="font-istok font-bold xl:text-xl text-base text-white tracking-tightest">
                                About
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                About us
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                Contacts
                            </p>
                        </div>
                        <div className="xs:col-span-4 col-span-1 flex flex-col xl:gap-y-6 md:gap-y-4 gap-y-2">
                            <p className="font-istok font-bold xl:text-xl text-base text-white tracking-tightest">
                                Services
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                Redesign your website
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                Web design and UI
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                UX design
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 hover:text-white hover:underline hover:decoration-white cursor-pointer tracking-tightest">
                                Web development
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center md:py-64 py-12">
                    <div>
                        <img
                            src={CircleMan}
                            className="h-full w-full"
                            alt="CircleMan"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center xl:pb-9 pb-4">
                <p className="font-istok xs:text-sm text-xs text-white tracking-tightest">
                    © 2024 JokerwebDesign.com. All rights reserved.
                    <span className="text-slate_400 px-4">Policy</span>
                    <span className="text-slate_400">Cookie Settings</span>
                    &nbsp;
                </p>
            </div>
        </div>
    );
};
