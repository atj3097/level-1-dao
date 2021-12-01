import React from 'react';

import ReactPlayer from 'react-player';

const LearningModule = ({curriculum}) => {
  return (
    <div>
      {/* <VideoPlayer /> */}
      {curriculum.contentType === 'video' && (
        <div className="video-container">
          <ReactPlayer url="https://www.youtube.com/watch?v=KHm0uUPqmVE" />
        </div>
      )}
      {curriculum.contentType === 'text' && (
        <div className="text-container">
          <p>{curriculum.content}</p>
        </div>
      )}
      {curriculum.contentType === 'image' && (
        <div className="image-container">
          <img src={curriculum.link} alt="content" />
        </div>
      )}
      {curriculum.contentType === 'quiz' && (
        <div className="quiz-container">
          <div className="p-10 card bg-base-200">
            <div className="form-control">
              <label className="label">
                <span className="text-xl">{curriculum.question}</span>
              </label>
              <textarea className="textarea h-24"></textarea>
            </div>
          </div>
        </div>
      )}
      {/* <Details /> */}
      <div className="details my-4">
        <h2 className="text-xl font-bold">Overview</h2>
        <p className="text-lg">{curriculum.description}</p>
      </div>
    </div>
  );
};

export default LearningModule;
