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
                                        '<li class="active">'+
                                            '<a href="#">'+
                                                '<i class="simple-icon-like"></i>'+
                                                'Producto Disponible'+
                                            '</a>'+
                                        '</li>'+
                                        '<li>'+
                                            '<a href="#">'+
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
                                    '<div>'+
                                        '<p class="d-sm-inline-block mb-1">'+
                                            '<a href="#">'+
                                                '<span class="badge badge-pill badge-outline-primary mb-1">ROBLE</span>'+
                                            '</a>'+
                                        '</p>'+

                                        '<p class="d-sm-inline-block mb-1">'+
                                            '<a href="#">'+
                                                '<span class="badge badge-pill badge-outline-theme-3 mb-1">MATE</span>'+
                                            '</a>'+
                                        '</p>'+
                                        '<p class="d-sm-inline-block  mb-1">'+
                                            '<a href="#">'+
                                                '<span class="badge badge-pill badge-outline-secondary mb-1">TITANIO</span>'+
                                            '</a>'+
                                        '</p>'+
                                    '</div>'+

                                '<div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>'+
                            '</div>'+
                            '<a class="app-menu-button d-inline-block d-xl-none" href="#">'+
                                '<i class="simple-icon-options"></i>'+
                            '</a>'+
                        '</div>'
    
    Productos.insertAdjacentHTML('beforeend', insertFilter);




} 
function filtrar(filtro)
{ 
    var radio = document.getElementById(filtro);
    var state;
    radio.addEventListener('change', function(){
        $('input[name="checkCat"]').not(this).prop('checked', false);
        $('input[name="checkCat"]').not(this).prop('active', false);

        if (this.checked) {
            state= true; // checked, aplicar filtro.
        }else state= false; // unchecked, deshacer filtro.

    $("#datatableRows tbody tr").filter(function(){
        $(this).each(function(){
            found = false;
            $(this).children().each(function(){
                content = $(this).html();
                if(content.match(filtro))
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
});
}
