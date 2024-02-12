import imgLogo from "./assets/profile.jpg";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Starting() {
  function openLink() {
    window.open(
      "https://drive.google.com/file/d/1EP3vthn8LcVD3Xlg5wdNZ-zGdf_xK_jU/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div class="flex items-center mt-36 font-poppins w-full justify-center">
      <div>
        <img src={imgLogo} alt="About" class=" size-96 rounded-full " />
      </div>
      <div class="ml-24 space-y-4">
        <div class="text-black text-center space-y-4">
          <p class="text-2xl text-grey-theme font-medium">Hello, I'm</p>
          <p class="text-4xl font-bold text-black">Vishal Dahiya </p>
          <p class="text-3xl text-grey-theme font-medium">Frontend Developer</p>
        </div>
        <div class="text-black flex text-sm justify-center mt-3">
          <button
            onClick={openLink}
            class="rounded-full border-2 border-black p-2 hover:bg-grey-dark hover:text-white"
          >
            Download CV
          </button>
          <button class="rounded-full border-2 border-black p-3 bg-grey-dark text-white ml-4 hover:bg-black">
            Contact Info
          </button>
        </div>
        <div class="flex justify-center">
          <a
            href="https://www.linkedin.com/in/vishaldahiya1/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black fa-solid fa-2x"
          >
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/vishudahiya/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black  fa-solid fa-2x"
          >
            <i class="fab fa-github fa-lg ml-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
