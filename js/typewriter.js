(()=>{
    var i = 0;
    var j = 0;
    var txt = 'TENDRY TSITOHAINA'; /* The text */
    var txt2 = 'Developpeur Web fullstack';
    var speed = 50; /* The speed/duration of the effect in milliseconds */

    function typeWriter2(){
        
        if (j < txt2.length) {
            document.getElementById("dev").innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, 70);
        }
    }
    function typeWriter(){
        if (i < txt.length) { 
            document.getElementById("nom").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typeWriter2()
        }
    }
    
    typeWriter();

})();