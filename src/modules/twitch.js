export const twitchEmbed = (props) => {
  new window.Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "Grimmmz"
  });
}
