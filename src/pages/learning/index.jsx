import {Meta} from '../../layout/Meta.tsx';
import AppPageTwoColumn from '../../layout/AppPageTwoColumn';
import LearningSplashPage from '../../templates/LearningSplashPage';
import {NFT} from '../../components/NFT';
import Curriculum from '../../components/Curriculum';

import GitcoinCurriculumData from '../../mockData/GitcoinCurriculumData';

const LearningLandingPage = () => (
  <div className="h-full">
    <AppPageTwoColumn
      meta={
        <Meta
          title="GitcoinDAO Level1"
          description="Your first steps to contributing to the GitcoinDAO"
        />
      }
      leftColumn={<LearningSplashPage />}
      rightColumn={
        <div className="flex flex-col space-y-4 items-center w-full px-4">
          {/* <AccessInfo /> */}
          <div
            className="flex items-center w-full bg-cover card bg-base-200"
            style={{
              backgroundImage:
                'url(https://s.gitcoin.co/static/v2/card/thumb.0a0be2e5841a.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="card glass lg:card-side text-neutral-content">
              <div className="max-w-md card-body">
                <p>This learning module is available to GitcoinDAO members.</p>
                <div className="card-actions">
                  <button className="btn btn-sm glass rounded-full">
                    Join GitcoinDAO
                  </button>
                </div>
              </div>
            </div>
          </div>
          <NFT />
          <Curriculum curriculum={GitcoinCurriculumData} />
        </div>
      }
    />
  </div>
);

export default LearningLandingPage;
