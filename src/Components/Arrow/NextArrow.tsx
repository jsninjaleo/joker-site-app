import { RightArrow } from "../../Config/Images";
import { ArrowProps } from "../../Types/ArrowTypes";

export const NextArrow: React.FC<ArrowProps> = ({
    style,
    className,
    onClick,
}) => {
    return (
        <div
            className={`${className} !flex !justify-center !items-center !absolute !top-[calc(50%-32px)] !z-10 sm:!left-carouselRightArrow !left-[67%] !h-1/6 sm:!w-[5%] !w-[10%]`}
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
