import axios from "axios";
import { useEffect, useState } from "react";
import { BeatifulSlider, type TSlide } from "widgets/BeatifulSlider";

const MainPage = () => {
    const [dutiesData, setDutiesData] = useState<TSlide[]>([]);

    useEffect(() => {
        const getDuties = async () => {
            const { data } = await axios.get("http://localhost:3030/our-duties");
            setDutiesData(data);
        };
        getDuties();
    }, []);
    return (
        <div>
            {dutiesData.length && (
                <BeatifulSlider
                    title="Есть всё, что бы наполнить жизнь счастьем"
                    slides={dutiesData}
                    autoScroll
                    autoScrollTimeout={4000}
                />
            )}
        </div>
    );
};

export default MainPage;
