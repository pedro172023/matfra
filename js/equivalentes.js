  $(function () {
    var c;
    var num;
    var den;
      $('#uno').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=1;
        }
      });
      $('#dos').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=2;
        }
      });
      $('#tres').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=3;
        }
      });
      $('#cuatro').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=4;
        }
      });
      $('#cinco').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=5;
        }
      });
      $('#seis').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=6;
        }
      });
      $('#siete').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=7;
        }
      });
      $('#ocho').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=8;
        }
      });
      $('#nueve').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=9;
        }
      });
      $('#diez').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=10;
        }
      });
/**************/
$('#uno2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=1;
        }
      });
      $('#dos2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=2;
        }
      });
      $('#tres2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=3;
        }
      });
      $('#cuatro2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=4;
        }
      });
      $('#cinco2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=5;
        }
      });
      $('#seis2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=6;
        }
      });
      $('#siete2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=7;
        }
      });
      $('#ocho2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=8;
        }
      });
      $('#nueve2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=9;
        }
      });
      $('#diez2').draggable({
        start: function () {
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=10;
        }
      });
/**************/
      $('#numerador').droppable({
        drop: function (e, dragEl, dropEl) {
          num=c;
          dropEl.css('background-color', ' #fff');
          dragEl.css('-webkit-transform', 'scale(2)');
          mostrar();
          return true;
        }
      });
      $('#denominador').droppable({
        drop: function (e, dragEl, dropEl) {
          den=c;
          dropEl.css('background-color', ' #fff');
          dragEl.css('-webkit-transform', 'scale(2)')
          mostrar();
          setTimeout('location.reload();',1500);
          return true;
        }
      });
      function mostrar(){
        var str="";
        var str2="";
        var num2=num*2;
        var den2=den*2;
        var res=$('#resultado');
        var cl=$('#texto');
        res.css('background-color', ' #fff');
        res.css('color','#000');
        if (num !=null && den != null) {
          switch(num2){
            case 1:str="Un"; break;
            case 2:str="Dos"; break;
            case 3:str="Tres"; break;
            case 4:str="Cuatro"; break;
            case 5:str="Cinco"; break;
            case 6:str="Seis"; break;
            case 7:str="Siete"; break;
            case 8:str="Ocho"; break;
            case 9:str="Nueve"; break;
            case 10:str="Diez"; break;
            case 11:str="Once"; break;
            case 12:str="Doce"; break;
            case 13:str="Trece"; break;
            case 14:str="Catorce"; break;
            case 15:str="Quince"; break;
            case 16:str="Dieciséis"; break;
            case 17:str="Diecisiete"; break;
            case 18:str="Dieciocho"; break;
            case 19:str="Diecinueve"; break;
            case 20:str="Veinte"; break;
          }
          switch(den2){
            case 1:
              if (num2>1) {str2="Enteros";}
               else {str2="Entero";}
              break;
            case 2:
              if (num2>1) {str2="Medios";}
               else {str2="Medio";}
              break;
            case 3:
              if (num2>1) {str2="Tercios";}
               else {str2="Tercio";}
              break;
            case 4:
              if (num2>1) {str2="Cuartos";}
               else {str2="Cuarto";}
              break;
            case 5:
              if (num2>1) {str2="Quintos";}
               else {str2="Quinto";}
              break;
            case 6:
              if (num2>1) {str2="Sextos";}
               else {str2="Sexto";}
              break;
            case 7:
              if (num2>1) {str2="Septimos";}
               else {str2="Septimo";}
              break;
            case 8:
              if (num2>1) {str2="Octavos";}
               else {str2="Octavo";}
              break;
            case 9:
              if (num2>1) {str2="Novenos";}
               else {str2="Noveno";}
              break;
            case 10:
              if (num2>1) {str2="Decimos";}
               else {str2="Decimo";}
              break;
            case 12:str2="Doceavos";break;
            case 14:str2="Catorceavos";break;
            case 16:str2="Dieciséisavos";break;
            case 18:str2="Dieciochoavos";break;
            case 20:str2="Veintiavos";break;
          }
          res.html(num2+"/"+den2);
          cl.html("Equivalente a: "+str+" "+str2);
        }
      };
      $("#nueva").on('click',function(){
        location.reload()
      });
});