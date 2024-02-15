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
    <div class=" md:mt-40 md:mb-30 my-40 font-poppins">
      <p class="md:text-1xl text-grey-theme md:font-medium text-center md:mb-3 text-md mb-1">
        Get To Know More
      </p>
      <p class="md:text-5xl font-bold text-black text-center text-3xl mb-4">
        About Me
      </p>
      <div class="md:flex md:justify-evenly lg:mt-34 md:px-6">
        <div>
          <img
            src={imagePhoto}
            alt="About_Photo"
            class="md:h-custom md:w-custom md:rounded-3xl md:mt-6 md:mr-4 bg-stone-100 backdrop-brightness-50 lg:h-86 lg:bg-stone-200 lg:px-8 rounded-3xl h-48 w-52 ml-24 mb-9"
          />
        </div>
        <div class="md:my-6 md:ml-4 lg:py-10 pb-2">
          <div class="md:flex md:justify-around flex mx-2 justify-around md:px-20">
            <AboutBoxes data={data[0]} />
            <AboutBoxes data={data[1]} />
          </div>
          <p class="item-centre text-justify md:pt-2 md:px-24 text-grey-theme lg:mt-6 mx-6 pb-16 pt-5">
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
