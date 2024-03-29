/* Dore Theme Select & Initializer Script 

Table of Contents

01. Css Loading Util
02. Theme Selector And Initializer
*/

/* 01. Css Loading Util */
function loadStyle(href, callback) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  if (callback) {
    link.onload = function () {
      callback();
    };
  }
  var mainCss = $(head).find('[href$="main.css"]');
  if (mainCss.length !== 0) {
    mainCss[0].before(link);
  } else {
    head.appendChild(link);
  }
}

/* 02. Theme Selector, Layout Direction And Initializer */
(function ($) {
  if ($().dropzone) {
    Dropzone.autoDiscover = false;
  }

  var themeColorsDom = /*html*/`
  <div class="theme-colors">
    <div class="p-4">
    <p class="text-muted mb-2">Light Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.light.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.light.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.light.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.light.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.light.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between mb-4">
      <a href="#" data-theme="dore.light.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
      <a href="#" data-theme="dore.light.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
      <a href="#" data-theme="dore.light.redruby.min.css" class="theme-color theme-color-redruby"></a>
      <a href="#" data-theme="dore.light.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
      <a href="#" data-theme="dore.light.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
    </div>
    <p class="text-muted mb-2">Dark Theme</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.dark.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.dark.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.dark.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.dark.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.dark.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between">
    <a href="#" data-theme="dore.dark.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
    <a href="#" data-theme="dore.dark.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
    <a href="#" data-theme="dore.dark.redruby.min.css" class="theme-color theme-color-redruby"></a>
    <a href="#" data-theme="dore.dark.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
    <a href="#" data-theme="dore.dark.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
  </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Border Radius</p>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="roundedRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="rounded">
      <label class="custom-control-label" for="roundedRadio">Rounded</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="flatRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="flat">
      <label class="custom-control-label" for="flatRadio">Flat</label>
    </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">Direction</p>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="ltrRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="ltr">
    <label class="custom-control-label" for="ltrRadio">Ltr</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="rtlRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="rtl">
    <label class="custom-control-label" for="rtlRadio">Rtl</label>
  </div>

`;

  $("body").append(themeColorsDom);


  /* Default Theme Color, Border Radius and  Direction */
  var theme = "dore.light.bluenavy.min.css";
  var direction = "ltr";
  var radius = "rounded";

  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("dore-theme-color")) {
      theme = localStorage.getItem("dore-theme-color");
    } else {
      localStorage.setItem("dore-theme-color", theme);
    }
    if (localStorage.getItem("dore-direction")) {
      direction = localStorage.getItem("dore-direction");
    } else {
      localStorage.setItem("dore-direction", direction);
    }
    if (localStorage.getItem("dore-radius")) {
      radius = localStorage.getItem("dore-radius");
    } else {
      localStorage.setItem("dore-radius", radius);
    }
  }

  $(".theme-color[data-theme='" + theme + "']").addClass("active");
  $(".direction-radio[data-direction='" + direction + "']").attr("checked", true);
  $(".radius-radio[data-radius='" + radius + "']").attr("checked", true);
  $("#switchDark").attr("checked", theme.indexOf("dark") > 0 ? true : false);

  loadStyle("css/" + theme, onStyleComplete);
  function onStyleComplete() {
    setTimeout(onStyleCompleteDelayed, 300);
  }

  function onStyleCompleteDelayed() {
    $("body").addClass(direction);
    $("html").attr("dir", direction);
    $("body").addClass(radius);
    $("body").dore();
  }

  $("body").on("click", ".theme-color", function (event) {
    event.preventDefault();
    var dataTheme = $(this).data("theme");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-theme-color", dataTheme);
      window.location.reload();
    }
  });

  $("input[name='directionRadio']").on("change", function (event) {
    var direction = $(event.currentTarget).data("direction");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-direction", direction);
      window.location.reload();
    }
  });

  $("input[name='radiusRadio']").on("change", function (event) {
    var radius = $(event.currentTarget).data("radius");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-radius", radius);
      window.location.reload();
    }
  });

  $("#switchDark").on("change", function (event) {
    var mode = $(event.currentTarget)[0].checked ? "dark" : "light";
    if (mode == "dark") {
      theme = theme.replace("light", "dark");
    } else if (mode == "light") {
      theme = theme.replace("dark", "light");
    }
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-theme-color", theme);
      window.location.reload();
    }
  });

  $(".theme-button").on("click", function (event) {
    event.preventDefault();
    $(this)
      .parents(".theme-colors")
      .toggleClass("shown");
  });

  $(document).on("click", function (event) {
    if (
      !(
        $(event.target)
          .parents()
          .hasClass("theme-colors") ||
        $(event.target)
          .parents()
          .hasClass("theme-button") ||
        $(event.target).hasClass("theme-button") ||
        $(event.target).hasClass("theme-colors")
      )
    ) {
      if ($(".theme-colors").hasClass("shown")) {
        $(".theme-colors").removeClass("shown");
      }
    }
  });
})(jQuery);

