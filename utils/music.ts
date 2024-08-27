import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
};

export const MusicService = async function () {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
    id: "trackId",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Track Title",
    artist: "Track Artist",
    artwork: "https://picsum.photos/200",
  });

  await TrackPlayer.setRepeatMode(RepeatMode.Track);
};
