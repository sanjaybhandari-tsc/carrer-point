const TestimonialCard = ({ image, name, role, message }) => {
  // return (
  //   <div className="min-w-[300px] max-w-[320px] bg-white rounded-xl shadow-md p-6 relative flex-shrink-0">
      
      
  //     <div className="absolute -top-10 left-1/2 -translate-x-1/2">
  //       <img
  //         src={image}
  //         alt={name}
  //         className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
  //       />
  //     </div>

  
  //     <div className="mt-12 text-center">
  //       <h3 className="font-semibold text-lg">{name}</h3>
  //       <p className="text-gray-500 text-sm mb-4">{role}</p>

  //       <p className="text-gray-600 text-sm leading-relaxed">
  //         “{message}”
  //       </p>
  //     </div>
  //   </div>
  // );
  return (
    <div className="relative min-w-[340px] max-w-[360px] h-[300px] bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm flex-shrink-0">

      {/* Avatar */}
      <div className="absolute -top-12">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover bg-white"
        />
      </div>

      {/* Content */}
      <div className="mt-14">
        <h3 className="font-semibold text-lg text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          {role}
        </p>

        {/* Quote Icon */}
        <div className="text-4xl text-gray-200 leading-none mb-2">“</div>

        <p className="text-gray-600 text-sm leading-relaxed px-2">
          {message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;