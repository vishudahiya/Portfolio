export default function Header() {
  return (
    <div class="fixed top-0 w-full flex bg-dark-blue items-center text-white justify-between">
      <div>
        <p class="ml-5 text-2xl text-blue-light cursor-pointer ">Vishal</p>
      </div>
      <div class="flex mr-6 cursor-pointer text-text_custom-base">
        <div class="p-3 hover:text-blue-light">About</div>
        <div class="p-3 hover:text-blue-light">Projects</div>
        <div class="p-3 hover:text-blue-light">Contact</div>
        <div class="p-3 hover:text-blue-light">Resume</div>
      </div>
    </div>
  );
}
