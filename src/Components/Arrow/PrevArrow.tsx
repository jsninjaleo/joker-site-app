import { LeftArrow } from "../../Config/Images";
import { ArrowProps } from "../../Types/ArrowTypes";

export const PrevArrow: React.FC<ArrowProps> = ({
    style,
    className,
    onClick,
}) => {
    return (
        <div
            className={`${className} !flex justify-center !items-center !absolute !top-[calc(50%-32px)] !z-10 !left-carouselLeftArrow !h-1/6 !w-[5%]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img
                src={LeftArrow}
                alt="right_arrow"
                className="h-full absolute"
            />
        </div>
    );
};
