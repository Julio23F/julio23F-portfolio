

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center text-center py-24 px-4">
            <h1 className="text-6xl font-extrabold text-white">
            LET'S FEED <br /> YOUR BRAND
            </h1>
            <p className="mt-4 text-lg text-gray-300">
            Turn <span className="text-white">Ideas into Assets</span> and{" "}
            <span className="text-white">Designs into Growth</span> — with care as
            a Sushi Master.
            </p>
            <button className="mt-8 bg-green-500 text-black font-bold px-6 py-3 rounded-full hover:bg-green-600">
            Pick Your Plan
            </button>
        </main>
    );
}

export default Home;
