const ProjectCard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="relative w-full l h-[421px] rounded-lg overflow-hidden shadow-lg text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className=" p-6">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-base sm:text-lg mb-4">{description}</p>
          <div className="mt-10 pt-6 pb-2">
            <button className="bg-white text-black font-bold py-4 px-8 rounded text-base sm:text-lg">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
