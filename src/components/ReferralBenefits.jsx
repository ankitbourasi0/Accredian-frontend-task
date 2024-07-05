import Button from "../utils/button";

const ReferralBenefits = () => {
    const programs = [
      {
        name: "Professional Certificate Program in Product Management",
        referrerBonus: 7000,
        refereeBonus: 9000,
      },
      {
        name: "PG Certificate Program in Strategic Product Management",
        referrerBonus: 9000,
        refereeBonus: 11000,
      },
      {
        name: "Executive Program in Data Driven Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
      },
      {
        name: "Executive Program in Product Management and Digital Transformation",
        referrerBonus: 10000,
        refereeBonus: 10000,
      },
      {
        name: "Executive Program in Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
      },
      {
        name: "Advanced Certification in Product Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
      },
      {
        name: "Executive Program in Product Management and Project Management",
        referrerBonus: 10000,
        refereeBonus: 10000,
      },
    ];
  
    const categories = [
      "ALL PROGRAMS",
      "PRODUCT MANAGEMENT",
      "STRATEGY & LEADERSHIP",
      "BUSINESS MANAGEMENT",
      "FINTECH",
      "SENIOR MANAGEMENT",
      "DATA SCIENCE",
      "DIGITAL TRANSFORMATION",
      "BUSINESS ANALYTICS",
    ];
  
    return (
      <div className="container mx-auto p-4 bg-gray-100">
        <div className="flex justify-end mb-4">
          <span className="mr-2">Enrolled</span>
          <div className="w-12 h-6 bg-blue-600 rounded-full p-1 duration-300 ease-in-out">
            <div className="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out translate-x-6"></div>
          </div>
        </div>
  
        <div className="flex space-x-4">
          {/* Left sidebar */}
          <div className="w-1/4 bg-white rounded-lg shadow-md p-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`py-2 px-4 ${
                  index === 0 ? "bg-blue-600 text-white rounded-md" : "border-b"
                } flex justify-between items-center`}
              >
                {category}
                <span>{index === 0 ? ">" : ">"}</span>
              </div>
            ))}
          </div>
  
          {/* Main content */}
          <div className="w-3/4 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-4 grid grid-cols-3 font-semibold">
              <div>Programs</div>
              <div className="text-center">Referrer Bonus</div>
              <div className="text-center">Referee Bonus</div>
            </div>
            <div className="divide-y">
              {programs.map((program, index) => (
                <div key={index} className="p-4 grid grid-cols-3 items-center">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                    {program.name}
                  </div>
                  <div className="text-center">
                    ₹ {program.referrerBonus.toLocaleString()}
                  </div>
                  <div className="text-center">
                    ₹ {program.refereeBonus.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-white text-gray-600 rounded-md shadow">
            Show More ▼
          </button>
        </div>
        <div className="flex justify-center">
          <Button btnName={"Refer Now"} styles={"py-3 px-10 text-xl"} />
        </div>
      </div>
    );
  };


  export default ReferralBenefits