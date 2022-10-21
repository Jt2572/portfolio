import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";
import cvjt from "../../../images/cvjt.pdf"
console.log('cvjt ', cvjt)
const socials = [

  {
    id: 1,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/jairo-torres-04161a227",
  },  
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/Jt2572",
  },
  {
    id: 3,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100085178591998",
  },
  {
    id: 4,
    icon: <FaTwitter />,
    link: "https://twitter.com/JairoTorres2572",
  },
  
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Jairo Torres Lujan</h1>
        <p className="text-sm text-gray-400 mb-3">
          Full Stack Web Developer
        </p>
        <a
          href={cvjt}
          className="inline-block mb-3 rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-blue-800"
          download="CV_JairoTorres"
        >
          Download CV
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id, target) => (
            <SocialIcon social={social} key={id} target='_blank' rel="" />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-500 text font-light leading-relaxed">
          Hi, I'm Jairo, from Colombia. I studied some system engineering semesters, as well as some design and web programming courses.
          <br />
          Recently I was studying Full Stack Development at Henry Bootcamp, where I could enhance my programming knowledge. I like music, video games, and learning about new technologies.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600"
      >
        {icon}
      </a>
    </li>
  );
};
