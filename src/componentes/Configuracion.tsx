// src/components/SoundManager.tsx
import React from "react";
import { useSound } from "../context/SoundContext";

const SoundManager: React.FC = () => {
  const {
    volume,
    setVolume,
    isPlaying,
    togglePlayPause,
    currentTrack,
    setCurrentTrack,
  } = useSound();

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newVolume = Number(event.target.value);
    newVolume = Math.max(0, Math.min(100, newVolume)); // Asegura el rango
    setVolume(newVolume);
  };

  const handleTrackChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTrack = event.target.value;
    if (newTrack) {
      setCurrentTrack(newTrack);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Sound Manager</h2>
      <button
        onClick={togglePlayPause}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className="mt-4">
        <label
          htmlFor="volume"
          className="block text-sm font-medium text-gray-700"
        >
          Volume: {volume}%
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="track"
          className="block text-sm font-medium text-gray-700"
        >
          Select Track:
        </label>
        <select
          id="track"
          value={currentTrack}
          onChange={handleTrackChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="default-track.mp3">Default Track</option>
          <option value="track-1.mp3">Track 1</option>
          <option value="track-2.mp3">Track 2</option>
        </select>
      </div>
    </div>
  );
};

export default SoundManager;
