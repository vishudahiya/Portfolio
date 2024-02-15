export default function AboutBoxes({ data }) {
  return (
    <div
      class="space-y-1 border-solid  border-black border-custom-border md:py-2 md:mx-4 md:px-20
       lg:px-36 lg:py-4 px-2 py-10 justify-center items-center text-center rounded-3xl"
    >
      <img src={data.img} class="md:h-8 md:px-8 h-8 px-16 lg:mx-8 " />
      <p class="font-bold md:text-text-medium">{data.education}</p>
      <p class="text-grey-theme">{data.experience}</p>
      <p class="text-grey-theme">{data.tech}</p>
    </div>
  );
}
