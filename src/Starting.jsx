import imgLogo from "./assets/about.png";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Starting() {
  function openLink() {
    window.open(
      "https://drive.google.com/file/d/1EP3vthn8LcVD3Xlg5wdNZ-zGdf_xK_jU/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div class="flex justify-between pt-48 pb-32 pl-4 bg-dark-blue ">
      <div>
        <div class="text-white text-7xl mx-20 ">
          <h1>Hi,</h1>
          <p>
            I am <span class=" text-blue-light ">v</span>ishal
          </p>
          <p>Frontend Developer</p>
        </div>

        <p class="text-white text-lg mx-20 mt-8 font-mono">
          I am proficient in JavaScript, React.js and Tailwind CSS
        </p>
        <div class="text-white text-lg mx-20 mt-12 flex p-2 ">
          <a
            href="https://www.linkedin.com/in/vishaldahiya1/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 fa-solid fa-2x pt-2 hover:text-white "
          >
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/vishudahiya/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 ml-6 pt-2 fa-solid fa-2x hover:text-white "
          >
            <i class="fab fa-github fa-lg"></i>
          </a>
          <button
            onClick={openLink}
            class="rounded-full ml-11 p-2 border-2 border-slate-300 hover:border-blue-light hover:bg-blue-light hover:text-white"
          >
            Download CV
          </button>
        </div>
      </div>
      <div>
        <img src={imgLogo} alt="About" class="mr-custom h-90" />
      </div>
    </div>
  );
}
