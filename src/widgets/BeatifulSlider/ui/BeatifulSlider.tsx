import type { BeatifulSliderProps } from "../types/beatifulSliderTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./Slider.scss";
import { BeatifulSliderSlide } from "./BeatifulSliderSlide";
import { SliderButton } from "./SliderButton";
import { useRef } from "react";

export const BeatifulSlider: React.FC<BeatifulSliderProps> = ({
    slides = [],
    title,
    visibleItems = 3,
}) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const handleSwiperInitialization: React.ComponentProps<typeof Swiper>["onSwiper"] = swiper => {
        setTimeout(() => {
            if (!swiper.params.navigation || typeof swiper.params.navigation === "boolean") return;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        });
    };

    return (
        <div className="mt-6 flex-col justify-center">
            <div className="flex justify-between mx-auto px-5 mb-6 max-w-[1791px]">
                <p className="t3 font-bold">{title}</p>
                <div className="flex gap-4">
                    <SliderButton ref={navigationPrevRef}>{"<"}</SliderButton>
                    <SliderButton ref={navigationNextRef}>{">"}</SliderButton>
                </div>
            </div>
            <Swiper
                slidesPerView={visibleItems}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                modules={[Navigation]}
                onSwiper={handleSwiperInitialization}
            >
                {slides.map((slideData, index) => (
                    <SwiperSlide>
                        <BeatifulSliderSlide key={slideData.id} {...slideData} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

/*
export const BeatifulSlider: React.FC<BeatifulSliderProps> = ({
    slides = [],
    visibleItems = 3,
}) => {
    const [active, setActive] = useState<number>(0);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLDivElement>(null);

    const getPrev = (current: number) => (current - 1 + slides.length) % slides.length;
    const getNext = (current: number) => (current + 1) % slides.length;

    const goToNext = () => {
        setActive(getNext);
    };

    const goToPrev = () => {
        setActive(getPrev);
    };

    return (
        <div>
            <div>
                <div className="flex gap-4">
                    <button onClick={goToPrev}>prev</button>
                    <button onClick={goToNext}>next</button>
                </div>
            </div>
            <div
                className="flex gap-10 max-h-[676px] relative"
                style={{
                    transform: `translateX(-${active * (100 / visibleItems)}%)`,
                }}
            >
                {slides.map((slide, index) => {
                    let slideStyles = "opacity-60";
                    if (getPrev(active) == index) {
                        slideStyles += " -rotate-3";
                    }
                    if (getNext(active) == index) {
                        slideStyles += " rotate-3";
                    }
                    if (index == active) {
                        slideStyles = "flex-active-card";
                    }
                    return (
                        <BeatifulSliderSlide
                            className={`flex-1 transition-all ${slideStyles}`}
                            {...slide}
                        />
                    );
                })}
            </div>
        </div>
    );
};*/
