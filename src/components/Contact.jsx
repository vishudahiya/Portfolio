import { Button } from "@react-email/button";

export default function Contact() {
  return (
    <div class="md:mt-[-10] md:mb-24 my-24 font-poppins">
      <p class="md:text-1xl text-grey-theme md:font-medium text-center md:mb-3 text-md mb-1">
        Get in Touch
      </p>
      <p class="md:text-5xl font-bold text-black text-center text-3xl mb-4">
        Contact Me
      </p>
      <div
        class="flex md:justify-evenly md:items-center md:mx-96 md:my-10 border-solid  border-black border-custom-border1  md:py-6 
    rounded-3xl font-poppins mb-8"
      >
        <div class="flex md:justify-center md:items-center">
          <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          <button
            className="md:text-2xl md:ml-2"
            onClick={() =>
              (window.location = "mailto:vishaldahiya12@gmail.com")
            }
          >
            Contact Me
          </button>
        </div>

        <div className="flex md:justify-center md:items-center">
          <i class="fab fa-linkedin fa-md fa-2x"></i>

          <button
            className="md:text-2xl md:ml-2"
            onClick={() =>
              window.open("https://www.linkedin.com/in/vishaldahiya1/")
            }
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
