export default function Header() {
  return (
    <div class="md:w-full md:flex md:justify-around md:items-center md:pt-8 text-black md:text-center font-poppins">
      <div class="md:text-text-large">
        <p>Vishal Dahiya</p>
      </div>
      <div class=" md:flex md:text-2xl md:items-start">
        <div class="md:mr-8 md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer ">
          About
        </div>
        <div class="md:mr-6 md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer ">
          Experience
        </div>
        <div class="md:mr-6 md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer ">
          Projects
        </div>
        <div class="md:mr-6 md:hover:text-slate-400 md:hover:underline md:underline-offset-8 md:cursor-pointer ">
          Contact
        </div>
      </div>
    </div>
  );
}
