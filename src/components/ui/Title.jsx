const Title = ({ image, h5, h1, p, imgStyle, divStyle, pStyle, h1Style }) => {
  return (
    <div className="flex flex-col items-center">
      <h5 className="py-3 text-[16px] font-bold text-primary tracking-[3px] leading-[28px] md:leading-[30px] uppercase">
        {h5}
      </h5>
      <h1
        className={`font-semibold ${h1Style} text-2xl md:text-4xl leading-[32px] md:leading-[35px]`}
      >
        {h1}
      </h1>
      <div
        className={`w-full mx-auto md:w-180 px-2 mt-0 ${divStyle} flex md:flex-row flex-col gap-5 md:items-start items-center justify-between my-5`}
      >
        <div className={`${imgStyle} size-20 md:size-30 md:mt-0 mt-8`}>
          <img
            className="object-cover w-full h-full rounded-full"
            src={image}
            alt=""
          />
        </div>
        <p
          className={` ${pStyle} w-full text-fade text-[17px] md:text-xl leading-[30px] md:leading-[36px]`}
        >
          {p}
        </p>
      </div>
    </div>
  );
};

export default Title;