//$(document).ready(function()
//   {
//      $("#exampleModalLeft").modal("show");
//   });
var listaProductos = [
  {
  "id":"1",
  "categoria" : "cat1",
  "nombre": "Ventana de aluminio",
  "imagen": "img/cards/thumb-1.jpg",
  },
  {
    "id":"2",
    "categoria" : "cat2",
    "nombre": "Showerdoor de aluminio",
    "imagen":"img/cards/thumb-2.jpg",
  }
                    ]

function llenarCat(){

    // Recorrer array de los productos e insertarlo en modal.
    var i=1;                  
    listaProductos.forEach(function(Product){


        var insert = '<div class="position-relative">'+
        '<a onclick="agregarProducto('+Product.id+')"><img class="card-img-top" src="img/cards/p'+i+'.jpg"'+
        'alt="Card image cap"></a>'+
        '<span class="badge badge-pill badge-theme-1 position-absolute badge-top-left">Producto '+i+'</span>'+
          '</div>'+
         '<div class="col-10">'+
         '<a onclick="agregarProducto('+Product.id+')">'+
         '<p class="list-item-heading mb-4 pt-1">'+Product.nombre+'</p>'+
         '</a>'+

         '</div>'
        var elements = document.getElementById('insertProduct')



        elements.insertAdjacentHTML('beforeend', insert);
       i++;

      
    });

  }
llenarCat();
function abrirCat(cat){
  //Cerrar modal cat

  //Abrir modal productos de categoría seleccionada.

  document.getElementById("titulo").innerHTML = cat;

  $('#exampleModalLeft').modal('hide');
  $('#exampleModalLeft').on('hidden.bs.modal', function(e){
    $('#exampleModalLeft').modal('dispose');
    $('#'+cat+'').modal('show');


  })




}

var listaCarro = []
var contadorCarro = 0;
function añadirCarro(producto){
  contadorCarro++;
  //Añadir producto seleccionado a la lista del carro
  listaCarro.push(
    {
      "id":contadorCarro,
      "nombre": producto,
      "detalle":{
        "dimensionX":"",
        "dimensionY":"",
        "tipo":"",
        "color":""
      }


    }
  );

  //Mostrar al usuario el producto seleccionado.
  var insertProduct = '<div id="'+listaCarro[listaCarro.length -1].id+'"'+
  ' class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">'+

    '<span class="align-middle d-inline-block" >'+listaCarro[listaCarro.length - 1].nombre+'</span>'+
    '<p id="estado'+listaCarro[listaCarro.length -1].id+'" class="mb-0 text-muted text-small w-15 w-xs-100"><b>Pendiente de componentes.</b></p>'+ 
    '<span class="badge badge-pill badge-secondary" onclick="verComponentes('+listaCarro[listaCarro.length -1].id+')">COMPONENTES</span>'+
    '<span class="badge badge-pill badge-theme-2 badge-secondary" onclick="eliminarProducto('+listaCarro[listaCarro.length -1].id+')">ELIMINAR</span>'+

  '</div>' 
  var elements = document.getElementById('form-step-1')



  elements.insertAdjacentHTML('beforeend', insertProduct);
  //console.log(listaCarro[listaCarro.length - 1].nombre);
}

