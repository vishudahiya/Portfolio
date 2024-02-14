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
    <div class=" mt-48 mb-40 ">
      <p class="text-1xl text-grey-theme font-medium text-center mb-3 font-poppins">
        Get To Know More
      </p>
      <p class="text-5xl font-bold text-black text-center">About Me</p>
      <div class="flex justify-around my-24 mx-40 font-poppins">
        <div>
          <img
            src={imagePhoto}
            alt="About_Photo"
            class="h-custom w-custom rounded-3xl overflow-hidden bg-stone-100  backdrop-grayscale backdrop-contrast-50 backdrop-brightness-50"
          />
        </div>
        <div class="my-12 ml-5">
          <div class="flex justify-around mx-4">
            <AboutBoxes data={data[0]} />
            <AboutBoxes data={data[1]} />
          </div>
          <p class="item-centre text-justify px-7 pt-6 text-grey-theme">
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
