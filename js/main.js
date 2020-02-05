const li = $('.li');
const input = $('.input');
const ul = $('.ul');
input.value ="";
const btn = $('.btn').on('click', function(evt) {
    console.log(evt, 'FUUUUUUCK');
    li.textContent = input.value;
    // $('body').append($newLink);
    $('.ul').append(li);
  });
const deleteBtn = $('.deleteBtn').on('click', function(evt){
    console.log(evt,'FUUUUUUCK 2');
})
// const li = $('li');
// const input = $('input');


