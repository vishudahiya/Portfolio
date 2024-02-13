import imagePhoto from "../assets/About_photo.jpg";

export default function About() {
  return (
    <div class=" mt-48">
      <p class="text-1xl text-grey-theme font-medium text-center mb-2">
        Get To Know More
      </p>
      <p class="text-5xl font-bold text-black text-center">About Me</p>
      <div class="flex justify-around mt-10">
        <div>
          <img src={imagePhoto} alt="About_Photo" class="size-64 rounded-3xl" />
        </div>
        <div>
          <p>pp</p>
        </div>
      </div>
    </div>
  );
}
