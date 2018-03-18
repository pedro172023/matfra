    $(function () {
      var a=0;
      var c=0;
      var cl=$('#texto1').html("Llevas: ")
      var cl2=$('#texto3').html("Llevas: ")
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
      $('#draga10').draggable({
        start: function () {
           v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga11').draggable({
        start: function () {
           v.play();
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#draga12').draggable({
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
          cl.html("Llevas: "+a + " Dulce")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next()
        }
      });
      $('#drop2').droppable({
        drop: function (e, dragEl, dropEl) {
          c+=1;
          cl2.html("Llevas: "+c +" Dulce");
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
      function next() {
        if (a==6 && c==6) {
          v1.play();
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){acierto()},2000);

        }
          if (a>1) {cl.html("Llevas: "+a+" Dulces")}
          if (c>1) {cl2.html("Llevas: "+c+" Dulces")}
        if (a>6 || c>6) { 
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){error()},2000);
        }
      }
      function acierto(){
        $('#image').removeAttr('src')
          alert("hay 6 dulces para cada cesto: correcto");
          location.href='reparto10.html';
      }
      function error(){
        v2.play();
        $('#image').removeAttr('src')
        alert('Algo hiciste mal vuelve a intentarlo')
          location.reload();
      }
    });