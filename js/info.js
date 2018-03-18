    $(function () {
      var cl2=$('#texto1').html("")
      $('#draga1').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
          cl2.html("")
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
      
        }
      });
      $('#draga2').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
         
        }
      });
      $('#draga3').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
         this.css('-webkit-transform', 'scale(1)');
         
        }
      });
      $('#draga4').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
      
        }
      });
      $('#draga5').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          
        }
      });
      $('#draga6').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
       $('#draga7').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
        $('#draga8').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
         $('#draga9').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
          $('#draga10').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
        $('#draga11').draggable({
        start: function () {
           this.css('-webkit-transform', 'scale(2)');
           cl2.html("")
        },
        stop: function () {
           this.css('-webkit-transform', 'scale(1)');
           
        }
      });
      $('#agua').droppable({
        drop: function (e, dragEl, dropEl) {
          var id=dragEl.attr('id');
          switch(id){
            case 'draga1':cl2.html("La fracción es Tres medios y es impropia");break;
            case 'draga2':cl2.html("La fracción es Un medio y es propia");break;
            case 'draga3':cl2.html("La fracción es Ocho quintos y es impropia");break;
            case 'draga4':cl2.html("La fracción es Un tercio y es propia");break;
            case 'draga5':cl2.html("La fracción es Cuatro medios y es impropia");break;
            case 'draga6':cl2.html("La fracción es Cuatro quintos y es propia");break;
            case 'draga7':cl2.html("La fracción es Siete medios y es impropia");break;
            case 'draga8':cl2.html("La fracción es Cinco octavos y es propia");break;
            case 'draga9':cl2.html("La fracción es Diez novenos y es impropia");break;
            case 'draga10':cl2.html("La fracción es Dos octavos y es propia");break;
            case 'draga11':cl2.html("La fracción es Cuatro tercios y es impropia");break;

          }
        }
      });
    });