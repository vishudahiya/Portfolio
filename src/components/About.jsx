import imagePhoto from "../assets/About_photo.jpg";
import people from "../assets/people.png";
import award from "../assets/people.png";
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
    <div class=" md:mt-48 md:mb-40 ">
      <p class="md:text-1xl text-grey-theme md:font-medium md:text-center md:mb-3 font-poppins">
        Get To Know More
      </p>
      <p class="md:text-5xl font-bold text-black md:text-center">About Me</p>
      <div class="md:flex md:justify-around md:my-24 md:mx-40 font-poppins">
        <div>
          <img
            src={imagePhoto}
            alt="About_Photo"
            class="md:h-custom md:w-custom md:rounded-3xl md:overflow-hidden bg-stone-100  backdrop-grayscale backdrop-contrast-50 backdrop-brightness-50"
          />
        </div>
        <div class="md:my-12 md:ml-5 ">
          <div class="md:flex md:justify-around md:mx-4 ">
            <AboutBoxes data={data[0]} />
            <AboutBoxes data={data[1]} />
          </div>
          <p class="md:item-centre md:text-justify md:px-7 md:pt-6 text-grey-theme">
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
