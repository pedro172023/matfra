  $(function () {
    var url='';
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
/**************/
      $('#c1').droppable({
        drop: function (e, dragEl, dropEl) {
          if (dragEl.attr('id')=='cuatro') {
            url=dragEl.attr('src');
            $(this).attr('src',url);
            dragEl.removeAttr('src');
            dragEl.removeAttr('id');
            dragEl.removeClass();
            alert('correcto')
          }
          else{alert('incorrecto')}
        }
      });
      $('#c2').droppable({
        drop: function (e, dragEl, dropEl) {
         if (dragEl.attr('id')=='uno') {
            url=dragEl.attr('src');
            $(this).attr('src',url);
            dragEl.removeAttr('src');
            dragEl.removeAttr('id');
            dragEl.removeClass();
            alert('correcto')
          }
          else{alert('incorrecto')}
        }
      });
      $('#c3').droppable({
        drop: function (e, dragEl, dropEl) {
         if (dragEl.attr('id')=='dos') {
            url=dragEl.attr('src');
            $(this).attr('src',url);
            dragEl.removeAttr('src');
            dragEl.removeAttr('id');
            dragEl.removeClass();
            alert('correcto')
          }
          else{alert('incorrecto')}
        }
      });
      $('#c4').droppable({
        drop: function (e, dragEl, dropEl) {
          if (dragEl.attr('id')=='tres') {
            url=dragEl.attr('src');
            $(this).attr('src',url);
            dragEl.removeAttr('src');
            dragEl.removeAttr('id');
            dragEl.removeClass();
            alert('correcto')
          }
          else{alert('incorrecto')}
        }
      });
      $('#c5').droppable({
        drop: function (e, dragEl, dropEl) {
          if (dragEl.attr('id')=='cinco') {
            url=dragEl.attr('src');
            $(this).attr('src',url);
            dragEl.removeAttr('src');
            dragEl.removeAttr('id');
            dragEl.removeClass();
            alert('correcto')
          }
          else{alert('incorrecto')}
        }
      });
});