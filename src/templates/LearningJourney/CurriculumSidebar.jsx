import { NFT } from "../../components/NFT";
import Curriculum from "../../components/Curriculum";

const CurriculumSidebar = ({ curriculumData, started, progress, step }) => {
  return (
    <div className="flex flex-col space-y-4 items-center w-full px-4">
      {!started && (
        <>
          <div
            className="flex items-center w-full bg-cover card bg-base-200"
            style={{
              backgroundImage:
                "url(https://s.gitcoin.co/static/v2/card/thumb.0a0be2e5841a.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="card glass lg:card-side text-neutral-content">
              <div className="max-w-md card-body">
                <p>This learning module is available to GitcoinDAO members.</p>
                <div className="card-actions">
                  <button className="btn btn-sm glass rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <NFT />
        </>
      )}
      <Curriculum
        curriculum={curriculumData}
        started={started}
        progress={progress}
        step={parseInt(step)}
      />
    </div>
  );
};

export default CurriculumSidebar;
