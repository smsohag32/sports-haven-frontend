const SectionHeading = ({ heading, subHeading }) => {
  return (
    <div className="flex py-5 items-center flex-col text-left">
      <h1 className="font-semibold text-xl md:text-2xl">{heading}</h1>
      {subHeading && <p className="text-sm text-gray-400">{subHeading}</p>}
    </div>
  );
};

export default SectionHeading;
