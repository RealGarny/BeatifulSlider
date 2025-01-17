import clsx from "clsx";
import type { BeatifulSliderSlideProps } from "../types/beatifulSliderTypes";

const BeatifulSliderSlide: React.FC<BeatifulSliderSlideProps> = ({
    image_src,
    title,
    description,
    className,
    hideText,
    ...props
}) => {
    return (
        <div {...props} className={clsx("rounded-xl overflow-hidden ", className)}>
            <div className="relative z-[2] rounded-xl overflow-hidden h-[300px]">
                <img src={image_src} className="absoluten h-full w-full object-cover"></img>
            </div>
            {!hideText && (
                <div className=" pt-[34px] bg-milk pb-11 px-6 flex flex-col -translate-y-[10px] [.swiper-slide:not(.swiper-slide-active)_&]:-translate-y-full transition-all ease-in-out [.swiper-slide.swiper-slide-active_&]:delay-300 gap-3 rounded-xl overflow-hidden">
                    <p className="t3">{title}</p>
                    <p className="text-base font-medium">{description}</p>
                </div>
            )}
        </div>
    );
};

export { BeatifulSliderSlide };
