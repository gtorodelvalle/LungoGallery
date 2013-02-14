Lungo.init({
  data: 'Lungo Gallery app',
  version: '2.0',
  resources: []
});

$$('#latest-apps li').swipeLeft(function (ev) {
    $$(ev.target).closest('li').addClass("light");
    console.log("Read!");
});

$$('#latest-apps li').swipeRight(function (ev) {
    $$(ev.target).closest('li').removeClass("light");
    console.log("Unread!");
});
