export default () => {
  $(".slider_imageInterior_heart").mouseover(function (e) {
    $(e.currentTarget.children).css("stroke", "#DD4646");
  });
  $(".slider_imageInterior_heart").mouseleave(function (e) {
    $(e.currentTarget.children).css("stroke", "black");
  });
  $(".slider_imageInterior_heart").click(function (e) {
    $(e.currentTarget.children).css("stroke", "#DD4646");
  });
};
