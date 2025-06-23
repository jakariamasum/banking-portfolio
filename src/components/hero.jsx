const Hero = ({ title, about }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          NeverBank
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{about}</p>
    </div>
  );
};

export default Hero;
