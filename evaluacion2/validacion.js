function validar()
{

var nombre = document.formulario.txt_nombre.value
var apellido = document.formulario.txt_apellido.value
var telefono = document.formulario.txt_telefono.value
var rut = document.formulario.run.value
var categoria = document.formulario.categoria.value
var correo = document.formulario.correo.value
var combo = document.getElementById("categoria");
var selected = combo.options[combo.selectedIndex].text;
var mensaje = document.formulario.mensaje.value

if(nombre < 3)   
{
    alert("Debe ingresar un nombre válido")
    return false
}
if(apellido.length < 3 )   
{
    alert("Debe ingresar un apellido válido")
    return false
}
if (document.formulario.correo.value.indexOf('@') < 0)
{
    alert("El correo debe incluir @")
    return false
}
var indice = document.formulario.correo.value.indexOf('@')
if ((document.formulario.correo.value.indexOf('.com',indice) < 0) && (document.formulario.correo.value.indexOf('.cl',indice) < 0)) 
{
    alert("El correo debe incluir un punto y dominio válido (ej: gmail.com o .cl)")
    return false
}

if (rut.charAt(8) != "-"){
    alert("Debe ingresar el rut con guión")
    return false
}


if(rut.length<10 || rut.length>10){
    alert("El rut debe tener 10 dígitos")
    return false
}

if(telefono.length < 9 || telefono.length > 9)
{
    alert("El teléfono debe tener 9 dígitos")
    return false
}
if(telefono.charAt(0) != "9")
{
    alert("El teléfono debe comenzar con 9")
    return false
}
/*comentario*/
if(categoria == 1)
{
    alert("Seleccione una categoría")
    return false
}
if (mensaje == ""){
 alert("Ingrese un mensaje")
 return false
}
alert("Datos enviados. Revisa abajo el resultado.")
var resultado = "Nombre: "+nombre+" "+apellido+"\nCorreo: "+correo+"\nTeléfono: "+telefono+"\nRut: "
+rut+"\nCategoría: "+selected+"\nMensaje: "+mensaje
document.getElementById("resultado").innerHTML = resultado


}