    $(function () {
      var c=0;
      var a=0;
      var cl=$('#texto1').html("Llevas: ");
      var cl2=$('#texto3').html("Llevas: ");
      var v = document.getElementsByTagName("audio")[0];
      var v1 = document.getElementsByTagName("audio")[1];
      var v2 = document.getElementsByTagName("audio")[2];
      $('#drag1').draggable({
        start: function () {
          v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#drag2').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)'); 
        }
      });
      $('#drag3').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#drag4').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#drag5').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#drag6').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#drop').droppable({
        drop: function (e, dragEl, dropEl) {
          a+=1;
          cl.html("Llevas: "+a + " Fruta")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next()
        }
      });
      $('#drop2').droppable({
        drop: function (e, dragEl, dropEl) {
          c+=1;
          cl2.html("Llevas: "+c + " Fruta")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
       function next() {
        if(a==3 && c==3) {
          v1.play();
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){acierto()},2000);
        }
        if (a>1) {cl.html("Llevas: "+a+" Frutas")}
          if (c>1) {cl2.html("Llevas: "+c+" Frutas")}
        if (a>3 || c>3) { 
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){error()},2000);
        }
      }
      function acierto(){
        $('#image').removeAttr('src')
        alert("hay 3  frutas para cada cesto: correcto");
        location.href='reparto4.html';
      }
      function error(){
        v2.play();
        $('#image').removeAttr('src')
        alert('Algo hiciste mal vuelve a intentarlo')
        location.reload();
      }
    });