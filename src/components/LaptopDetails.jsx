const LaptopDetails = ({ laptopDetails }) => (
    <div className="space-y-4">
      {laptopDetails.map((details, index) => (
        <div key={index} className="space-y-3">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="flex">
              <div className="font-bold text-gray-700 w-1/3 text-right pr-2">{key}</div>
              <div className="text-gray-700">:</div>
              <div className="text-gray-900 w-2/3 pl-2">
                {Array.isArray(value) ? value.join(", ") : value.toString()}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
export default LaptopDetails;  