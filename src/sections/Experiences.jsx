import Timeline from "../components/Timeline";
import { experiences } from "../constants";

function Experiences() {
  return (
    <div id="work" className="w-full">
      <Timeline data={experiences} />
    </div>
  );
}

export default Experiences;
