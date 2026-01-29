import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className="gap-4 grid sm:grid-cols-2 p-16 mt-20">
      <div>
        <img
          src="/assets/HeroImage.png"
          alt="Workspace"
          className="rounded-full object-cover h-112.5"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="mt-30">
        <h1 class="font-retro text-5xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
          Hi 👋, I'm <span class="text-blue-600">Alok Mishra</span>. <br />I
          craft websites
        </h1>
        <p class="font-body text-xl text-white mb-8 max-w-xl">
          I am a Full Stack Developer looking for
          <span className="font-bold">internships/jobs</span>
        </p>

        <div className="grid sm:grid-cols-2 gap-2">
          <button className="cursor-pointer bg-white border  rounded-full text-black font-semibold transition duration-300 ease-in-out  hover:ring-2 hover:shadow-xl focus:ring-violet-300 px-5 py-2">
            <GitHubIcon />
            <a
              href="https://github.com/alokmishra9861"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my works
            </a>
          </button>

          <button class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-37.5">
            <a
              href="\Alok Mishra.resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg transition flex items-center gap-2"
            >
              Download CV
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
