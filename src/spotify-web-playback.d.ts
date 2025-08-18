interface Window {
  onSpotifyWebPlaybackSDKReady: () => void;
  Spotify: {
    Player: new (options: {
      name: string;
      getOAuthToken: (cb: (token: string) => void) => void;
      volume?: number; // Add this line
    }) => {
      addListener: (event: string, callback: (data: any) => void) => void;
      connect: () => Promise<boolean>;
      disconnect: () => void;
      setVolume: (volume: number) => Promise<void>; // Add this line if not already present
    };
  };
}