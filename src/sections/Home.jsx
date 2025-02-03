import AnimatedLetter from "../components/AnimatedLetter";

const Home = () => {
    const homeTextData = "LET'S FEED\nYOUR BRAND";
    
    return (
        <main className="home-container flex flex-col items-center justify-center text-center py-24 px-4">
            <h1 className="text-6xl font-extrabold text-white uppercase">
                {homeTextData.split("\n").map((line, lineIndex) => (
                    <div key={lineIndex}>
                        {line.split("").map((item, index) => (
                            <AnimatedLetter
                                key={index}
                                item={item}
                            />
                        ))}
                        <br />
                    </div>
                ))}
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                <span className="text-white">Transforming ideas into realities and visions into achievements </span> — I’m your man
            </p>
            <button className="mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 hover:border-none focus:outline-none">
                Download CV
            </button>

        </main>
    );
}

export default Home;
