import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative bg-indigo hover:bg-royal bg-gradient-to-r to-storm p-4 border border-gray-50/[.1] rounded-xl w-64 h-full overflow-hidden cursor-pointer hover-animation"
      )}>
      <div className="flex flex-row items-center gap-2">
        <img
          className="bg-white/10 rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="font-medium text-white text-sm">
            {name}
          </figcaption>
          <p className="font-medium text-white/40 text-xs">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">Hear From My Clients</h2>
      <div className="relative flex flex-col justify-center items-center mt-12 w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="left-0 absolute inset-y-0 bg-gradient-to-r from-primary w-1/4 pointer-events-none"></div>
        <div className="right-0 absolute inset-y-0 bg-gradient-to-l from-primary w-1/4 pointer-events-none"></div>
      </div>
    </div>
  );
}
