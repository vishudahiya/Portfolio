export default function AboutBoxes({ data }) {
  return (
    <div class="space-y-1 border-solid  border-stone-400 border-2 py-5 px-16 rounded-3xl text-center items-center justify-center">
      <img src={data.img} class="h-8 px-14" />
      <p class="font-bold text-text-medium">{data.education}</p>
      <p class="text-grey-theme">{data.experience}</p>
      <p class="text-grey-theme">{data.tech}</p>
    </div>
  );
}
