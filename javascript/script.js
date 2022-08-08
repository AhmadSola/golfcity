btn.onclick = function(){
    list.classList.toggle('heightlist');
}
document.onclick = function(e){
    if(e.target.id != 'btn')
    {
        list.classList.remove('heightlist');
    }
}
