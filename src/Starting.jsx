import imgLogo from "./assets/about.png";
export default function Starting() {
  return (
    <div class="flex justify-between pt-32 pb-32 bg-dark-blue ">
      <div>
        <div class="text-white text-7xl mx-20">
          <h1>Hi,</h1>
          <p>
            I am <span class=" text-blue-light">v</span>ishal
          </p>
          <p>Frontend Developer</p>
        </div>

        <p class="text-white text-2xl mx-20 mt-8">
          I am proficient in JavaScript, React.js and Tailwind CSS
        </p>
      </div>
      <div>
        <img src={imgLogo} alt="About" class="mr-custom h-90" />
      </div>
    </div>
  );
}
