import { ArrowTwo } from "../../Config/Images";
import { CircleMan } from "../../Config/Images";

export const Footer: React.FC = () => {
    return (
        <div className="bg-black xl:px-36 px-24">
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <div className="flex flex-col xl:gap-y-16 gap-y-12 xl:py-24 py-16">
                        <div>
                            <p className="font-jersey 2xl:text-6xl xl:text-5xl text-4xl text-white tracking-tightest">
                                JokerwebDesign.com - don’t look the same.
                            </p>
                            <p className="font-jersey 2xl:text-4xl xl:text-3xl text-2xl text-slate_300 tracking-tightest">
                                Breathe identity into your website.
                            </p>
                        </div>
                        <div className="flex items-center xl:gap-x-6 gap-x-4">
                            <div className="bg-header_button xl:px-6 px-4 xl:py-5 py-3">
                                <div className="flex items-center xl:gap-x-4 gap-x-3">
                                    <p className="font-jersey 2xl:text-64 xl:text-6xl text-4xl text-white leading-none tracking-tightest">
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
                            <div>
                                <p className="border border-white xl:px-6 px-4 py-2 font-istok font-bold xl:text-lg text-sm text-white">
                                    Contact CEO directly
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="flex flex-col xl:gap-y-6 gap-y-4">
                            <p className="font-istok font-bold xl:text-xl text-base text-white tracking-tightest">
                                About
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                About us
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                Contacts
                            </p>
                        </div>
                        <div className="col-span-4 flex flex-col xl:gap-y-6 gap-y-4">
                            <p className="font-istok font-bold xl:text-xl text-base text-white tracking-tightest">
                                Services
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                Redesign your website
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                Web design and UI
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                UX design
                            </p>
                            <p className="font-istok xl:text-base text-sm text-slate_300 tracking-tightest">
                                Web development
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center py-64">
                    <div>
                        <img
                            src={CircleMan}
                            className="h-full xl:w-full w-2/3"
                            alt="CircleMan"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center xl:pb-9 pb-4">
                <p className="font-istok text-sm text-white tracking-tightest">
                    © 2024 JokerwebDesign.com. All rights reserved.
                    <span className="text-slate_400 px-4">Policy</span>
                    <span className="text-slate_400">Cookie Settings</span>
                    &nbsp;
                </p>
            </div>
        </div>
    );
};
