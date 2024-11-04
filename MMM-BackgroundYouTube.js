/* 
 * MagicMirror Module: MMM-BackgroundYouTube
 * Description: A module to display YouTube videos or playlists as background in your MagicMirror.
 * Author: wickes1 (modified by adamlove86)
 * License: MIT
 *
 * Configuration Options:
 * - videoID: YouTube Video ID to display as background.
 * - videoIDs: Array of YouTube Video IDs to play as a playlist.
 * - playlistID: YouTube Playlist ID to display as background.
 *
 * For more information, visit: https://github.com/wickes1/MMM-BackgroundYouTube
 */

Module.register("MMM-BackgroundYouTube", {
  defaults: {
    videoID: "",
    videoIDs: [], // Array of video IDs
    playlistID: "" // Playlist ID
  },

  getStyles: function () {
    return ["MMM-BackgroundYouTube.css"];
  },

  getDom: function () {
    let iframe = document.createElement("iframe");
    iframe.classList.add("video-background");

    let params = "controls=0&showinfo=0&playsinline=1&autoplay=1&mute=1&loop=1&playlist=";
    let src = "";

    if (this.config.playlistID) {
      // If a playlist ID is provided
      src = `https://www.youtube.com/embed?listType=playlist&list=${this.config.playlistID}&${params}`;
    } else {
      // Handle single or multiple video IDs
      let videoIDs = [];

      if (this.config.videoID) {
        videoIDs.push(this.config.videoID);
      }

      if (Array.isArray(this.config.videoIDs) && this.config.videoIDs.length > 0) {
        videoIDs = videoIDs.concat(this.config.videoIDs);
      }

      if (videoIDs.length > 0) {
        let firstVideoID = videoIDs[0];
        let remainingVideoIDs = videoIDs.slice(1).join(',');

        src = `https://www.youtube.com/embed/${firstVideoID}?${params}${remainingVideoIDs}`;
      } else {
        // Default video if none provided
        src = `https://www.youtube.com/embed/${this.config.videoID}?${params}${this.config.videoID}`;
      }
    }

    iframe.src = src;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    return iframe;
  }
});