function agregarProducto(pId){
  pId = pId -1;
  cat = listaProductos[pId].categoria;


  document.getElementById('cerrarModalcat').click();
  añadirCarro(listaProductos[pId].nombre);
  sendButton('true');

}
function verComponentes(pId){
  var validator = $("#componentes").validate();
  validator.resetForm();
  let index = listaCarro.findIndex(el=> el.id == pId);
  // Enviar dimensiones del producto a document
  document.getElementById("dimensionY").value = listaCarro[index].detalle.dimensionY;
  document.getElementById("dimensionX").value = listaCarro[index].detalle.dimensionX;
  // Enviar tipo de ventana a document
  if (document.getElementById(listaCarro[index].detalle.tipo) == null){
    if (document.getElementById("L25").checked == true){
          document.getElementById("L25").checked = false;
    }else if(document.getElementById("L20").checked == true){
      document.getElementById("L20").checked = false;

    }else if(document.getElementById("L15").checked == true){
      document.getElementById("L15").checked = false;

    }

  }else document.getElementById(listaCarro[index].detalle.tipo).checked = true;

  // Enviar color a document
    if (listaCarro[index].detalle.color == null){
      document.getElementById('color').value = '';
    }else document.getElementById('color').value = listaCarro[index].detalle.color;
    //alert(document.getElementById('color').value);
    //const changeSelected = (e) => {
      //const $select = document.querySelector('#color');
      //$select.value = listaCarro[index].detalle.color;
  //};

  //  Limitar opciones
  nombreSeleccion = listaCarro[index].nombre;
  if(nombreSeleccion == "Ventana de aluminio"){
    document.getElementById("L25").disabled = false;

    $('input[type=radio][name=gridRadios]').change(function() {
      if (this.value == 'L25') {
        document.getElementById("Mate").disabled = true;
        document.getElementById("Titanio").disabled = false;


      }
      else if (this.value == 'L20') {
        document.getElementById("Mate").disabled = true;
        document.getElementById("Titanio").disabled = false;
      }
      else if (this.value == 'L15') {
        document.getElementById("Mate").disabled = false;
        document.getElementById("Titanio").disabled = true;
      }
  });
}else if(nombreSeleccion =="Showerdoor de aluminio"){
  document.getElementById("L25").disabled = true;
  document.getElementById("Mate").disabled = false;
  document.getElementById("Titanio").disabled = false;

  $('input[type=radio][name=gridRadios]').change(function() {
    if (this.value == 'L15') {
      document.getElementById("Titanio").disabled = true;
    }
    else if(this.value =='L20'){
      document.getElementById("Titanio").disabled = false;


    }
  })
}
  // Guardar id producto en botón guardar
  var tipo = document.querySelector('#guardar');

  tipo.setAttribute("onclick"," guardarComponentes("+index+")");
  
  $('#exampleModalRight').modal('show');

  



}

