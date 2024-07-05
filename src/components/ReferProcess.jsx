const HowRefer = () => {
    return (
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-10">
          How Do I <span className="text-blue-500">Refer?</span>
        </h1>
        <div className="mx-auto max-w-[1300px] relative max-h-[600px]  ">
          <img src="/images/how.png" className="max-w-[1300px]" />
          <div className="flex items-center justify-between px-24 mb-8 absolute top-36 bottom-32 w-full">
            <div className="w-1/3 text-center">
              <div className="bg-white rounded-full p-6 shadow-lg inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
              </div>
              <p className="text-[14px] font-semibold max-w-[200px] mx-auto w-full">
                Submit referrals easily via our website's referral section.
              </p>
            </div>
  
            <div className="w-1/3 text-center">
              <div className="bg-white rounded-full p-6 shadow-lg inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-[14px] font-semibold  max-w-[200px]  mx-auto w-full">
                Earn rewards once your referral joins an Accredian program.
              </p>
            </div>
  
            <div className="w-1/3 text-center">
              <div className="bg-white rounded-full p-6 shadow-lg inline-block mb-4">
                <svg
                  className="w-12 h-12 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <p className="text-[14px] font-semibold  max-w-[200px] text-center  mx-auto w-full">
                Both parties receive a bonus 30 days after program enrollment.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="max-w-3xl mx-auto p-6">
          <div className="text-center">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300">
              Refer Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default HowRefer