"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "30",
    postfix: "+",
  },
  {
    prefix: "~",  
    metric: "GitHub commits",
    value: "1000",
  },
  {
    metric: "Certifications",
    value: "7",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-6 sm:px-16 xl:gap-16 sm:py-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start justify-center mx-4 my-4 sm:my-0 text-center sm:text-left"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
