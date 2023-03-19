$(document).ready(function () {
    $('[data-modal=consultation]').on('click', function () {
     $('.overlay, #consultation').fadeIn('fast');
  });

$('.modal_close').on('click', function () {
    $('overlay, #consultation').fadeOut('fast');
});
})


