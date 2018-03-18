    $(function () {
      var c=0;
      var b=0;
      var a=0;
      var cl=$('#texto1').html("Llevas: ")
      var cl2=$('#texto3').html("Llevas: ")
      var cl3=$('#texto4').html("Llevas: ")
      var v = document.getElementsByTagName("audio")[0];
      var v1 = document.getElementsByTagName("audio")[1];
      var v2 = document.getElementsByTagName("audio")[2];
      $('#draga1').draggable({
        start: function () {
          v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga2').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga3').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga4').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga5').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga6').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga7').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga8').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga9').draggable({
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
          cl.html("Llevas: "+a +" Insecto")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next()
        }
      });
      $('#drop2').droppable({
        drop: function (e, dragEl, dropEl) {
          c+=1;
          cl2.html("Llevas: "+c +" Insecto")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
      $('#drop3').droppable({
        drop: function (e, dragEl, dropEl) {
          b+=1;
          cl3.html("Llevas: "+b + " Insecto")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
      function next() {
        if (a==2 && b==2 && c==2) {
          v1.play();
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){acierto()},2000);
        }
        if (a>1) {cl.html("Llevas: "+a+" Insectos")}
          if (b>1) {cl3.html("Llevas: "+b+" Insectos")}
          if (c>1) {cl2.html("Llevas: "+c+" Insectos")}
        if (a>2 || b>2 || c>2) { 
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){error()},2000);
        }
      }
      function acierto(){
        $('#image').removeAttr('src')
       alert("hay 2 insectos para cada cesto: correcto");
          location.href='reparto7.html';
      }
      function error(){
          v2.play();
        $('#image').removeAttr('src')
        alert('Algo hiciste mal vuelve a intentarlo')
          location.reload();
      }
    });