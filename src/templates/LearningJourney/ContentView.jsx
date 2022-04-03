import { GET_LEARNING_BIT } from "../../lib/graphql";
import { useQuery } from "@apollo/client";
import LearningModule from "../../templates/LearningModule";
import Loading from "../../components/Loading";

const ContentView = ({ learningBitId }) => {
  const {
    loading: loadingLearningBitData,
    error: errorGettingLearningBit,
    data: learningBitDataArray,
  } = useQuery(GET_LEARNING_BIT, {
    variables: { learningBitId: learningBitId },
  });
  const learningBitData = learningBitDataArray?.learningBits[0];

  return (
    <>
      {loadingLearningBitData && <Loading />}
      {!loadingLearningBitData && !errorGettingLearningBit && (
        <>
          <LearningModule learningBitData={learningBitData} />
        </>
      )}
    </>
  );
};

export default ContentView;
