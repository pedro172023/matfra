    
    $(function () {
      var con=0,con2=0;
      var cl=$('#texto3').html("Es:")
      var cl2=$('#texto1').html("Es:")
      /*Audio*/
     var v = document.getElementsByTagName("audio")[0];
      var v1 = document.getElementsByTagName("audio")[1];
      var v2 = document.getElementsByTagName("audio")[2];
      $('#draga1').draggable({
        start: function () {
          v.play();
          this.css('-webkit-transform', 'scale(2)');
          this.css('opacity', '0.3');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
      
        }
      });
      $('#draga2').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
         
        }
      });
      $('#draga3').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
         
        }
      });
      $('#draga4').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
      
        }
      });
      $('#draga5').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          
        }
      });
      $('#draga6').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
       $('#draga7').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
        $('#draga8').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
         $('#draga9').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
          $('#draga10').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
        $('#draga11').draggable({
        start: function () {
          v.play();
           this.css('-webkit-transform', 'scale(2)');
           this.css('opacity', '0.3');
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
      $('#tierra').droppable({
        drop: function (e, dragEl, dropEl) {
          if(dragEl.attr('id')=='draga1' || dragEl.attr('id')=='draga2' || dragEl.attr('id')=='draga4'
            || dragEl.attr('id')=='draga5' || dragEl.attr('id')=='draga6' || dragEl.attr('id')=='draga7'
            || dragEl.attr('id')=='draga11') {
            dragEl.removeClass();
            dragEl.removeAttr("src");
            dragEl.removeAttr("id");
            con+=1;
             
             cl.html("Es: correcto "+con)
             v1.play();
             fel();

          }
          else {
            cl.html("Es: Incorrecto ");
            v2.play();
            
      }
            
         }   
      });
      $('#agua').droppable({
        drop: function (e, dragEl, dropEl) {
          if(dragEl.attr('id')=='draga3' || dragEl.attr('id')=='draga8' || dragEl.attr('id')=='draga9'
            || dragEl.attr('id')=='draga10') {
             
            dragEl.removeClass();
            dragEl.removeAttr("src");
            dragEl.removeAttr("id");
            con2+=1;
            
            cl2.html("Es: correcto "+con2);
            v1.play();
            fel();
          }
          else{cl2.html("Es: incorrecto ");
          v2.play();

        }
      }
      });
      function fel() {
        if (con==7 && con2==4) {
          alert('¡ Felicidades !')
          location.href="../nivel1.html"
        }
      }
    });