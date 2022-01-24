import { useMutation } from "../../lib/apollo";
import { ADD_USER_LEARNING_JOURNEYS } from "../../lib/graphql";

const StartButton = ({ userId, learningJourneyId, started }) => {
    console.log("started is equal to: " + started);

    const {
      load: startLevel,
      loading,
      error,
    } = useMutation(ADD_USER_LEARNING_JOURNEYS, {
      onCompleted: (data) => {
        // TODO - show alert/toast
        console.log("update user learning journey ", data);
        return;
      },
      onError: (error) => {
        // TODO - show alert/toast
        console.log("update user learning journey error", error);
        return;
      },
    });
    
  const goToLevel = () => {
    // If user has not started level yet
    startLevel({
      variables: {
        id: userId,
        learningJourneyId: learningJourneyId,
        progress: 0,
        title: "My First Learning Journey",
      },
    });
    //Add function for continuing level
  }

  return (
    <div className="start-level">
      <button className="btn btn-primary" onClick={goToLevel}>
        <span className="text-sm">
          {
            started ? "Continue this Level1" : "Start this Level1"
          }
        </span>
      </button>
    </div>
  );
};

export default StartButton;