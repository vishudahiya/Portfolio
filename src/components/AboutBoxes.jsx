export default function AboutBoxes({ data }) {
  return (
    <div class="md:space-y-1 border-solid  border-stone-400 border-2 md:py-5 md:px-16 md:rounded-3xl md:text-center md:items-center md:justify-center">
      <img src={data.img} class="md:h-8 md:px-14" />
      <p class="font-bold md:text-text-medium">{data.education}</p>
      <p class="text-grey-theme">{data.experience}</p>
      <p class="text-grey-theme">{data.tech}</p>
    </div>
  );
}
