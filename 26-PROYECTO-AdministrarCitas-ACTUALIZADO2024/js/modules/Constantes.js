const ID_ALERTA_FORMULARIO = "alerta";
const CLASES_TAILWIND_ALERTA_FORMULARIO = ['text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm'];
const CLASES_TAILWIND_ALERTA_ERROR = [...CLASES_TAILWIND_ALERTA_FORMULARIO, 'bg-red-500'];
const CLASES_TAILWIND_ALERTA_EXITO = [...CLASES_TAILWIND_ALERTA_FORMULARIO, 'bg-green-500'];


export default{
    ID_ALERTA_FORMULARIO,
    CLASES_TAILWIND_ALERTA_ERROR,
    CLASES_TAILWIND_ALERTA_EXITO
}