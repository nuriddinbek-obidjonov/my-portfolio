import { Timeline } from "../components/TimeLine";
import { experiences } from "../constants";

function Experiences() {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
}

export default Experiences;
