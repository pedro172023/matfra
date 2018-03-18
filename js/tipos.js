    $(function () {
      var con=0,con2=0;
      var cl=$('#texto1').html("Propia:")
      var cl2=$('#texto3').html("Impropia:")
      hay();
      $('#uno').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#dos').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#tres').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#cuatro').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#cinco').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
        }
      });
      $('#seis').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
        }
      });
       $('#siete').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
          
        }
      });
        $('#ocho').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
         $('#nueve').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
          $('#diez').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
      $('#propias').droppable({
        drop: function (e, dragEl, dropEl) {
          if(dragEl.attr('id')=='uno' || dragEl.attr('id')=='cuatro' || dragEl.attr('id')=='cinco'
            || dragEl.attr('id')=='ocho' || dragEl.attr('id')=='nueve') {
            dragEl.removeClass();
            dragEl.removeAttr("src");
            dragEl.removeAttr("id");
            con+=1;
             cl.html("Propia: correcto "+con)
          }
          else {cl.html("Propia: Incorrecto ")}
        }
      });
      $('#impropias').droppable({
        drop: function (e, dragEl, dropEl) {
           if(dragEl.attr('id')=='dos' || dragEl.attr('id')=='tres' || dragEl.attr('id')=='seis'
            || dragEl.attr('id')=='siete' || dragEl.attr('id')=='diez') {
            dragEl.removeClass();
            dragEl.removeAttr("src");
            dragEl.removeAttr("id");
            con2+=1;
            cl2.html("Impropia: correcto "+con2)
          }
          else{cl2.html("Impropia: incorrecto ")}
        }
      });
    function hay() {
        cl=$('#texto1').html("Propia:")
        cl2=$('#texto3').html("Impropia:")
      }
    });