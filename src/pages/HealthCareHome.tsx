const HealthCareHome = () => {
  return (
    <div>
      <div className="bg-blue-600 text-white py-8 text-center font-bold text-xl">
        <div className="text-2xl">Your Health, Our Priority</div>
        <div className="text-xs py-4">
          Explore the latest health information and resources from Bayer
          Healthcare
        </div>
      </div>
      <div className="bg-gray-200 pt-16 px-10">
        <h2 className="font-bold pb-2">Featured Health Topics</h2>
        <div className="flex gap-4 pb-8">
          <div className="bg-white w-64 p-4">
            <h3 className="font-bold pb-2">COVID 19 Updates</h3>
            <div className="text-sm pb-2">
              Stay informed about the latest COVID 19 guidelines and vaccination
              information
            </div>
            <button className="text-sm bg-green-600 text-white px-2 py-1">
              Learn More
            </button>
          </div>
          <div className="bg-white w-64 p-4">
            <h3 className="font-bold pb-2">COVID 19 Updates</h3>
            <div className="text-sm pb-2">
              Stay informed about the latest COVID 19 guidelines and vaccination
              information
            </div>
            <button className="text-sm bg-green-600 text-white px-2 py-1">
              Learn More
            </button>
          </div>
          <div className="bg-white w-64 p-4">
            <h3 className="font-bold pb-2">COVID 19 Updates</h3>
            <div className="text-sm pb-2">
              Stay informed about the latest COVID 19 guidelines and vaccination
              information
            </div>
            <button className="text-sm bg-green-600 text-white px-2 py-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCareHome;
