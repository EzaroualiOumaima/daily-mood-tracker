import CardMood from "./CardMood";
import {
  angry,
  happy,
  shy,
  sick,
  sad,
  sleepy,
  afraid,
  amorous,
} from "../assets/moods";

interface DailyMoodProps {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DailyMood = ({ setIsClicked }: DailyMoodProps) => {
  return (
    <>
      <h1
        className="font-bold text-3xl text-[#020817] text-center mb-7"
        data-aos="fade-down"
        data-testid="moods-header"
      >
        Could you share with us your feelings as you experienced them during the
        day?
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-4 md:place-items-center  
        gap-7 items-center justify-center overflow-hidden  p-4 
        shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] 
        rounded-lg"
        data-testid="container"
      >
        <CardMood
          mood_id={happy.mood_id}
          url={happy.url}
          name={happy.name}
          data-aos="slide-right"
          data-aos-delay={150 * happy.mood_id}
          onClick={() => setIsClicked(true)}
        />
          <CardMood
            mood_id={amorous.mood_id}
            url={amorous.url}
            name={amorous.name}
            data-aos="slide-left"
            data-aos-delay={150 * amorous.mood_id}
            onClick={() => setIsClicked(true)}
          />
        <CardMood
          mood_id={shy.mood_id}
          url={shy.url}
          name={shy.name}
          data-aos="slide-down"
          data-aos-delay={150 * shy.mood_id}
          onClick={() => setIsClicked(true)}
        />
        <CardMood
          mood_id={sick.mood_id}
          url={sick.url}
          name={sick.name}
          data-aos="slide-left"
          data-aos-delay={150 * sick.mood_id}
          onClick={() => setIsClicked(true)}
        />
        <CardMood
          mood_id={sad.mood_id}
          url={sad.url}
          name={sad.name}
          data-aos="slide-right"
          data-aos-delay={150 * sad.mood_id}
          onClick={() => setIsClicked(true)}
        />
        <CardMood
          mood_id={angry.mood_id}
          url={angry.url}
          name={angry.name}
          data-aos="slide-up"
          data-aos-delay={150 * angry.mood_id}
          onClick={() => setIsClicked(true)}
        />
        <CardMood
          mood_id={sleepy.mood_id}
          url={sleepy.url}
          name={sleepy.name}
          data-aos="slide-left"
          data-aos-delay={150 * sleepy.mood_id}
          onClick={() => setIsClicked(true)}
        />
        <CardMood
          mood_id={afraid.mood_id}
          url={afraid.url}
          name={afraid.name}
          data-aos="slide-left"
          data-aos-delay={150 * afraid.mood_id}
          onClick={() => setIsClicked(true)}
        />
      </div>
    </>
  );
};

export default DailyMood;
