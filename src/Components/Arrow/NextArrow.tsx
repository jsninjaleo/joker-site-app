import { RightArrow } from "../../Config/Images";
import { ArrowProps } from "../../Types/ArrowTypes";

export const NextArrow: React.FC<ArrowProps> = ({
    style,
    className,
    onClick,
}) => {
    return (
        <div
            className={`${className} !flex !justify-center !items-center !absolute !top-[calc(50%-32px)] !z-10 !left-carouselRightArrow !h-1/6 !w-[5%]`}
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
