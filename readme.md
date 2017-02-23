

Angular 2: Reactive Forms - SnapShot 1
===================
En esta parte veremos estos contenidos del curso de Pluralshight:

 - Introduction
 - Template-driven vs Reactive Forms


----------
### 1 - Introduction
----------

![enter image description here](https://i.imgur.com/4QCKMNU.png)

La mayoría de aplicaciones Angular 2 siguen e esquema de arriba se obtienen los datos y se muestran. Cuando recogemos datos del usuario se validan. Si no son correctos se muestran mensajes de error. Cuando son correctos estos datos se guardan en nuestra fuente de datos. 

Angular 2 tiene dos técnicas de construir formularios:

- Template-driven. 
- Reactive.

![enter image description here](https://i.imgur.com/yQ4VtJb.png)

Ambas técnicas comparten los mismos conceptos básicos, pero como su propio nombre indica template-driven forms pone gran responsabilidad en la creación de formularios en la template mientras que Reactive lo pone en la clase del componente. Ambas técnicas requieren una plantilla HTML pero el primero basa las validaciones en el propio HTML mientras que Reactive lo hace en el código del componente.

En la imagen de abajo se muestran las diferencias entre ambas técnicas:

![enter image description here](https://i.imgur.com/DxlJQEw.png)

Ambas técnicas se basan en el uso de un FormModel, e cual es un objeto asociado al formulario que contiene FormContols y FormGroup. Todos ellos implementan una lógica clave para condicionar reglas de validación: definen estos tipos de estados

![enter image description here](https://i.imgur.com/Bg0ZX4n.png) 

Estos estados nos servirán para construir las validaciones de un formulario, independientemente de a técnica utilizada.

----------
### 2 - Template-driven
----------
Un formulario Tempalte-driven tendria este reparto

![enter image description here](https://i.imgur.com/RQ7x5xl.png)

Como podemos observar tenemos la mayoría de las responsabilidades en la plantilla. Además, observamos que tenemos two-way binding entre el ngFrom y el dataModel. esto último puede parecer ventajoso ya que no nos tendremos que preocupar de la sincronización de datos ya que se hace automáticamente, sin embargo, en escenarios complejos puede convertirse en un verdadero quebradero de cabeza.

Para crear un formulario partimos de la etiqueta form y hay vamos declarando nuestros elementos de formulario HTML como inputs, checkboxes, ...etc. Internamente Angular creará un FormGroup y tantos FormControls como elementos de formulario HTML tengamos. Este diagrama nos ayudara a entenderlo:

![enter image description here](https://i.imgur.com/pW4zvDi.png)

Como podemos ver también podemos utilizar las directivas ngModel para enlazar el elemento una variable de plantilla.

De este modo podemos componer formularios con validación como este. Esta sería el aspecto:

![enter image description here](https://i.imgur.com/tW9v6sZ.png)

Podemos ver como a partir de a variable de plantilla condicionamos el estilo has-error. De manera análoga con **ngIf** podemos condicionar que se muestre un mensaje de error.
Para evitar que el navegador lance las validaciones HTML debemos poner el atributo **novalidate** en la etiqueta **form**
También se puede observar cómo se hace el two-way binding entre un elemento input y nuestro modelo de datos definido en la clase .ts

Para más información:

https://angular.io/docs/ts/latest/guide/forms.html

----------
### 3 - Practica
----------
Para fortalecer lo aprendido vamos a basarnos la aplicación del curso getting-started. El objetivo es dotar a la aplicación de creación, edición y eliminación de productos.

![enter image description here](https://i.imgur.com/qPtzTci.png)

Antes de empezar tenemos que mejorar nuestro servicio de productos ya que solo obtenía información de un archivo .json
Para dotar a la aplicación de un entorno "real" sin tener que desarrollar un backend hemos optado por utilizar esta librería que implementa una API en memoria



Para ello clonamos el **SnapShot 1** desde el segundo commit, ya que este commit tiene implementado ya el servicio-mock en memoria para productos:

    git clone https://github.com/tc-frontend/course_angular2_day2_snapshot1
    cd course_angular2_day2_snapshot1
    git checkout HEAD~7
    npm install
 
O bien clonar el primer commit y hacer los cambios oportunos según la descripción del commit.

    git clone https://github.com/tc-frontend/course_angular2_day2_snapshot1
    cd course_angular2_day2_snapshot1
    git checkout tags/init
    npm install

y hacer los pasos detallados en el historial de commits:

https://goo.gl/iZz9ut

 A partir de aquí estos serían los pasos a seguir:

#### 1 - Crear un componente para la edición de productos
Crearemos un componente (html & .ts) y le registraremos dentro del Router en el ProductModuke.

https://goo.gl/HJpZ0Q

#### 2 - Injectar el servicio product-mock
Una vez inyectado utilizamos el metodo getProduct para obtener el producto.

https://goo.gl/KZZHGT

#### 3 - Implementar validaciones
Modificaremos nuestro formulario para que muestre tanto mensajes de error como el estilo has-error en el caso de no cumplir con las reglas de validación definidas en el HTML

https://goo.gl/UfMygS

#### 4 - Implementar la actualización de un producto
Utilizar (ngSubmit) para definir el método que se disparará al pulsar el botón. Guardar el producto utilizando el servicio y cuando termine redirigir a la lista de producto.

https://goo.gl/YhkpOJ

#### 5 - Implementar la eliminación de un producto
Definir un botón con (click) y definir un método que borre el producto pidiendo confirmación. Una vez borrado se navegará al listado de productos

https://goo.gl/rLIU6d

#### 6 - Implementar la creación de un nuevo producto
 Poner un enlace hacia /productoEdit/0, el formulario deberá entrar en modo creación y ocultar el botón "Delete". Una vez creado se navegará al listado de productos.

https://goo.gl/xOlsyx

 

----------



Si queremos ver la App en nuestro browser

    npm start

Si queremos ver la solución final de este SnapShot:

    git checkout master
    npm install
    npm start






