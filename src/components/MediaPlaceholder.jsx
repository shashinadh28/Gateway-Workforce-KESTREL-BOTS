import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Camera, Video, Sparkles } from 'lucide-react';

export default function MediaPlaceholder({
  videoSrc = null,
  poster = null,
  label = 'Media Placeholder',
  sublabel = 'Image / Video Holder',
  aspect = 'aspect-video',
  showPlay = false,
  className = '',
  iconType = 'camera',
  overlayBadge = null,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Safely initiate autoplay inline
  useEffect(() => {
    if (videoSrc && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const togglePlay = (e) => {
    e?.stopPropagation?.();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation?.();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/10 group shadow-2xl transition-colors duration-300 hover:border-[#1D75FE]/40 select-none ${className}`}
      style={{ transform: 'none' }}
    >
      {videoSrc ? (
        <>
          {/* Constrained Video element - strictly within placeholder, never zoom */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black" style={{ transform: 'none' }}>
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              webkit-playsinline="true"
              preload="auto"
              onClick={togglePlay}
              className="w-full h-full object-cover block cursor-pointer"
              style={{ transform: 'none' }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>

          {/* Top Tech HUD Overlay */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
            {/* Live Recording Indicator */}
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold tracking-wider">REC</span>
              <span className="text-white/30">•</span>
              <span className="text-gray-300">4K 60FPS</span>
            </div>

            {/* Overlay Badge */}
            {overlayBadge && (
              <div className="bg-[#1D75FE]/20 backdrop-blur-md border border-[#1D75FE]/40 text-[#60A5FA] text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm shadow-[#1D75FE]/20">
                {overlayBadge}
              </div>
            )}
          </div>

          {/* Subtle Viewfinder Crosshairs in corners (Tech Camera look) */}
          <div className="absolute inset-4 pointer-events-none z-10 opacity-30">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/60" />
          </div>

          {/* Bottom Gradient Overlay & Controls */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-5 z-10 pointer-events-none">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-white text-sm sm:text-base font-bold tracking-tight drop-shadow-md">
                  {label}
                </p>
                {sublabel && (
                  <p className="text-gray-300 text-[11px] sm:text-xs font-mono tracking-wide mt-0.5 drop-shadow">
                    {sublabel}
                  </p>
                )}
              </div>

              {/* Inline Controls (Play/Pause & Mute) */}
              <div className="flex items-center gap-2 pointer-events-auto">
                <button
                  type="button"
                  onClick={togglePlay}
                  title={isPlaying ? 'Pause' : 'Play'}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#1D75FE] border border-white/20 hover:border-[#1D75FE] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-md cursor-pointer"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5 fill-white" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#1D75FE] border border-white/20 hover:border-[#1D75FE] text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-md cursor-pointer"
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Subtle tech background grid pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none group-hover:opacity-25 transition-opacity duration-300"
            style={{
              backgroundImage:
                'radial-gradient(rgba(29, 117, 254, 0.25) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
              backgroundSize: '24px 24px, 48px 48px',
            }}
          />

          {/* Atmospheric corner glow */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#1D75FE]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#1D75FE]/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Top right badge if provided */}
          {overlayBadge && (
            <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {overlayBadge}
            </div>
          )}

          {/* Centered content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            {showPlay ? (
              <div className="relative mb-3">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg shadow-black/60 group-hover:border-[#1D75FE] group-hover:bg-[#1D75FE]/20 transition-all duration-300">
                  <Play size={22} fill="white" className="text-white ml-1" />
                </div>
              </div>
            ) : (
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 group-hover:border-[#1D75FE]/40 transition-all duration-300">
                {iconType === 'video' ? (
                  <Video className="w-5 h-5 text-[#1D75FE]" />
                ) : iconType === 'sparkles' ? (
                  <Sparkles className="w-5 h-5 text-[#1D75FE]" />
                ) : (
                  <Camera className="w-5 h-5 text-[#1D75FE]" />
                )}
              </div>
            )}

            <p className="text-gray-200 text-xs md:text-sm font-semibold tracking-wide group-hover:text-white transition-colors">
              {label}
            </p>
            {sublabel && (
              <p className="text-gray-500 text-[11px] mt-1 font-mono uppercase tracking-wider">
                {sublabel}
              </p>
            )}
          </div>
        </>
      )}

      {/* Frame border highlight */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#1D75FE]/30 rounded-2xl pointer-events-none transition-colors duration-300" />
    </div>
  );
}
