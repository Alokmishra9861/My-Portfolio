import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import whiteLogo from "../assets/whiteLogo";

function Footer() {
  return (
    <>
      <div className="grid sm:grid-cols-2 bg-black">
        <div>
          <img src={whiteLogo} className="object-fill h-40" />
        </div>

        <div className="flex justify-center h-12 mt-20 gap-2">
          <button className="cursor-pointer bg-white rounded-full text-black font-semibold transition duration-300 ease-in-out  hover:ring-2 hover:shadow-xl focus:ring-white px-5 py-2">
            <GitHubIcon />
            <a
              href="https://github.com/alokmishra9861"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
          <button className="cursor-pointer bg-white rounded-full text-blue-700 font-semibold transition duration-300 ease-in-out  hover:ring-2 hover:shadow-xl focus:ring-violet-300 px-5 py-2">
            <LinkedInIcon />
            <a
              href="https://www.linkedin.com/in/alok-mishra-338376264/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
