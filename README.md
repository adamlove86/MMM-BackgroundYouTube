# MMM-BackgroundYouTube

[MagicMirror] Module - Background YouTube video player. Minimal implemented module to play a YouTube video, multiple videos, or a playlist in the background of your [MagicMirror]. Provide a YouTube Video ID, multiple Video IDs, or a Playlist ID, and enjoy a fullscreen, looping, and muted background.
  
## Table of Contents

- [MMM-BackgroundYouTube](#mmm-backgroundyoutube)
  - [Table of Contents](#table-of-contents)
  - [Installing](#installing)
  - [Updating](#updating)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [FAQ](#faq)
    - [How do I find a YouTube video ID?](#how-do-i-find-a-youtube-video-id)
    - [Why my background shows `Video unavailable, Watch on YouTube`?](#why-my-background-shows-video-unavailable-watch-on-youtube)
    - [Can I autoplay with sound?](#can-i-autoplay-with-sound)

## Installing

In your MagicMirror directory, run:

```
git submodule add -f https://github.com/adamlove86/MMM-BackgroundYouTube.git modules/MMM-BackgroundYouTube
```

## Updating

To update, run:

```
git submodule update --remote
```

## Configuration

| Option      | Description                                                | Default |
| ----------- | ---------------------------------------------------------- | ------- |
| `videoID`   | The YouTube video ID to play in the background.           | `""`    |
| `videoIDs`  | An array of YouTube video IDs to play as a playlist.      | `[]`    |
| `playlistID`| The YouTube playlist ID to play in the background.        | `""`    |

**Note:** Use either `videoID` and/or `videoIDs` for individual videos or `playlistID` for a playlist. If both are provided, `playlistID` takes precedence.

## Usage

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
modules: [
  {
    module: "MMM-BackgroundYouTube",
    position: "fullscreen_below",
    config: {
      // Option 1: Single Video
      videoID: "dQw4w9WgXcQ",

      // Option 2: Multiple Videos
      // videoIDs: ["dQw4w9WgXcQ", "eY52Zsg-KVI", "3JZ_D3ELwOQ"],

      // Option 3: Playlist
      // playlistID: "PL9tY0BWXOZFtE9k3us_CfC4JZ4XyUjcxg",
    },
  },
]
```

Uncomment the desired option and provide the appropriate IDs.

## FAQ

### How do I find a YouTube video ID?

The YouTube video ID is the string of characters after `v=` in the URL of the video. For example, in the URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`.

### Why my background shows `Video unavailable, Watch on YouTube`?

One possible reason is that the video has restrictions such as copyright protections that prevent it from being embedded.

### Can I autoplay with sound?

No, it is not possible to autoplay with sound without user interaction. Modern browsers block autoplay with sound. The videos will play muted automatically.

[MagicMirror]: https://github.com/MichMich/MagicMirror

## Credits

This module is based on the original repository by [wickes1](https://github.com/wickes1/MMM-BackgroundYouTube). All modifications are credited accordingly.