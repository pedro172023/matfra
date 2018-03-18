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
        var cl=$("#texto");
        var img=$('#resultado');
        img.css('background-color', ' #fff')
        if(den!=null && num!=null){
        if(den==1){
          switch (num){
              case 1: 
                img.attr('src','../fracciones/unentero.svg');
                cl.html("La fracción es: \n Un entero");
                break;
              case 2:
                img.attr('src','../fracciones/dosenteros.svg');
                cl.html("La fracción es: \n Dos enteros");
                break;
              case 3: 
                img.attr('src','../fracciones/tresenteros.svg');
                cl.html("La fracción es: \n Tres enteros");
                break;
              case 4: 
                img.attr('src','../fracciones/cuatroenteros.svg');
                cl.html("La fracción es: \n Cuatro enteros");
                break;
              case 5: 
                img.attr('src','../fracciones/cincoenteros.svg');
                cl.html("La fracción es: \n Cinco enteros");
                break;
              case 6: 
                img.attr('src','../fracciones/seisenteros.svg');
                cl.html("La fracción es: \n Seis enteros");
                break;
              case 7: 
                img.attr('src','../fracciones/sieteenteros.svg');
                cl.html("La fracción es: \n Siete enteros");
                break;
              case 8: 
                img.attr('src','../fracciones/ochoenteros.svg');
                cl.html("La fracción es: \n Ocho enteros");
                break;
              case 9: 
                img.attr('src','../fracciones/nueveenteros.svg');
                cl.html("La fracción es: \n Nueve enteros");
                break;
              case 10: 
                img.attr('src','../fracciones/diezenteros.svg');
                cl.html("La fracción es: \n Diez enteros");
                break;
          }
        }
        if (den==2) {
         switch (num){
              case 2: 
                img.attr('src','../fracciones/dosmedios.svg');
                cl.html("La fracción es: \n Dos medios");
                break;
              case 3: 
                img.attr('src','../fracciones/tresmedios.svg');
                cl.html("La fracción es: \n Tres medios");
                break;
              case 4: 
                img.attr('src','../fracciones/cuatromedios.svg');
                cl.html("La fracción es: \n Cuatro medios");
                break;
              case 5: 
                img.attr('src','../fracciones/cincomedios.svg');
                cl.html("La fracción es: \n Cinco medios");
                break;
              case 6: 
                img.attr('src','../fracciones/seismedios.svg');
                cl.html("La fracción es: \n Seis medios");
                break;
              case 7: 
                img.attr('src','../fracciones/sietemedios.svg');
                cl.html("La fracción es: \n Siete medios");
                break;
              case 8: 
                img.attr('src','../fracciones/ochomedios.svg');
                cl.html("La fracción es: \n Ocho medios");
                break;
              case 9: 
                img.attr('src','../fracciones/nuevemedios.svg');
                cl.html("La fracción es: \n Nueve medios");
                break;
              case 10: 
                img.attr('src','../fracciones/diezmedios.svg');
                cl.html("La fracción es: \n Diez medios");
                break;
              default:{
                  if (num<2) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==3) {
          switch (num){
              case 3: 
                img.attr('src','../fracciones/trestercios.svg');
                cl.html("La fracción es: \n Tres tercios");
                break;
              case 4:
                img.attr('src','../fracciones/cuatrotercios.svg');
                cl.html("La fracción es: \n Cuatro tercios");
                break;
              case 5:
                img.attr('src','../fracciones/cincotercios.svg');
                cl.html("La fracción es: \n Cinco tercios");
                break;
              case 6:
                img.attr('src','../fracciones/seistercios.svg');
                cl.html("La fracción es: \n Seis tercios");
                break;
              case 7:
                img.attr('src','../fracciones/sietetercios.svg');
                cl.html("La fracción es: \n Siete tercios");
                break;
              case 8:
                img.attr('src','../fracciones/ochotercios.svg');
                cl.html("La fracción es: \n Ocho tercios");
                break;
              case 9:
                img.attr('src','../fracciones/nuevetercios.svg');
                cl.html("La fracción es: \n Nueve tercios");
                break;
              case 10:
                img.attr('src','../fracciones/dieztercios.svg');
                cl.html("La fracción es: \n Diez tercios");
                break;
              default:{
                  if (num<3) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==4) {
          switch (num){
              case 4: 
                img.attr('src','../fracciones/cuatrocuartos.svg');
                cl.html("La fracción es: \n Cuatro cuartos");
                break;
              case 5:
                img.attr('src','../fracciones/cincocuartos.svg');
                cl.html("La fracción es: \n Cinco cuartos");
                break;
              case 6:
                img.attr('src','../fracciones/seiscuartos.svg');
                cl.html("La fracción es: \n Seis cuartos");
                break;
              case 7:
                img.attr('src','../fracciones/sietecuartos.svg');
                cl.html("La fracción es: \n Siete cuartos");
                break;
              case 8:
                img.attr('src','../fracciones/ochocuartos.svg');
                cl.html("La fracción es: \n Ocho cuartos");
                break;
              case 9:
                img.attr('src','../fracciones/nuevecuartos.svg');
                cl.html("La fracción es: \n Nueve cuartos");
                break;
              case 10:
                img.attr('src','../fracciones/diezcuartos.svg');
                cl.html("La fracción es: \n Diez cuartos");
                break;
              default:{
                  if (num<4) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==5) {
          switch (num){
              case 5: 
                img.attr('src','../fracciones/cincoquintos.svg');
                cl.html("La fracción es: \n Cinco quintos");
                break;
              case 6:
                img.attr('src','../fracciones/seisquintos.svg');
                cl.html("La fracción es: \n Seis quintos");
                break;
              case 7:
                img.attr('src','../fracciones/sietequintos.svg');
                cl.html("La fracción es: \n Siete quintos");
                break;
              case 8:
                img.attr('src','../fracciones/ochoquintos.svg');
                cl.html("La fracción es: \n Ocho quintos");
                break;
              case 9:
                img.attr('src','../fracciones/nuevequintos.svg');
                cl.html("La fracción es: \n Nueve quintos");
                break;
              case 10:
                img.attr('src','../fracciones/diezquintos.svg');
                cl.html("La fracción es: \n Diez quintos");
                break;
              default:{
                  if (num<5) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==6) {
          switch (num){
              case 6:
                img.attr('src','../fracciones/seissextos.svg');
                cl.html("La fracción es: \n Seis sextos");
                break;
              case 7:
                img.attr('src','../fracciones/sietesextos.svg');
                cl.html("La fracción es: \n Siete sextos");
                break;
              case 8:
                img.attr('src','../fracciones/ochosextos.svg');
                cl.html("La fracción es: \n Ocho sextos");
                break;
              case 9:
                img.attr('src','../fracciones/nuevequintos.svg');
                cl.html("La fracción es: \n Nueve sextos");
                break;
              case 10:
                img.attr('src','../fracciones/diezsextos.svg');
                cl.html("La fracción es: \n Diez sextos");
                break;
              default:{
                  if (num<6) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==7) {
          switch (num){
              case 7:
                img.attr('src','../fracciones/sieteseptimos.svg');
                cl.html("La fracción es: \n Siete septimos");
                break;
              case 8:
                img.attr('src','../fracciones/ochoseptimos.svg');
                cl.html("La fracción es: \n Ocho septimos");
                break;
              case 9:
                img.attr('src','../fracciones/nueveseptimos.svg');
                cl.html("La fracción es: \n Nueve septimos");
                break;
              case 10:
                img.attr('src','../fracciones/diezseptimos.svg');
                cl.html("La fracción es: \n Diez septimos");
                break;
              default:{
                  if (num<7) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==8) {
          switch (num){
              case 8:
                img.attr('src','../fracciones/ochooctavos.svg');
                cl.html("La fracción es: \n Ocho octavos");
                break;
              case 9:
                img.attr('src','../fracciones/nueveoctavos.svg');
                cl.html("La fracción es: \n Nueve octavos");
                break;
              case 10:
                img.attr('src','../fracciones/diezoctavos.svg');
                cl.html("La fracción es: \n Diez octavos");
                break;
              default:{
                  if (num<8) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==9) {
          switch (num){
              case 9:
                img.attr('src','../fracciones/nuevenovenos.svg');
                cl.html("La fracción es: \n Nueve novenos");
                break;
              case 10:
                img.attr('src','../fracciones/dieznovenos.svg');
                cl.html("La fracción es: \n Diez novenos");
                break;
              default:{
                  if (num<9) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
        if (den==10) {
           switch (num){
              case 10:
                img.attr('src','../fracciones/diezdecimos.svg');
                cl.html("La fracción es: \n Diez décimos");
                break;
              default:{
                  if (num<10) {
                    img.attr('src','../images/carita2.png');
                    cl.html("La fracción es: \n Propia");
                  }
              }
          }
        }
       }
        else{
          img.attr('src','');
          cl.html("La fracción es: \n");
        }
      };
      $("#nueva").on('click',function(){
        location.reload()
      });
});