const UseSectionTitle = (title1, title2, style1, style2 = "text-[#7600fa]") => {
  const sectionValue = (
    <>
      <div
        className={`border-y-4 w-1/2 md:py-10 py-4 ${style1} border-[#7600fa] my-10 justify-center mx-auto flex gap-x-2`}
      >
        <h1
          className={`md:text-3xl text-xl font-semibold text-center ${style2}`}
        >
          {title1}
        </h1>
        <h1 className="md:text-2xl text-xl font-semibold text-center ">
          {title2}
        </h1>
      </div>
    </>
  );
  return sectionValue;
};

export default UseSectionTitle;
