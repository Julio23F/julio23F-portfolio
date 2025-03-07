import { useState, useEffect } from "react";
import AnimatedLetter from "../components/AnimatedLetter";

const AnimatedSentence = ({text}) => {
    const homeTextData = text;
    const lettersLine1 = homeTextData[0].split("");
    const lettersLine2 = homeTextData[1].split("");

    const [activeIndex, setActiveIndex] = useState(-1);
    const [isAnimatingFirstLine, setIsAnimatingFirstLine] = useState(true);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        let interval;

        if (!isWaiting) {
            interval = setInterval(() => {
                setActiveIndex(prevIndex => {
                    if (isAnimatingFirstLine) {
                        if (prevIndex + 1 >= lettersLine1.length) {
                            setTimeout(() => {
                                setActiveIndex(-1); 
                                setIsAnimatingFirstLine(false); 
                            }, 100); 
                            return prevIndex;
                        }
                    } else {
                        if (prevIndex + 1 >= lettersLine2.length) {
                            setTimeout(() => {
                                setActiveIndex(-1);
                                setIsWaiting(true);
                            }, 100); 
                            return prevIndex;
                        }
                    }
                    return prevIndex + 1;
                });
            }, 300);
        } else {
            const waitTimeout = setTimeout(() => {
                setIsWaiting(false);
                setIsAnimatingFirstLine(true);
            }, 1000);

            return () => clearTimeout(waitTimeout);
        }

        return () => clearInterval(interval);
    }, [isAnimatingFirstLine, isWaiting]);

    return (
        <h1 className="text-6xl font-extrabold text-white uppercase">
            <div>
                {lettersLine1.map((item, index) => (
                    <AnimatedLetter
                        key={`line1-${index}`}
                        item={item}
                        index={index}
                        activeIndex={isAnimatingFirstLine ? activeIndex : -1}
                    />
                ))}
            </div>
            <div>
                {lettersLine2.map((item, index) => (
                    <AnimatedLetter
                        key={`line2-${index}`}
                        item={item}
                        index={index}
                        activeIndex={!isAnimatingFirstLine ? activeIndex : -1}
                    />
                ))}
            </div>
        </h1>
    );
};

export default AnimatedSentence;
