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
    alert("Debe poner un nombre valido")
    return false
}
if(apellido.length < 3 )   
{
    alert("Debe poner un apellido valido")
    return false
}
if (document.formulario.correo.value.indexOf('@') < 0)
{
    alert("El correo debe incluir @")
    return false
}
var indice = document.formulario.correo.value.indexOf('@')
if (document.formulario.correo.value.indexOf('.',indice) < 0)
{
    alert("El correo debe incluir un punto (ej. gmail.com)")
    return false
}
if(rut<10){
    alert("El rut debe tener 10 digitos")
    return false
}
if(telefono.length < 9)
{
    alert("Numero debe 9 digitos")
    return false
}
if(telefono.indexOf("+569") == 1)
{
    alert("Telefono invalido")
    return false
}
if(telefono.charAt(0) != "9")
{
    alert("El telefono tiene que empezar por 9")
    return false
}
/*comentario*/
if(categoria == 1)
{
    alert("Seleccione una categoria")
    return false
}
if (mensaje == ""){
 alert("Ingrese el mensaje")
 return false
}
alert("Datos enviados abajo esta el resultado.")
var resultado = nombre+" "+apellido+"\n"+correo+"\n"+telefono+"\n"+run+"\n"+selected+"\n"+mensaje
document.getElementById("resultado").innerHTML = resultado


}