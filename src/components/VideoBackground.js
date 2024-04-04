const VideoBackground = ({ trailerKey }) => {
  return (
    <div className="w-screen aspect-video">
      <iframe className="w-screen aspect-video" src="https://www.youtube.com/embed/QwievZ1Tx-8?si=8OASW6giFKZVrtF2?&autoplay=1&mute=1" title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  );
};

export default VideoBackground;
