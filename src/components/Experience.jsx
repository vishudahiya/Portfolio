import ExperienceBoxes from "./ExperienceBoxes";

const data = [
  {
    title: "Frontend Development",
    skill: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "Tailwind",
    ],
    experience: ["Basic", "Intermediate", "Expert"],
  },
  {
    title: "Backend Development",
    skill: ["Node JS", "Java"],
    experience: ["Basic", "Intermediate", "Expert"],
  },
];

export default function Experience() {
  return (
    <div class="md:pt-20 my-20 lg:mt-[-1px]">
      <div class="">
        <p class="md:text-1xl text-grey-theme md:font-medium text-center md:mb-3 text-md mb-1 lg:text-xl">
          Explore My
        </p>
        <p class="md:text-5xl font-bold text-black text-center text-3xl mb-9">
          Experience
        </p>
      </div>
      <div class="md:flex md:flex-row md:justify-between mx-8 md:mx-[-10px] md:mb-10 mt-5 flex flex-col lg:mx-80">
        <ExperienceBoxes data={data[0]} />
        <ExperienceBoxes data={data[1]} />
      </div>
    </div>
  );
}
