var elemC = document.getElementById("Categorias");
var elemP = document.getElementById("Productos")


function verCategoria(idCategoria){
    elemC.style.display ='none';

    var insertProducts = '<div class="col-12 list" >'+
                                '<div class="card d-flex flex-row mb-3">'+
                                    '<div class="d-flex flex-grow-1 min-width-zero">'+
                                        '<div class="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">'+
                                            '<a class="list-item-heading mb-0 truncate w-40 w-xs-100" href="Pages.Product.Detail.html">'+
                                                'Ventana aluminio'+
                                            '</a>'+
                                            '<p class="mb-0 text-muted text-small w-15 w-xs-100">L25</p>'+
                                            '<p class="mb-0 text-muted text-small w-15 w-xs-100">MATE</p>'+
                                            '<div class="w-15 w-xs-100">'+
                                                '<div class="custom-switch custom-switch-primary-inverse mb-2 custom-switch-small">'+
                                                    '<input class="custom-switch-input" id="switchS3" type="checkbox" checked="">'+
                                                    '<label class="custom-switch-btn" for="switchS3"></label>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+
                                        
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                            //Modal FILTRAR
                            '<div class="app-menu shown" id="Filtro">'+
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
                                                    '<input type="checkbox" class="custom-control-input" id="category1">'+
                                                    '<label class="custom-control-label" for="category1">L25</label>'+
                                                '</div>'+
                                            '</li>'+
                                            '<li>'+
                                                '<div class="custom-control custom-checkbox mb-2">'+
                                                    '<input type="checkbox" class="custom-control-input" id="category2">'+
                                                    '<label class="custom-control-label" for="category2">L20</label>'+
                                                '</div>'+
                                            '</li>'+
                                            '<li>'+
                                                '<div class="custom-control custom-checkbox ">'+
                                                    '<input type="checkbox" class="custom-control-input" id="category3">'+
                                                    '<label class="custom-control-label" for="category3">L15</label>'+
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
   
        elemP.insertAdjacentHTML('beforeend', insertProducts);

} 