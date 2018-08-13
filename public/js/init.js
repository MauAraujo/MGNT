(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(document).ready(function(){
        $('.materialboxed').materialbox();
    });
    $('#article-body').val('');
      M.textareaAutoResize($('#article-body'));
      $(document).ready(function(){
          $('.datepicker').datepicker();
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space
