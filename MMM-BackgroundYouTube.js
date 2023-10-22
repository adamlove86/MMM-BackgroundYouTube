/*
 * MagicMirror Module: MMM-BackgroundYouTube
 * Description: A module to display YouTube videos as background in your MagicMirror.
 * Author: wickes1
 * License: MIT
 *
 * Configuration Options:
 * - videoID: YouTube Video ID to display as background.
 *
 * For more information, visit: https://github.com/wickes1/MMM-BackgroundYouTube
 */

Module.register("MMM-BackgroundYouTube", {
  defaults: {
    videoID: ""
  },

  getStyles: function () {
    return ["MMM-BackgroundYouTube.css"];
  },

  getDom: function () {
    let iframe = document.createElement("iframe");
    iframe.classList.add("video-background");
    iframe.src = `https://www.youtube.com/embed/${this.config.videoID}?controls=0&amp;showinfo=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1&amp;playlist=${this.config.videoID}&amp;loop=1&amp; allowfullscreen`;
    return iframe;
  }
});
