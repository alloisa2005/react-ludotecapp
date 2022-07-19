import React from "react";
import "./VideoContainer.css";

function VideoContainer({ source }) {
  return (
    <div className="video_container">
      <iframe
        className="video_container_iframe"
        src={`https://www.youtube.com/embed/${source}`}
        title="YouTube video player"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>    
    </div>
  );
}

export default VideoContainer;
