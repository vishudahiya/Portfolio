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
    <div class="flex items-center mt-40 font-poppins w-full justify-center">
      <div>
        <img src={imgLogo} alt="About" class=" size-96 rounded-full " />
      </div>
      <div class="ml-20">
        <div class="text-black ">
          <p>Hello, I'm</p>
          <p>Vishal Dahiya </p>
          <p>Frontend Developer</p>
        </div>
        <div class="text-black flex font-medium justify-around">
          <button onClick={openLink} class="rounded-full border-2 p-4 ">
            Download CV
          </button>

          <button onClick={openLink} class="rounded-full border-2 p-4">
            Contact Info
          </button>
        </div>
        <div class="flex">
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
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
