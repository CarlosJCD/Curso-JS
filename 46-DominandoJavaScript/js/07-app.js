/**
 * Event Loop es un mecanismo que permite a JavaScript realizar 
 * operaciones no bloqueantes mediante el manejo de tareas asíncronas 
 * como callbacks, promesas y temporizadores.
 * 
 * Event loop tiene 3 puntos importantes que lo hacen funcionar:
 * 
 * 1.- Call Stack( Pila de llamadas):
 *  Cuando se ejecuta código JavaScript, se procesa en un único hilo. 
 *  El contexto de ejecución se mantiene mediante la pila de llamadas. 
 *  Cada llamada a una función crea un nuevo "marco" o "bloque" que se introduce en la pila, 
 *  y cuando una función finaliza este se extrae de la pila.
 * 
 * 2.- Task Queue (Cola de tareas): 
 *  Las operaciones asíncronas, como la gestión de eventos, 
 *  las solicitudes AJAX y los temporizadores, se gestionan por separado 
 *  del flujo de ejecución principal. Cuando una operación asíncrona finaliza, 
 *  su función callback se coloca en la cola de tareas.
 * 
 * 3.- Event Loop:
 *  El bucle de eventos comprueba constantemente dos cosas: la pila de llamadas y la cola de tareas. 
 *  Si la pila de llamadas está vacía, toma la primera función callback de la cola de tareas y la empuja 
 *  a la pila de llamadas, ejecutándola efectivamente. Este proceso continúa indefinidamente.
 * 
 */