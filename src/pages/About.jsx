import FeatureSection from "../constants/FeatureSection";
import FloatingSkills from "../constants/FloatingSkills";

function About() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 grid-cols-1 p-10">
      <FeatureSection
        imageSrc="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Pale"
        title="About me : "
        description="I am a Full Stack Developer and B.Tech student with a strong foundation in Core Java and the MERN Stack. As a fresher, I am passionate about building scalable web applications and solving real-world problems through code.."
        reverse={true}
      />
      <div>
        <FloatingSkills />
      </div>
    </div>
  );
}

export default About;
