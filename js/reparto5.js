    $(function () {
      var c=0;
      var b=0;
      var a=0;
      var cl=$('#texto1').html("Llevas: ");
      var cl2=$('#texto3').html("Llevas: ");
      var cl3=$('#texto4').html("Llevas: ");
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
      $('#dro1').droppable({
        drop: function (e, dragEl, dropEl) {
          a+=1;
          cl.html("Llevas: "+a +" Verdura")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next()
        }
      });
      $('#dro2').droppable({
        drop: function (e, dragEl, dropEl) {
          c+=1;
          cl2.html("Llevas: "+c +" Verdura")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
      $('#dro3').droppable({
        drop: function (e, dragEl, dropEl) {
          b+=1;
          cl3.html("Llevas: "+b +" Verdura")
          dragEl.removeAttr('id');
          dragEl.removeAttr('src');
          next();
        }
      });
      function next() {
        if (a==3 && b==3 && c==3) {
          v1.play();
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){acierto()},2000);
        }
        if (a>1) {cl.html("Llevas: "+a+" Verduras")}
        if (b>1) {cl3.html("Llevas: "+b+" Verduras")}
        if (c>1) {cl2.html("Llevas: "+c+" Verduras")}
        if (a>3 || b>3 || c>3) { 
          $('#image').attr('src','../img/carga.gif');
          setTimeout(function(){error()},2000);
          
        }
      }
      function acierto(){
        $('#image').removeAttr('src')
        alert("hay 3 verduras para cada cesto: correcto");
          location.href='reparto6.html';
      }
      function error(){
        v2.play();
        $('#image').removeAttr('src')
        alert('Algo hiciste mal vuelve a intentarlo')
          location.reload();
      }
    });