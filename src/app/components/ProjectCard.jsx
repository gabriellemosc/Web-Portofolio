import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, previewImg, previewImgEye, title, description, gitUrl, previewUrl, descriptionClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredEye, setIsHoveredEye] = useState(false);

  return (
    <div className="relative">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex gap-4 items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          
          {/* Ícone do GitHub */}
          <div 
            className="flex flex-col items-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-black bg-transparent hover:bg-black transition-all duration-600 flex items-center justify-center"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer transition-all duration-600 group-hover:shadow-lg group-hover:shadow-black group-hover:animate-pulse" />
            </Link>

            {/* Preview Box do GitHub */}
            {isHovered && previewImg && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 h-36 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-50 transition-opacity duration-300 opacity-100">
                <img src={previewImg} alt={`Preview de ${title}`} className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Ícone de Preview (EyeIcon) */}
          {previewUrl && (
            <div 
              className="flex flex-col items-center relative"
              onMouseEnter={() => setIsHoveredEye(true)}
              onMouseLeave={() => setIsHoveredEye(false)}
            >
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-black bg-transparent hover:bg-black transition-all duration-600 flex items-center justify-center"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer transition-all duration-600 group-hover:shadow-lg group-hover:shadow-black group-hover:animate-pulse" />
              </Link>

              {/* Preview Box do EyeIcon */}
              {isHoveredEye && previewImgEye && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-64 h-36 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-50 transition-opacity duration-300 opacity-100">
                  <img src={previewImgEye} alt={`Preview de ${title}`} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 titulo_projeto">{title}</h5>
        <p className={`text-[#ADB7BE] ${descriptionClass}`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
