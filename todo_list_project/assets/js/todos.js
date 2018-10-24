// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
  $(this).toggleClass('finished');
});

// Remove todos that have been deleted
$('ul').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){ // select parent element
    $(this).remove(); // Remove parent li
  });
  event.stopPropagation();
});

// Listen for input todos
$('input[type="text"]').keypress(function(event){
  if (event.which === 13){
    var toDoText = $(this).val();
    $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> '+ toDoText+'</li>');
    $(this).val('');
  }
});

$('.fa-plus-circle').click(function(){
  $('input[type="text"]').fadeToggle();
})