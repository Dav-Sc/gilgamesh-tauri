import React, { useState, useRef, useEffect } from 'react';
import * as mm from 'music-metadata-browser';
import {
    BsFillFastForwardFill,
    BsFillRewindFill,
    BsPauseFill,
    BsPlayFill,
    BsSkipBackward,
    BsSkipForward

} from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './AudioPlayer.css'; // Import your custom CSS (if needed)

const AudioPlayer = ({ src }) => {


    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(.5);
    const [metadata, setMetadata] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const handleProgressBarClick = (e) => {
        if (!audioRef.current || !progressBarRef.current) return;

        const clickPositionInPage = e.pageX;
        const progressBarStart = progressBarRef.current.getBoundingClientRect().left;
        const clickPositionInBar = clickPositionInPage - progressBarStart;
        const clickRatio = clickPositionInBar / progressBarRef.current.offsetWidth;

        audioRef.current.currentTime = clickRatio * audioRef.current.duration;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleProgressBarClick(e);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleProgressBarClick(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const audio = audioRef.current;


        const onTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
            setCurrentTime(audio.currentTime);
        };

        const onLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        if (audio) {
            audio.addEventListener('timeupdate', onTimeUpdate);
            audio.addEventListener('loadedmetadata', onLoadedMetadata);
        }

        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', onTimeUpdate);
                audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            }
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;

        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const handleFastForward = () => {
        const audio = audioRef.current;
        audio.currentTime += 5;
    };

    const handleRewind = () => {
        const audio = audioRef.current;
        audio.currentTime -= 5;
    };

    const handleVolumeChange = (e) => {
        const audio = audioRef.current;
        audio.volume = e.target.value;
        setVolume(e.target.value);
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);

        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleBackSkip = () => {
        const audio = audioRef.current;
        audio.currentTime -= 10;
    };

    const handleForwardSkip = () => {
        const audio = audioRef.current;
        audio.currentTime += 10;
    };

    return (
        <div className="container mx-auto text-white">
            <audio ref={audioRef} src={src}></audio>

            <progress className="progress progress-primary w-56" 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            ref={progressBarRef}
            
            value={progress} max={100}></progress>


            <div className="text-center mt-2">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="btn-primary btn mx-2"
                    onClick={handleRewind}
                >
                    <BsFillRewindFill />
                </button>
                <button
                    className="btn-primary btn mx-2"
                    onClick={togglePlay}
                >
                    {playing ? <BsPauseFill /> : <BsPlayFill />}
                </button>
                <button
                    className="btn-primary btn mx-2"
                    onClick={handleFastForward}
                >
                    <BsFillFastForwardFill />
                </button>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    className="btn-primary btn mx-2"
                    onClick={handleBackSkip}
                >
                    <BsSkipBackward />
                </button>
                <button
                    className="btn-primary btn mx-2"
                    onClick={handleForwardSkip}
                >
                    <BsSkipForward />
                </button>
            </div>

            <div className="mt-3 text-center">
                Volume:
                <input
                    type="range"
                    className="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>

    );
};

export default AudioPlayer;
