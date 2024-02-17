export default function ExperienceBoxes({ data }) {
  return (
    <div
      class="md:items-center md:justify-center  md:my-10 md:mx-15 border-solid  border-black border-custom-border1 md:px-20 md:py-6 
    rounded-3xl font-poppins mb-8"
    >
      <p class="md:mb-7 md:text-3xl font-medium text-grey-theme md:text-center py-6 text-text-medium2 text-center">
        {data.title}
      </p>
      <div class="md:flex md:justify-between md:items-center text-center pb-6">
        <div class="md:space-y-8 space-y-5 mb-5">
          <div>
            <p class="md:font-font-custom md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[0] ? data.skill[0] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1 text-md">
              {data.skill[0] ? data.experience[1] : ""}
            </p>
          </div>
          <div>
            <p class="md:font-font-custom  md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[2] ? data.skill[2] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1 text-md">
              {data.skill[2] ? data.experience[1] : ""}
            </p>
          </div>
          <div>
            <p class="md:font-font-custom  md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[4] ? data.skill[4] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1 text-md">
              {data.skill[4] ? data.experience[1] : ""}
            </p>
          </div>
        </div>
        <div class="md:space-y-8 space-y-5">
          <div>
            <p class="md:font-font-custom  md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[1] ? data.skill[1] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1 text-md">
              {data.skill[1] ? data.experience[1] : ""}
            </p>
          </div>
          <div>
            <p class="md:font-font-custom  md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[3] ? data.skill[3] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1 text-md">
              {data.skill[3] ? data.experience[1] : ""}
            </p>
          </div>
          <div>
            <p class="md:font-font-custom  md:text-text-medium2 font-font-custom1 text-xl">
              {data.skill[5] ? data.skill[5] : ""}
            </p>
            <p class="text-grey-theme md:text-text-medium1">
              {data.skill[5] ? data.experience[1] : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
