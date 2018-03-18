  $(function () {
    var c;
    var num;
    var den;
  var v = document.getElementsByTagName("audio")[0];
      var v1 = document.getElementsByTagName("audio")[1];
     // var v2 = document.getElementsByTagName("audio")[2];
      $('#uno').draggable({
        start: function () {
          v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=1;
        }
      });
      $('#dos').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=2;
        }
      });
      $('#tres').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=3;
        }
      });
      $('#cuatro').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=4;
        }
      });
      $('#cinco').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=5;
        }
      });
      $('#seis').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=6;
        }
      });
      $('#siete').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=7;
        }
      });
      $('#ocho').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=8;
        }
      });
      $('#nueve').draggable({
        start: function () {
           v.play();
          this.css('-webkit-transform', 'scale(2)');
        },
        stop: function () {
          this.css('-webkit-transform', 'scale(1)');
          c=9;
        }
      });
      $('#diez').draggable({
        start: function () {
           v.play();
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
              v1.play();
                img.attr('src','../fracciones/unentero.svg');
                cl.html("La fracción es: \n Un entero");
                break;
              default:{
                  if (num>1) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==2) {
         switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unmedio.png');
                cl.html("La fracción es: \n Un medio");
                break;
              case 2: 
              v1.play();
                img.attr('src','../fracciones/dosmedios.svg');
                cl.html("La fracción es: \n Dos medios");
                break;
              default:{
                  if (num>2) {
                   // v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==3) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/untercio.svg');
                cl.html("La fracción es: \n Un tercio");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dostercios.svg');
                cl.html("La fracción es: \n Dos tercios");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/trestercios.svg');
                cl.html("La fracción es: \n Tres tercios");
                break;
              default:{
                  if (num>3) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==4) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/uncuarto.svg');
                cl.html("La fracción es: \n Un cuarto");
                break;
              case 2:
                v1.play();
                img.attr('src','../fracciones/doscuartos.svg');
                cl.html("La fracción es: \n Dos cuartos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/trescuartos.svg');
                cl.html("La fracción es: \n tres cuartos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatrocuartos.svg');
                cl.html("La fracción es: \n Cuatro cuartos");
                break;
              default:{
                  if (num>4) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==5) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unquinto.svg');
                cl.html("La fracción es: \n Un quinto");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dosquintos.svg');
                cl.html("La fracción es: \n Dos quintos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tresquintos.svg');
                cl.html("La fracción es: \n Tres quintos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatroquintos.svg');
                cl.html("La fracción es: \n Cuatro quintos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cincoquintos.svg');
                cl.html("La fracción es: \n Cinco quintos");
                break;
              default:{
                  if (num>5) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==6) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unsexto.svg');
                cl.html("La fracción es: \n Un sexto");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dossextos.svg');
                cl.html("La fracción es: \n Dos sextos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tressextos.svg');
                cl.html("La fracción es: \n Tres sextos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatroquintos.svg');
                cl.html("La fracción es: \n Cuatro sextos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cuatrosextos.svg');
                cl.html("La fracción es: \n Cinco sextos");
                break;
              case 6:
              v1.play();
                img.attr('src','../fracciones/seissextos.svg');
                cl.html("La fracción es: \n Seis sextos");
                break;
              default:{
                  if (num>6) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==7) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unseptimo.svg');
                cl.html("La fracción es: \n Un septimo");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dosseptimos.svg');
                cl.html("La fracción es: \n Dos septimos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tresseptimos.svg');
                cl.html("La fracción es: \n Tres septimos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatroseptimos.svg');
                cl.html("La fracción es: \n Cuatro septimos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cincoseptimos.svg');
                cl.html("La fracción es: \n Cinco septimos");
                break;
              case 6:
              v1.play();
                img.attr('src','../fracciones/seisseptimos.svg');
                cl.html("La fracción es: \n Seis septimos");
                break;
              case 7:
              v1.play();
                img.attr('src','../fracciones/sieteseptimos.svg');
                cl.html("La fracción es: \n Siete septimos");
                break;
              default:{
                  if (num>7) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==8) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unoctavo.svg');
                cl.html("La fracción es: \n Un octavo");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dosoctavos.svg');
                cl.html("La fracción es: \n Dos octavos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tresoctavos.svg');
                cl.html("La fracción es: \n Tres octavos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatrooctavos.svg');
                cl.html("La fracción es: \n Cuatro octavos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cincooctavos.svg');
                cl.html("La fracción es: \n Cinco octavos");
                break;
              case 6:
              v1.play();
                img.attr('src','../fracciones/seisoctavos.svg');
                cl.html("La fracción es: \n Seis octavos");
                break;
              case 7:
              v1.play();
                img.attr('src','../fracciones/sieteoctavos.svg');
                cl.html("La fracción es: \n Siete octavos");
                break;
              case 8:
              v1.play();
                img.attr('src','../fracciones/ochooctavos.svg');
                cl.html("La fracción es: \n Ocho octavos");
                break;
              default:{
                  if (num>8) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==9) {
          switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/unnoveno.svg');
                cl.html("La fracción es: \n Un noveno");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dosnovenos.svg');
                cl.html("La fracción es: \n Dos novenos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tresnovenos.svg');
                cl.html("La fracción es: \n Tres novenos");
                break;
              case 4:
              v1.play();
                img.attr('src','fracciones/cuatronovenos.svg');
                cl.html("La fracción es: \n Cuatro novenos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cinconovenos.svg');
                cl.html("La fracción es: \n Cinco novenos");
                break;
              case 6:
              v1.play();
                img.attr('src','../fracciones/seisnovenos.svg');
                cl.html("La fracción es: \n Seis novenos");
                break;
              case 7:
              v1.play();
                img.attr('src','../fracciones/sietenovenos.svg');
                cl.html("La fracción es: \n Siete novenos");
                break;
              case 8:
              v1.play();
                img.attr('src','../fracciones/ochonovenos.svg');
                cl.html("La fracción es: \n Ocho novenos");
                break;
              case 9:
              v1.play();
                img.attr('src','../fracciones/nuevenovenos.svg');
                cl.html("La fracción es: \n Nueve novenos");
                break;
              default:{
                  if (num>9) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
                  }
              }
          }
        }
        if (den==10) {
           switch (num){
              case 1: 
              v1.play();
                img.attr('src','../fracciones/undecimo.svg');
                cl.html("La fracción es: \n Un décimo");
                break;
              case 2:
              v1.play();
                img.attr('src','../fracciones/dosdecimos.svg');
                cl.html("La fracción es: \n Dos décimos");
                break;
              case 3:
              v1.play();
                img.attr('src','../fracciones/tresdecimos.svg');
                cl.html("La fracción es: \n Tres décimos");
                break;
              case 4:
              v1.play();
                img.attr('src','../fracciones/cuatrodecimos.svg');
                cl.html("La fracción es: \n Cuatro décimos");
                break;
              case 5:
              v1.play();
                img.attr('src','../fracciones/cincodecimos.svg');
                cl.html("La fracción es: \n Cinco décimos");
                break;
              case 6:
              v1.play();
                img.attr('src','../fracciones/seisdecimos.svg');
                cl.html("La fracción es: \n Seis décimos");
                break;
              case 7:
              v1.play();
                img.attr('src','../fracciones/sietedecimos.svg');
                cl.html("La fracción es: \n Siete décimos");
                break;
              case 8:
              v1.play();
                img.attr('src','../fracciones/ochodecimos.svg');
                cl.html("La fracción es: \n Ocho décimos");
                break;
              case 9:
              v1.play();
                img.attr('src','../fracciones/nuevedecimos.svg');
                cl.html("La fracción es: \n Nueve novenos");
                break;
              case 10:
              v1.play();
                img.attr('src','../fracciones/diezdecimos.svg');
                cl.html("La fracción es: \n Diez décimos");
                break;
              default:{
                  if (num>9) {
                    //v2.play();
                    img.attr('src','../images/caritaaa.png');
                    cl.html("La fracción es: \n Impropia");
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