import {ComponentPropsWithoutRef} from "react"
type MoodProps = ComponentPropsWithoutRef<'div'> & {
    mood_id: number;
    url: string;
    name: string;
};

const CardMood = ({ mood_id, url, name , ...props}: MoodProps) => {
  return (
    <div
      key={mood_id}
      {...props}
      className="relative cursor-pointer   bg-white max-w-64 p-2 overflow-hidden flex flex-col items-center justify-center rounded-md "
      data-testid="mood-container"
    >
      <p
        className="text-center font-bold capitalize text-xl md:text-3xl"
        data-testid="mood-name"
      >
        {name}
      </p>
      <img
        data-testid="mood-image"
        src={url}
        alt={`${name} expression`}
        className="aspect-square object-contain min-w-40 w-full hover:scale-110 hover:translate-y-4  transition-all duration-500  "
      />
    </div>
  );
};

export default CardMood;
