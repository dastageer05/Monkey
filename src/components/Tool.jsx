import React from "react";
import { FaAt } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { RiCharacterRecognitionFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { HiWrench } from "react-icons/hi2";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
function Tool() {
  const section1 = [
    { icon: <FaAt />, label: "punctuation" },
    { icon: <HiHashtag />, label: "numbers" },
  ];

  const section2 = [
    { icon: <IoIosTime />, label: "time" },
    { icon: <RiCharacterRecognitionFill />, label: "words" },
    { icon: <FaQuoteLeft />, label: "quote" },
    { icon: <IoLogoVercel />, label: "zen" },
    { icon: <HiWrench />, label: "custom" },
  ];

  const section3 = [
    { label: "15" },
    { label: "30" },
    { label: "60" },
    { label: "120" },
    { icon: <HiMiniWrenchScrewdriver />, label: "" },
  ];

  // Helper function to render a section
  const renderSection = (items) =>
    items.map((item, index) => (
      <button key={index} className="flex space-x-0.5 items-center">
        {item.icon}
        <p className="text-xxs">{item.label}</p>
      </button>
    ));

  return (
    <>
      <div className="parent flex items-center justify-center mb-8">
        <div className="w-full xs:w-[90%] sm:w-[75%] lg:w-[42%] max-w-4xl h-fit rounded bg-sky-900 text-orange-400 text-xxs xs:justify-center  flex flex-wrap xs:p-0 md:p-1 md:px-3">
          {/* Render sections */}
          <div className="flex justify-center items-center space-x-3 ">
            {renderSection(section1)}
          </div>
          <div className="spacer"></div>
          <div className="flex justify-center items-center space-x-3 ">
            {renderSection(section2)}
          </div>
          <div className="spacer"></div>
          <div className="flex justify-center items-center space-x-3 ">
            {renderSection(section3)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tool;
