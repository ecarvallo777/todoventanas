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
    "nombre": "Espejo de aluminio",
    "imagen":"img/cards/thumb-2.jpg",
  }
                    ]

function llenarCat(){

    // Recorrer array de los productos e insertarlo en modal.
    var i=0;                  
    listaProductos.forEach(function(Product){


        var insert = '<div class="position-relative">'+
        '<a onclick="agregarProducto('+Product.id+')"><img class="card-img-top" src="img/cards/p'+i+'.jpg"'+
        'alt="Card image cap"></a>'+
        '<span class="badge badge-pill badge-theme-1 position-absolute badge-top-left">Categoría '+i+'</span>'+
          '</div>'+
         '<div class="col-10">'+
         '<a onclick="agregarProducto('+Product.id+')">'+
         '<p class="list-item-heading mb-4 pt-1">'+Product.nombre+'</p>'+
         '</a>'+

         '</div>'
        var elements = document.getElementById('insertProduct'+Product.categoria)



        elements.insertAdjacentHTML('beforeend', insert);
        

      
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


  document.getElementById('cerrarModal'+cat).click();
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
function print(){
  //Recoger datos ingresados.

  //Cliente
  var Cliente = document.getElementById('getCliente').value;
  Cliente = Cliente +' '+ document.getElementById('getApellidos').value;

  var Contacto = document.getElementById('getContacto').value;

  //Carro
  //listaCarro array

  //Post 
  var insertCliente = '<p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">'+
                      Cliente+'<br>'+Contacto+'</p>'
  var elementss = document.getElementById('postCliente');
  elementss.insertAdjacentHTML('beforeend', insertCliente);

  //Recorrer array
  var printProduct;
  listaCarro.forEach(function(Producto){
    printProduct = '<tr>'+
    '<td style="padding-top:0px; padding-bottom:5px;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">'+
           Producto.nombre+'</p>'+
    '</td>'+
    '<td style="padding-top:0px; padding-bottom:5px;">'+
        '<p style="font-size: 16px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">'+Producto.detalle.dimensionX +'x'+Producto.detalle.dimensionY+' cm</p>'+
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
            '$0</p>'+
    '</td>'+
    '</tr>'
    var elementsss = document.getElementById('printProducto');
    elementsss.insertAdjacentHTML('beforeend', printProduct);

    
  })


  // Función imprimir
  let newstr = document.getElementById("imprimir").innerHTML;
      let oldstr = document.body.innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
}