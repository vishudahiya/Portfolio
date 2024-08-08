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
    <div class=" md:mb-20 my-24 font-poppins">
      <p class="md:text-1xl text-grey-theme md:font-medium text-center md:mb-3 text-md mb-1">
        Get To Know More
      </p>
      <p class="md:text-5xl font-bold text-black text-center text-3xl mb-4">
        About Me
      </p>
      <div class="md:flex md:justify-between lg:mt-34 lg:mx-auto">
        {/* <div class="flex items-center justify-center lg:ml-20">
          <img
            src={imagePhoto}
            alt="About_Photo"
            class="md:h-custom md:w-custom md:rounded-3xl md:mt-6  bg-stone-100 backdrop-brightness-50 lg:h-86 lg:w-92 lg:bg-stone-200 lg:px-16 rounded-3xl h-44 w-44 mb-9"
          />
        </div> */}
        <div class=" lg:py-14 lg:ml-[-18px] mb-[-55px]">
          <div class="md:flex md:justify-between flex mx-1 justify-around md:px-40">
            <AboutBoxes data={data[0]} />
            <AboutBoxes data={data[1]} />
          </div>
          <p class="item-centre text-justify md:pt-2 md:px-40 text-grey-theme lg:mt-6 mx-6 pt-5">
            <p className="text-xl mt-5">
              Hi, I'm VIshal Dahiya, a passionate Software Developer currently
              employed at Amdocs. <br />I thrive on problem-solving and relish
              tackling complex challenges head-on. It's this enthusiasm for
              overcoming obstacles that fuels my journey in the world of
              software development.
            </p>

            <br />

            <p className="text-xl">
              My technical skillset is diverse and includes proficiency in a
              range of programming languages and technologies. I'm well-versed
              in Java, Javascript, and React.js, Python.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
