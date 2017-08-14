var li = document.querySelectorAll('.characteristic');
for (var i = 0; i < li.length; i++) {
    (function(a){
        a.onclick = function() {
            for (var j = 0; j < li.length; j++) {
                li[j].classList.remove("active");
            }
            a.classList.add("active");
        }
    }(li[i]));
}