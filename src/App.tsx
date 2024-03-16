import { useState } from "react";
import DailyMood from "./components/DailyMood";
const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
        {!isClicked ? (
          <DailyMood setIsClicked={setIsClicked} />
        ) : (
          <div
            data-aos="fade-down"
            data-aos-delay={150}
            className="bg-slate-100 w-[70%] p-12  text-center rounded-lg md:w-[90%]  md:text-5xl"
          >
            Certainly! "See you tomorrow, thanks for the input! 👋
          </div>
        )}
      </div>
    </>
  );
};

export default App;
