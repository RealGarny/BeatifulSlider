import type { BeatifulSliderProps } from "../types/beatifulSliderTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./Slider.scss";
import { BeatifulSliderSlide } from "./BeatifulSliderSlide";
import { useState } from "react";

export const BeatifulSlider: React.FC<BeatifulSliderProps> = ({
    slides = [],
    visibleItems = 3,
}) => {
    return (
        <Swiper
            slidesPerView={visibleItems}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            modules={[Pagination, Navigation]}
        >
            {slides.map(slideData => (
                <SwiperSlide>
                    <BeatifulSliderSlide {...slideData} />
                </SwiperSlide>
            ))}
        </Swiper>
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
