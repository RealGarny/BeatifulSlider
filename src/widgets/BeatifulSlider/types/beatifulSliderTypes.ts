type TSlide = {
    id: string;
    image_src: string;
    title: string;
    description: string;
};

type BeatifulSliderSlideProps = {
    isActive?: boolean;
    hideText?: boolean;
} & TSlide &
    React.HTMLAttributes<HTMLDivElement>;

interface BeatifulSliderProps {
    title?: string;
    visibleItems?: number;
    slides?: TSlide[];
    autoScroll?: boolean;
    autoScrollTimeout?: number;
}

export type { TSlide, BeatifulSliderSlideProps, BeatifulSliderProps };
