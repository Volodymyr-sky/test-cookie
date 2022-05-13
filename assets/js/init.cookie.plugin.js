// import notification from "../../../json/notification.json" assert { type: "json" };
// import modal from "../../../json/modal.json" assert { type: "json" };
// import settings from "../../../json/cookie-settings.json" assert { type: "json" };
const parentSelector = document.getElementById('cookie-container');

new CookiePlugin({
  // notification,
  // modal,
  // settings,
  parentSelector
});