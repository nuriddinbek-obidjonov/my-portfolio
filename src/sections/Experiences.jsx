import Timeline from "../components/Timeline";
import { createExperiences } from "../constants";

function Experiences() {
  return (
    <div id="work" className="w-full">
      <Timeline data={createExperiences()} />
    </div>
  );
}

export default Experiences;
