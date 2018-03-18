  $(function(){
   var aciertos = 0;
   var fallos = 0;
   var cl=$("#pregunta");
    function comienza(){
      setTimeout(function(){uno()},1000);
    };
    function salir() {
      location.href='../nivel2.html';
    };
    function nuevo() {
      location.reload();
    }
    function uno() {
      cl.html("<p>1.- En la fracción 2/5 el numerador es:</p>"
         +"<p><input type='radio' name='p1' id='p11' value='A'>2.</input></p>"
         +"<p><input type='radio' name='p1' id='p12' value='B'>5.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
         if($("#p11").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        dos();
      });
    }
   function dos() {
      cl.html("<p>2.- En 3/4 el denominador es:</p> "
         +"<p><input type='radio' name='p2' id='p21' value='A'>3.</input></p>"
         +"<p><input type='radio' name='p2' id='p22' value='B'>4.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
        if($("#p22").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        tres();
      });
    }
   function tres() {
      cl.html("<p>3.- En 3/8 el denominador es:</p> "
         +"<p><input type='radio' name='p3' id='p31' value='A'>3.</input></p>"
         +"<p><input type='radio' name='p3' id='p32' value='B'>8.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
        if($("#p32").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        cuatro();
      });
    }
   function cuatro() {
      cl.html("<p>4.- 5/7 es una fracción:</p> "
         +"<p><input type='radio' name='p4' id='p41' value='A'>Propia.</input></p>"
         +"<p><input type='radio' name='p4' id='p42' value='B'>Impropia.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
        if($("#p41").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        cinco();        
      });
    }
   function cinco() {
      cl.html("<p>5.- 4/3 es una fracción:</p> "
         +"<p><input type='radio' name='p5' id='p51' value='A'>Propia.</input></p>"
         +"<p><input type='radio' name='p5' id='p52' value='B'>Impropia.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
        if($("#p52").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        seis();        
      });
    }
   function seis() {
      cl.html("<p>6.- Dos medios es una fracción:</p> "
         +"<p><input type='radio' name='p6' id='p61' value='A'>Propia.</input></p>"
         +"<p><input type='radio' name='p6' id='p62' value='B'>Impropia.</input></p>"
         +"<p><input type='radio' name='p6' id='p63' value='B'>Equivalente.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
      $("#siguiente").on('click',function () {
        if($("#p62").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        siete();        
      });
    }
   function siete() {
      cl.html("<p>7.- 2/4 y 1/2 son fracciones:</p> "
         +"<p><input type='radio' name='p7' id='p71' value='A'>Impropias.</input></p>"
         +"<p><input type='radio' name='p7' id='p72' value='B'>Equivalentes.</input></p>"
         +"<p><input type='radio' name='p7' id='p73' value='B'>No equivalentes.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
       $("#siguiente").on('click',function () {
        if($("#p72").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        ocho();        
      });     
    }
   function ocho() {
      cl.html("<p>8.- Tres novenos se representa como:</p> "
         +"<p><input type='radio' name='p8' id='p81' value='A'>9/3.</input></p>"
         +"<p><input type='radio' name='p8' id='p82' value='B'>3/9.</input></p>"
         +"<p><input type='radio' name='p8' id='p83' value='B'>12/9.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
       $("#siguiente").on('click',function () {
        if($("#p82").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        nueve();        
      }); 
    }
   function nueve() {
      cl.html("<p>9.- 1/3 es equivalente a:</p> "
         +"<p><input type='radio' name='p9' id='p91' value='A'>1/6.</input></p>"
         +"<p><input type='radio' name='p9' id='p92' value='B'>2/6.</input></p>"
         +"<p><input type='radio' name='p9' id='p93' value='B'>3/1.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
       $("#siguiente").on('click',function () {
        if($("#p92").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        diez();        
      }); 
    }
   function diez() {
      cl.html("<p>10.- Seis octavos y cuatro novenos son fracciones:</p> "
         +"<p><input type='radio' name='p9' id='p101' value='A'>Propias.</input></p>"
         +"<p><input type='radio' name='p9' id='p102' value='B'>Impropias.</input></p>"
         +"<p><input type='radio' name='p9' id='p103' value='B'>Equivalentes.</input></p>"
         +"<p><button id='siguiente'>Siguiente</button></p>");
       $("#siguiente").on('click',function () {
        if($("#p101").is(':checked')) {
            aciertos++; 
        }
        else {
            fallos++;
        }
        final();        
      }); 
    }
   function final() {
      cl.html("<p>Resultados:</p> "
         +"<p>Aciertos: "+aciertos+"</p>"
         +"<p>Fallos: "+fallos+"</p>"
         +"<p><button id='ok'>Ok</button></p>");
      $("#ok").on('click',nuevo)
    }
    $("#comenzar").on('click',comienza);
    $("#salir").on('click',salir);
  });