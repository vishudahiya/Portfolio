import imagePhoto from "../assets/About_photo.jpg";
import people from "../assets/people.png";
import award from "../assets/award.png";
import AboutBoxes from "./AboutBoxes";

const data = [
  {
    img: award,
    education: "Expirence",
    experience: "2+ years",
    tech: "Frontend Developer",
  },
  {
    img: people,
    education: "Education",
    experience: "B.Tech Degree",
    tech: "",
  },
];

export default function About() {
  return (
    <div class=" md:mt-40 md:mb-24 my-24 font-poppins">
      <p class="md:text-1xl text-grey-theme md:font-medium text-center md:mb-3 text-md mb-1">
        Get To Know More
      </p>
      <p class="md:text-5xl font-bold text-black text-center text-3xl mb-4">
        About Me
      </p>
      <div class="md:flex md:justify-between lg:mt-34 lg:mx-auto">
        <div class="flex items-center justify-center lg:ml-20">
          <img
            src={imagePhoto}
            alt="About_Photo"
            class="md:h-custom md:w-custom md:rounded-3xl md:mt-6  bg-stone-100 backdrop-brightness-50 lg:h-86 lg:w-92 lg:bg-stone-200 lg:px-16 rounded-3xl h-44 w-44 mb-9"
          />
        </div>
        <div class="md:my-6 lg:py-14 lg:ml-[-18px] mb-[-55px]">
          <div class="md:flex md:justify-between flex mx-1 justify-around">
            <AboutBoxes data={data[0]} />
            <AboutBoxes data={data[1]} />
          </div>
          <p class="item-centre text-justify md:pt-2 md:px-7 text-grey-theme lg:mt-6 mx-6 pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </div>
  );
}
