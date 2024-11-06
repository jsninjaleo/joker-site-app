import { RightArrow } from "../../Config/Images";
import { ArrowProps } from "../../Types/ArrowTypes";

export const NextArrow: React.FC<ArrowProps> = ({
    style,
    className,
    onClick,
}) => {
    return (
        <div
            className={`${className} !flex !justify-center !items-center !absolute !top-[calc(50%-40px)] !z-10 lg:!left-carouselRightArrow sm:!left-[83%] !left-[70%] !h-1/6 sm:!w-[5%] !w-[10%]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img
                src={RightArrow}
                alt="left_arrow"
                className="h-full absolute"
            />
        </div>
    );
};