function verificarComponentes(){
  var totalComponentes  = listaCarro.length;
  var totalAgregados = 0;
  listaCarro.forEach(function(Product){
    if(Product.detalle.dimensionX !== "" && Product.detalle.dimensionY !== "" && Product.detalle.color !== "" && Product.detalle.tipo !== ""){
      totalAgregados++;

    }
  })
  if(totalComponentes == totalAgregados && totalComponentes > 0){
    sendButton(false);
  }else if (totalAgregados == 0){sendButton(true)}
   else if (totalComponentes > totalAgregados){sendButton(true)}

    
}
function sendButton(state){
  document.getElementById("sendButton").disabled = state;
}
function guardarComponentes(index){


  if ($("#componentes").valid()){
  listaCarro[index].detalle.dimensionX= document.getElementById("dimensionX").value;
  listaCarro[index].detalle.dimensionY= document.getElementById("dimensionY").value;
  listaCarro[index].detalle.tipo = document.querySelector('input[name = gridRadios]:checked').value;
  var e = document.getElementById("color");
  
  listaCarro[index].detalle.color = e.value;
  document.getElementById("estado"+listaCarro[index].id).innerHTML = "<b>Componentes agregados.</b>";
  
  $('#exampleModalRight').modal('hide');
  $('#exampleModalRight').on('hidden.bs.modal', function(e){
    $('#exampleModalRight').modal('dispose');



  })
  verificarComponentes();
}
}
function eliminarProducto(pId){
  // ELiminar de list product.

  let index = listaCarro.findIndex(el=> el.id == pId);
  if(index !== -1 ){
  listaCarro.splice(index,1);}
  // Eliminar de document product.
  document.getElementById(pId).remove();
  verificarComponentes();
}
var cotizacion =0;
var subtotal = 0;
function lastOne(Producto){
  // Inicio L25
  if(Producto.nombre=="Ventana de aluminio"){
  if(Producto.detalle.tipo =="L25"){
    if(Producto.detalle.color =="Madera"){
      // (Riel s + inf + cabezal + zocalo = $10.000 x ancho -convertdo a mt) + (Jamba+traslapo+pierna * 2 *alto )
      
      cotizacion = (10000 * Producto.detalle.dimensionX/100) + ( 7500 * 2 * Producto.detalle.dimensionY/100 ) + (30 * Producto.detalle.dimensionY/100 * 6) + (116 * Producto.detalle.dimensionY/100 * 4) + ( 30 * Producto.detalle.dimensionX/100 * 6) + (116 * Producto.detalle.dimensionX/100 * 2) + (7780) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 * 29000)
    }
    else if(Producto.detalle.color == "Bronce"){
      cotizacion = (7224 * Producto.detalle.dimensionX/100) + (10836 * Producto.detalle.dimensionY/100) + (30 * 6 * Producto.detalle.dimensionY/100) + (116 * 4 * Producto.detalle.dimensionY/100) + (30 * 6 * Producto.detalle.dimensionX/100) + (116 * 2 * Producto.detalle.dimensionX/100) + (7780) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 * 5500)
    }
    else if(Producto.detalle.color =="Titanio"){
      cotizacion = (12000 * Producto.detalle.dimensionX/100) + (18000 * Producto.detalle.dimensionY/100) + (30 * 6 * Producto.detalle.dimensionY/100) + (116 * 4 *Producto.detalle.dimensionY/100)+ (30 * 6 * Producto.detalle.dimensionX/100) + (116 * 2 * Producto.detalle.dimensionX/100) + (13780) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 * 6000)
    }
    else if(Producto.detalle.color =="Mate"){
      cotizacion = (11720 * Producto.detalle.dimensionX/100) + (17580 * Producto.detalle.dimensionY/100) + (30 * 6 * Producto.detalle.dimensionY/100) + (200 * 4 * Producto.detalle.dimensionY/100) + (30*6*Producto.detalle.dimensionX/100)+ (200*2*Producto.detalle.dimensionX/100) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 * 8000) + (24216 )
    }
  }
  // Fin L25

  //Inicio L20
  else if(Producto.detalle.tipo =="L20"){
    if(Producto.detalle.color=="Madera"){
      cotizacion = (9600 * Producto.detalle.dimensionX/100) + (14400 * Producto.detalle.dimensionY/100) + (38 * 6 * Producto.detalle.dimensionY/100) + (120 * 4 * Producto.detalle.dimensionY/100) + (38 * 4 * Producto.detalle.dimensionX/100) + (120 * 2 * Producto.detalle.dimensionX/100) +  (3596) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 * 13000)

    }else if(Producto.detalle.color=="Bronce"){
      cotizacion = (9252 *Producto.detalle.dimensionX/100) + (13878 * Producto.detalle.dimensionY/100) + (33 * 6 * Producto.detalle.dimensionY/100) + (116 * 4 * Producto.detalle.dimensionY/100) + (33 * 4 * Producto.detalle.dimensionX/100) + (116 * 2 * Producto.detalle.dimensionX/100) + (3096) + (Producto.detalle.dimensionY/100 * Producto.detalle.dimensionX/100 * 6500)

    }
    else if(Producto.detalle.color="Titanio"){
      cotizacion = (8812 * Producto.detalle.dimensionX/100) + (13218 * Producto.detalle.dimensionY/100) + (33 * 6 * Producto.detalle.dimensionY/100) + (214 * 4 * Producto.detalle.dimensionY/100 ) + (33 * 4 * Producto.detalle.dimensionX/100) + (214 * 2 * Producto.detalle.dimensionX/100) + (4396) + (Producto.detalle.dimensionY/100 * Producto.detalle.dimensionX/100 * 6500) 
    }

  }

  // Fin L20

  //Inicio L15
  else if(Producto.detalle.tipo =="L15"){
    cotizacion = (6000*Producto.detalle.dimensionX/100) + (9000 * Producto.detalle.dimensionY/100) + (35 * 6 * Producto.detalle.dimensionY/100) + (200 * 4 * Producto.detalle.dimensionY/100) + (35 * 4 * Producto.detalle.dimensionX/100) + (200 * 2 * Producto.detalle.dimensionX/100) + (Producto.detalle.dimensionX/100 * Producto.detalle.dimensionY/100 *12000 ) + (2282)
  }
  
}else if(Producto.nombre=="Showerdoor de aluminio"){
  if(Producto.detalle.tipo=="L20"){

    cotizacion = (8556 * Producto.detalle.dimensionX/100) + (12834 * Producto.detalle.dimensionY/100) + (177* Producto.detalle.dimensionY/100) + (856* Producto.detalle.dimensionY/100)+ (118* Producto.detalle.dimensionX/100) + (428* Producto.detalle.dimensionX/100) + (35796)
  }else if(Producto.detalle.tipo =="L15"){
    cotizacion = (6863 * Producto.detalle.dimensionY/100) + (4498 * Producto.detalle.dimensionX/100) + 22382
  }
}

