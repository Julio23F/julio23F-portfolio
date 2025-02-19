import { useState, useEffect } from "react";
// import AnimatedLetter from "../components/AnimatedLetter";
import AnimatedSentence from "../components/AnimatedSentence";

const Home = () => {
    // const homeTextData = ["LET'S FEED", "YOUR BRAND"];
    // const lettersLine1 = homeTextData[0].split("");
    // const lettersLine2 = homeTextData[1].split("");

    // const [activeIndex, setActiveIndex] = useState(-1);
    // const [isAnimatingFirstLine, setIsAnimatingFirstLine] = useState(true);
    // const [isWaiting, setIsWaiting] = useState(false);

    // useEffect(() => {
    //     let interval;

    //     if (!isWaiting) {
    //         interval = setInterval(() => {
    //             setActiveIndex(prevIndex => {
    //                 if (isAnimatingFirstLine) {
    //                     if (prevIndex + 1 >= lettersLine1.length) {
    //                         setTimeout(() => {
    //                             setActiveIndex(-1); 
    //                             setIsAnimatingFirstLine(false); 
    //                         }, 100); 
    //                         return prevIndex;
    //                     }
    //                 } else {
    //                     if (prevIndex + 1 >= lettersLine2.length) {
    //                         setTimeout(() => {
    //                             setActiveIndex(-1);
    //                             setIsWaiting(true);
    //                         }, 100); 
    //                         return prevIndex;
    //                     }
    //                 }
    //                 return prevIndex + 1;
    //             });
    //         }, 250);
    //     } else {
    //         const waitTimeout = setTimeout(() => {
    //             setIsWaiting(false);
    //             setIsAnimatingFirstLine(true);
    //         }, 1000);

    //         return () => clearTimeout(waitTimeout);
    //     }

    //     return () => clearInterval(interval);
    // }, [isAnimatingFirstLine, isWaiting]);

    return (
        <main className="home-container flex flex-col items-center justify-center text-center py-24 px-4">
            {/* <h1 className="text-6xl font-extrabold text-white uppercase">
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
            </h1> */}
            <AnimatedSentence
                text={["Let's build", "your vision"]}
            />
            <p className="mt-4 text-lg text-gray-300">
                <span className="text-white">Transforming ideas into realities and visions into achievements </span> — I’m your man
            </p>
            <button className="mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:border-none focus:outline-none">
                Download CV
            </button>
        </main>
    );
};

export default Home;
