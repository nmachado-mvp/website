import Image from "next/image";

const About = () => {
  return (
    <div className="w-full flex mt-20 justify-center items-center flex-col">
      <AboutBox
        img="/hero_call.svg"
      />
      <div style={{ height: '40vh' }} className="flex flex-col items-center text-white">
        <h5 className="text-white text-[20px] sm:text-[35px] xl:text-[30px] font-normal font-serious" >The new way of building mvp software</h5>
        <h1 className="text-[40px] sm:text-[86px] xl:text-[65pxpx] font-serious leading-[1.1] tracking-wide">Software Sprints</h1>
      </div>
      <div className="flex-col justify-center items-center w-[90%]">
        {/* <AboutBox order img="/heroes_talking.svg" heading="Service Package" /> */}
        {/* <AboutBox
          img="/heroes_meeting.svg"
          heading="Sprint"
          desc={["Your MVP project created in multiple 4 week sprints"]}
        />
        <AboutBox
          img="/hero_calendar.svg"
          heading="Pay as you go"
          desc={[
            "Smaller payments.",
            "Pay one sprint at a time.",
          ]}
        /> */}
        <p
          className="leading-[1] text-white text-base xl:text-xl"
        >
          We
        </p>
      </div>
    </div>
  );
};

export default About;

export const AboutBox = ({ black, order, img, heading, desc }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5`}
    >
      <div className={`flex justify-center md:w-full lg:max-w-none max-w-[250px]`}>
        <Image
          width={300}
          height={300}
          style={{ objectFit: "contain" }}
          src={img}
          alt="..."
        />
      </div>
      <div
        className={` w-fit flex justify-center items-center lg:text-left text-center lg:items-start flex-col gap-8`}
      >
        <h2
          className={`${black ? "text-black" : "text-white"} ${desc?.length > 0
            ? " text-[40px] sm:text-[66px] xl:text-[45pxpx] "
            : `text-[50px] sm:text-[96px] xl:text-[75pxpx]`
            } font-dumbledore leading-[1.1]`}
        >
          {heading}
        </h2>
        <div className="flex justify-start items-center lg:items-start flex-col gap-2">
          {desc?.map((elem, idx) => {
            return (
              <p
                className="leading-[1] text-white text-base xl:text-xl"
                key={elem + idx}
              >
                {elem}
              </p>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};
