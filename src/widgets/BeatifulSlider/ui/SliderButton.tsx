import clsx from "clsx";
import { forwardRef } from "react";
interface SliderButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}
export const SliderButton = forwardRef<HTMLDivElement, SliderButtonProps>(
    ({ children, className }, forwardedRef) => {
        return (
            <div
                ref={forwardedRef}
                className={clsx(
                    "size-12 items-center t2 flex justify-center select-none hover:bg-blue hover:text-white hover:border-blue bg-white transition-all border border-grey rounded-full line",
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);
