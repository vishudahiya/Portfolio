import imgLogo from "./assets/profile.png";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Starting() {
  function openLink() {
    window.open(
      "https://drive.google.com/file/d/1EP3vthn8LcVD3Xlg5wdNZ-zGdf_xK_jU/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div class="md:flex md:items-center md:mt-36 font-poppins md:w-full md:justify-center">
      <div>
        <img
          src={imgLogo}
          alt="About"
          class=" md:size-96 md:rounded-full md:tranfrom md:rotate-10 bg-profile-bkg md:backdrop-sepia-0 "
        />
      </div>
      <div class="md:ml-24 md:space-y-4">
        <div class="text-black md:text-center md:space-y-4">
          <p class="md:text-2xl text-grey-theme md:font-medium">Hello, I'm</p>
          <p class="md:text-4xl md:font-bold text-black">Vishal Dahiya </p>
          <p class="md:text-3xl text-grey-theme md:font-medium">
            Frontend Developer
          </p>
        </div>
        <div class="text-black md:flex md:text-sm md:justify-center md:mt-3">
          <button
            onClick={openLink}
            class="rounded-full border-2 border-black md:p-2 md:hover:bg-grey-dark md:hover:text-white"
          >
            Download CV
          </button>
          <button class="rounded-full border-2 border-black md:p-3 bg-grey-dark text-white md:ml-4 hover:bg-black">
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
