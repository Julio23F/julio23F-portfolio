import React from "react";

const experiences = [
  {
    title: "Shine",
    highlight: "Bright",
    description:
      "We refine every design experience. Your team focuses on what matters most. Trust builds faster. Results follow.",
    image: "/path/to/shine.png", // Remplace avec l'URL réelle
    color: "text-orange-500",
  },
  {
    title: "Lead",
    highlight: "Strong",
    description:
      "Our designs help position your brand where it counts. Your team stays inspired, focused, and ready to win.",
    image: "/path/to/lead.png",
    color: "text-green-500",
  },
  {
    title: "Take",
    highlight: "Over",
    description:
      "With our designs, you captivate clients, drive engagement, and foster lasting loyalty. Your brand thrives.",
    image: "/path/to/take.png",
    color: "text-red-500",
  },
];

const Experiences = () => {
  return (
    <div className="contact-section relative min-h-[10vh] flex justify-center mt-[300px]" style={{ backgroundColor: "#1f1634"}}>
        <div className="sticky top-[10%] translate-y-[-10%] flex contact-section-container">
            {/* <div className="flex justify-center gap-8 p-8 bg-[red]">
            {experiences.map((exp, index) => (
                <div style={{height: "250px", width: "250px", backgroundColor: "yellow"}}>
                    
                </div>
            ))}
            </div> */}
        </div>
    </div>
  );
};

export default Experiences;
