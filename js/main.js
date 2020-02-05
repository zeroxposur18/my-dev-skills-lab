// const li = $('.li');
// const input = $('.input');
// const ul = $('.ul');
$('#btn').click(function(evt){
    console.log($('.input'));
    var newRow = `<tr>
                    <td><button class ="deleteBtn">Remove</button></td>
                    <td>${$('.input')[0].value}</td>
                    </tr>`
    $('#skills tbody').append(newRow);
    // $('body').append($newLink);
 
});


$('#skills tbody').on('click', 'button', function() {
    var row = $(this).closest('tr');
    row.fadeOut(500, function() {
      row.remove();
    })})


