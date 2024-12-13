// // src/context/SoundContext.tsx
// import React, { createContext, useContext, useState } from "react";

// interface SoundContextProps {
//   volume: number;
//   setVolume: (volume: number) => void;
//   currentTrack: string;
//   setCurrentTrack: (track: string) => void;
//   isPlaying: boolean;
//   togglePlayPause: () => void;
// }

// const SoundContext = createContext<SoundContextProps | undefined>(undefined);

// export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [volume, setVolume] = useState(50);
//   const [currentTrack, setCurrentTrack] = useState("default-track.mp3");
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => setIsPlaying(!isPlaying);

//   return (
//     <SoundContext.Provider
//       value={{
//         volume,
//         setVolume,
//         currentTrack,
//         setCurrentTrack,
//         isPlaying,
//         togglePlayPause,
//       }}
//     >
//       {children}
//     </SoundContext.Provider>
//   );
// };

// export const useSound = (): SoundContextProps => {
//   const context = useContext(SoundContext);
//   if (!context) {
//     throw new Error("useSound must be used within a SoundProvider");
//   }
//   return context;
// };
