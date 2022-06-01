function validar()
{

var nombre = document.formulario.txt_nombre.value
var apellido = document.formulario.txt_apellido.value
var telefono = document.formulario.txt_telefono.value
var rut = document.formulario.run.value
var correo = document.formulario.correo.value
var categoria = document.formulario.categoria.value


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

if(telefono.length < 9)
{
    alert("Numero debe 9 digitos")
    return false

}
if(telefono.charAt(0) != "9")
{
    alert("El telefono tiene que empezar por 9")
    return false
}

if(document.formulario.correo.value.indexOf("@") == -1)
{
    alert("falta @")
    return false
    if(document.formulario.correo.value.indexOf(".") == -1)
    {
        alert("falta . ")
        return false
    }
    
}
/*comentario*/
if(categoria == 1)
{
    alert("Seleccione una categoria")
    return false
}

if()


}