subtotal = subtotal + Math.round(cotizacion);
  //console.log(subtotal);
  document.getElementById('Subtotal').innerHTML = '$'+subtotal;
  return '$'+Math.round(cotizacion);}
function print(){
  //Recoger datos ingresados.

  //Cliente
  var Cliente = document.getElementById('getCliente').value;
  Cliente = Cliente +' '+ document.getElementById('getApellidos').value;

  var Contacto = document.getElementById('getContacto').value;
  nPedido = Contacto.substr(5, 9);


  //Carro
  //listaCarro array

  //Post 
  var insertCliente = '<p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">'+
                      Cliente+'<br>'+Contacto+'<br> Nro. cotización: #'+nPedido+'</p>'
  var elementss = document.getElementById('postCliente');
  elementss.insertAdjacentHTML('beforeend', insertCliente);


  // Fecha 
  const tempoTranscurrido = Date.now();
  const hoy = new Date(tempoTranscurrido);
  var insertFecha = '<p style="color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0; ">'+
                    'Fecha cotización'+
                    '<br>'+
                    hoy.toLocaleDateString();+
                    '</p>'
  getElement = document.getElementById('postFecha');
  getElement.insertAdjacentHTML('beforeend', insertFecha);

  
  //Recorrer array
  var printProduct;
  listaCarro.forEach(function(Producto){
    printProduct = '<tr>'+
    '<td style="padding-top:0px; padding-bottom:5px;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">'+
           Producto.nombre+'</p>'+
    '</td>'+
    '<td style="padding-top:0px; padding-bottom:5px;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">'+Producto.detalle.dimensionY +'x'+Producto.detalle.dimensionX+' cm</p>'+
    '</td>'+
    '<td style="padding-top:0px; padding-bottom:0; text-align: right;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0; vertical-align:top; white-space:nowrap;">'+
            Producto.detalle.tipo+'</p>'+
    '</td>'+
    '<td style="padding-top:0px; padding-bottom:0; text-align: right;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0; white-space:nowrap;">'+
            Producto.detalle.color+'</p>'+
    '</td>'+
    '<td style="padding-top:0px; padding-bottom:0; text-align: right;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0; vertical-align:top; white-space:nowrap;">'+
            lastOne(Producto)+'</p>'+
    '</td>'+
    '</tr>'
    var elementsss = document.getElementById('printProducto');
    elementsss.insertAdjacentHTML('beforeend', printProduct);

    document.getElementById('Total').innerHTML = 'Instalación + ' +document.getElementById('Subtotal').innerHTML
  })


  // Función imprimir
  let newstr = document.getElementById("imprimir").innerHTML;
      let oldstr = document.body.innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
}