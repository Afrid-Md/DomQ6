alert('Hello');
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

itemList.addEventListener('click', removeItem);

function removeItem(e){
       if(e.target.classList.contains('delete')){
              if(confirm('Are you sure to delete')){
                     var li=e.target.parentElement;
                     itemList.removeChild(li);
              }
       }
}