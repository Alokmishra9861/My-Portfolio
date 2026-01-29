const FeatureSection = ({ imageSrc, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 py-12 px-4`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 mt-10">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[250px] shadow-lg object-fill"
        />
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-white text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
