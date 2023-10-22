# MMM-BackgroundYouTube

[MagicMirror] Module - Background YouTube video player. Minimal implemented module to play a YouTube video in the background of your [MagicMirror]. Provide a YouTube Video ID, and enjoy a fullscreen, looping, and muted background.

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

```bash
# In your MagicMirror directory
git submodule add -f https://github.com/wickes1/MMM-BackgroundYouTube.git modules/MMM-BackgroundYouTube
```

## Updating

```bash
git submodule update --remote
```

## Configuration

| Option    | Description                                     | Default |
| --------- | ----------------------------------------------- | ------- |
| `videoID` | The YouTube video ID to play in the background. | `""`    |

## Usage

To use this module, add it to the modules array in the `config/config.js` file:

```js
modules:[
  {
    module: "MMM-BackgroundYouTube",
    position: "fullscreen_below",
    config: {
      videoID: "dQw4w9WgXcQ",
    },
  },
]
```

## FAQ

### How do I find a YouTube video ID?

The YouTube video ID is the string of characters after `v=` in the URL of the video. For example, in the URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is `dQw4w9WgXcQ`.

### Why my background shows `Video unavailable, Watch on YouTube`?

One of the possible reason is the copyrighted music are not allowed to play in the background.

### Can I autoplay with sound?

No, it is not possible to autoplay with sound but no interaction with the browser. Modern browsers will block autoplay with sound. You can read more about it [here](https://developer.chrome.com/blog/autoplay/).

[MagicMirror]: https://github.com/MichMich/MagicMirror
