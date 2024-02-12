export default function Header() {
  return (
    <div class="w-full flex justify-around items-center mt-8 text-black text-center font-poppins">
      <div class="text-text-large">
        <p>Vishal Dahiya</p>
      </div>
      <div class=" flex text-2xl items-start">
        <div class="mr-8 hover:text-slate-500 hover:underline underline-offset-8 cursor-pointer ">
          About
        </div>
        <div class="mr-6 hover:text-slate-500 hover:underline underline-offset-8 cursor-pointer ">
          Experience
        </div>
        <div class="mr-6 hover:text-slate-500 hover:underline underline-offset-8 cursor-pointer ">
          Projects
        </div>
        <div class="mr-6 hover:text-slate-500 hover:underline underline-offset-8 cursor-pointer ">
          Contact
        </div>
      </div>
    </div>
  );
}
