
// モーダル
$(function() {
  $('.openModal').on('click', function() {
    let target = $(this).data('modal-link');
    let modal = document.querySelector('.' + target);
    $(modal).toggleClass('is-show');
  });
  
    $('.bl_modal_bg,.bl_modal_closeBtn').on('click', function() {
    $(this).parents('.bl_modal').toggleClass('is-show');
  });
});