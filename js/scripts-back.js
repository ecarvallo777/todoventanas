var Categorias = document.getElementById("Categorias");
var Productos = document.getElementById("Productos");


function verCategoria(idCategoria){
    Categorias.style.display ='none';
    Productos.style.display ='inline';

   
    var insertFilter = '<div class="app-menu shown" id="Filtro">'+
                            '<div class="p-4 h-100">'+
                                '<div class="scroll ps">'+
                                    '<p class="text-muted text-small">Estado</p>'+
                                    '<ul class="list-unstyled mb-5">'+
                                        '<li  name="state" id="like">'+
                                            '<a href="#" onclick=filtrar("like") >'+
                                                '<i class="simple-icon-like" ></i>'+
                                                'Producto Disponible'+
                                            '</a>'+
                                        '</li>'+
                                        '<li name="state"  id="dislike"> '+
                                            '<a href="#" onclick=filtrar("dislike") >'+
                                                '<i class="simple-icon-dislike"></i>'+
                                                'Producto no disponible'+

                                            '</a>'+
                                        '</li>'+
                                    '</ul>'+
                                    '<p class="text-muted text-small">Categorías</p>'+
                                    '<ul class="list-unstyled mb-5">'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox mb-2">'+
                                                '<input type="checkbox" class="custom-control-input" id="L25" onclick=filtrar("L25") name="checkCat">'+
                                                '<label class="custom-control-label" for="L25">L25</label>'+
                                            '</div>'+
                                        '</li>'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox mb-2">'+
                                                '<input type="checkbox" class="custom-control-input" id="L20" onclick=filtrar("L20") name="checkCat">'+
                                                '<label class="custom-control-label" for="L20">L20</label>'+
                                            '</div>'+
                                        '</li>'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox ">'+
                                                '<input type="checkbox" class="custom-control-input" id="L15" onclick=filtrar("L15") name="checkCat">'+
                                                '<label class="custom-control-label" for="L15">L15</label>'+
                                            '</div>'+
                                        '</li>'+
                                    '</ul>'+
                                    '<p class="text-muted text-small">Colores</p>'+
                                    '<ul class="list-unstyled mb-5">'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox mb-2">'+
                                                '<input type="checkbox" class="custom-control-input" id="ROBLE" onclick=filtrar("ROBLE") name="colors">'+
                                                '<label class="custom-control-label" for="ROBLE">ROBLE</label>'+
                                            '</div>'+
                                        '</li>'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox mb-2">'+
                                                '<input type="checkbox" class="custom-control-input" id="MATE" onclick=filtrar("MATE") name="colors">'+
                                                '<label class="custom-control-label" for="MATE">MATE</label>'+
                                            '</div>'+
                                        '</li>'+
                                        '<li>'+
                                            '<div class="custom-control custom-checkbox ">'+
                                                '<input type="checkbox" class="custom-control-input" id="TITANIO" onclick=filtrar("TITANIO") name="colors">'+
                                                '<label class="custom-control-label" for="TITANIO">TITANIO</label>'+
                                            '</div>'+
                                        '</li>'+
                                    '</ul>'+
                                    

                                '<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>'+
                            '</div>'+
                            '<a class="app-menu-button d-inline-block d-xl-none" href="#">'+
                                '<i class="simple-icon-options"></i>'+
                            '</a>'+
                        '</div>'
    
    Productos.insertAdjacentHTML('beforeend', insertFilter);




} 
function filtrar(filtro){ 
    var elem = document.getElementById(filtro);
    var diselem ;


    var state;

    if(elem.name =='checkCat'){
        elem.addEventListener('change', function(){
            document.getElementById('like').removeAttribute('class');
            document.getElementById('dislike').removeAttribute('class');


            $('input[name="checkCat"]').not(this).prop('checked', false);

            if (this.checked) {
                state= true; // checked, aplicar filtro.
            }else state= false; // unchecked, deshacer filtro.
            filt(filtro);
    });}
    else if(elem.id =='like' || elem.id =='dislike'){
        $('input[name="checkCat"]').prop('checked', false);
        
        //Eliminar actividad del otro li
        if (elem.id =='like'){
            diselem = document.getElementById('dislike')
            diselem.removeAttribute('class');
        }else if(elem.id =='dislike'){
            diselem = document.getElementById('like');
            diselem.removeAttribute('class');


        }
        //Activar o desactivar li seleccionado
        if(elem.classList.contains('active')){
            elem.removeAttribute('class');
            state=false;
            

        }else{
            elem.setAttribute("class", "active");
            state=true;}

        if(elem.id=='like'){filt('available')}
        else{filt('busy');}
    }else if(elem.name == 'colors'){
        document.getElementById('like').removeAttribute('class');
        document.getElementById('dislike').removeAttribute('class');
        $('input[name="colors"]').not(elem).prop('checked', false);
        $('input[name="checkCat"]').prop('checked', false);

        if (elem.checked) {
            state= true; // checked, aplicar filtro.
        }else state= false; // unchecked, deshacer filtro.

        filt(elem.id);

    }

    //Generic 
    function filt(filter){
    $("#datatableRows tbody tr").filter(function(){
        $(this).each(function(){elem
            found = false;
            $(this).children().each(function(){
                content = $(this).html();
                if(content.match(filter))
                {
                    found = true
                }
            });
            if(!found && state)
            {
                $(this).hide();
            }
            else
            {
                $(this).show();
            }
        });
    });
    }

    
}
function changeState(idCheckbox){
    elem = document.getElementById(idCheckbox);
    if(elem.name=='available'){elem.name = 'busy';
    elem.removeAttribute('checked');}else{
        elem.name='available';
    }
    
    


}
