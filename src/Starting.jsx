import imgLogo from "./assets/profile.jpg";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Starting() {
  function openLink() {
    window.open(
      "https://drive.google.com/file/d/1aweudeyw04xOn8WKHwwteJqqmxPQa6K_/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <div class="md:flex items-center font-poppins justify-center lg:my-52 my-24">
      <div>
        <img
          src={imgLogo}
          alt="About"
          class=" md:h-custom1 md:w-custom1 md:mt-[-70px] md:ml-[1px] md:rounded-full md:tranfrom md:rotate-10 bg-profile-bkg 
          md:backdrop-sepia-0 size-40 rounded-full justify-center items-center mx-[120px] px-[-0]"
        />
      </div>
      <div class="md:mr-0 md:space-y-4 md:items-center md:justify-items-start md:text-center md:mx-[-80px] md:mt-[-80px]">
        <div class="text-black md:text-center md:space-y-4 text-center space-y-1 my-6">
          <p class="md:text-2xl text-grey-theme font-medium text-md">
            Hello, I'm
          </p>
          <p class="md:text-4xl font-bold text-black text-3xl">
            Vishal Dahiya{" "}
          </p>
          <p class="md:text-3xl text-grey-theme font-medium text-xl">
            Frontend Developer
          </p>
        </div>
        <div class="text-black md:flex md:text-sm md:justify-center md:mt-3 flex justify-evenly my-6 mx-12">
          <button
            onClick={openLink}
            class="rounded-full border-2 border-black md:p-2 md:hover:bg-grey-dark md:hover:text-white p-3"
          >
            Download CV
          </button>
          <button class="rounded-full border-2 border-black md:p-3 bg-grey-dark text-white md:ml-4 hover:bg-black p-3">
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
            <i class="fab fa-linkedin fa-md"></i>
          </a>
          <a
            href="https://github.com/vishudahiya/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-black  fa-solid fa-2x"
          >
            <i class="fab fa-github fa-md ml-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
