import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Rajan 👋</span> <br />A FrontEnd
      and Game Developer from Canada <br/> <span className="text-sm">Press right or left arrow key to explore!!</span>
    </h1>
  ),
  2: (
    <InfoBox
      text="🎮 Crafting epic web and game adventures with Web dev tools and game dev engiens – let's level up your digital world! 💻"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="💻 Explore my projects, where React.js, Next.js mastery, Unity and Unreal Engine magic, and UI/UX design craft seamless and dynamic web and game adventures! 🧑‍💻⌨️"
      link="/projects"
      btnText="My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="🔨 Looking to craft a project or in search of a developer? I'm just an email away ✉️ or a few keystrokes ⌨️ from bringing your vision to life! 🌟"
      link="/contact"
      btnText="Lets Talk"
    />
  ),
};

const HomeInfor = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfor;
