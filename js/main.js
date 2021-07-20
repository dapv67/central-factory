// Login
function login(evt) {
  evt.preventDefault();
  location.href = "./admin_gral.html";
}

//Cerramos modales
$(".close-modal").click(function (event) {
  $(".modal").removeClass("is-active");
});

//-------------- Producción -------------------
//Abrimos modal para agregar tapón
$("#formAddPlaneacion").click(function (event) {
  $("#planeacionModal").addClass("is-active");
});
//Abrimos modal para agregar tapón
$("#formAddProduccion").click(function (event) {
  $("#produccionModal").addClass("is-active");
});

//------------------ Pedidos -----------------------
$("#addPedidoModal").click(function () {
  $("#addPedidoModal").addClass("is-active");
});
$("#addEnvioModal").click(function () {
  $("#envioModal").addClass("is-active");
});
$(".updateEstatusEnvio").click(function () {
  $("#actualizarEstatusEnvioModal").addClass("is-active");
});

//------------------ Clientes -----------------------
//Eliminamos registro
function eliminarCliente(id, nombre) {
  $("#eliminarClienteModal").addClass("is-active");
  $("#id_cli").val(id);
  $("#nom_cli").text(nombre);
}
//Abrimos form para agregar cliente
$("#formAddCliente").click(function () {
  $(".contenido").load("./moduls/clientes/formAddCliente.html");
});

//Pasamos el registro al form actualizar
$(".updateClienteModal").click(function () {
  var array = $(this).val();
  datos = array.split("||");

  $("#actualizarClienteModal").addClass("is-active");
  $("#id").val(datos[0]);
  $("#codigo").val(datos[1]);
  $("#nombre").val(datos[2]);
  $("#empresa").val(datos[3]);
  $("#grupo").val(datos[4]);
  $("#puesto").val(datos[5]);
  $("#correo").val(datos[6]);
  $("#tel1").val(datos[7]);
  $("#tel2").val(datos[8]);
  $("#clasificacion").val(datos[9]);
  $("#utilidad").val(datos[10]);
  $("#dcredito").val(datos[11]);
  $("#consumo").val(datos[12]);
});

//------------------ Almacén -----------------------
//Eliminamos registro del artículo
function eliminarArticulo(id, nombre, clasificacionArticulo) {
  $("#eliminarArticuloModal").addClass("is-active");
  $("#idE").val(id);
  $("#clasificacionArticulo").val(clasificacionArticulo);
  $("#nombre_articulo").text(nombre);
}
function updateInsumoModal() {
  $("#updateInsumoModal").addClass("is-active");
}
function updateTaponModal() {
  $("#updateTaponModal").addClass("is-active");
}
function updateMateriaModal(array) {
  $("#updateMateriaModal").addClass("is-active");
}
//Almacen
//Abrimos modal para agregar articulo
$("#addArticuloModal").click(function () {
  $("#materiaModal").addClass("is-active");
});
//Abrimos modal para agregar entrada
$("#addEntradaModal").click(function () {
  $("#entradaMPModal").addClass("is-active");
});
//Abrimos modal para agregar salida
$("#addSalidaModal").click(function () {
  $("#salidaRafiaModal").addClass("is-active");
});
