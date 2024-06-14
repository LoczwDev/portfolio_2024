import React from "react";

export const EducationScrollbar = () => {
  const educationData = [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
  ];

  return (
    <div className="gap-4 lg:grid lg:grid-cols-2 flex xl:overflow-x-visible overflow-x-scroll w-full justify-between overflow-y-auto scrollbar scrollbar-thumb-accent/30 delay-100 duration-300 transition-all scrollbar-w-1 scrollbar-h-1 h-full max-h-[410px] px-2 z-[100] relative">
      {educationData.map((item, index) => (
        <div
          key={index}
          className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] lg:w-[320px] w-[90%] flex-shrink-0 transition-all duration-300 h-[200px] rounded-lg px-6 py-8 flex flex-col gap-x-6 group cursor-pointer"
        >
          {/* icon */}
          <div className="text-lg text-accent mb-4">{item.duration}</div>
          {/* title & desc */}
          <div className="mb-8 ">
            <div className="mb-2 text-lg h-[80px]">{item.degree}</div>
            <p className="max-w-[350px] leading-normal flex items-center gap-4">
              <span className="text-accent block w-1 h-1 bg-accent rounded-full"></span>
              {item.institution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
