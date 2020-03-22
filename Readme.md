# ReactJS

`npm install create-react-app --global`

El 1º paso que debemos hacer a la hora de crear un projecto con react es
tener encuenta que react en actualmente catalogado como un _**Framework**_.

La diferencia de trabajar con ReactJS y con JS puro(vanilla JS) es la forma
como organizamos.

**React** como filosofía quiere que la división por componentes y manejo de estado encapsulado. Adicionalemente,
también se hace un manejo global de la aplicación que en algunos casos requieren un manejo un poco más
complerjo de sus estados.

#### ¿Qué contiene?

Dentro de la aplicación que _create-react-app_ nos ofrece encontramos que nos trae por
defecto:

- _Webpack_: encargado de procesar carga de JS, CSS, images y demás
- _Babel_: el cual es el traductor entre es5 y es6
- _PostCSS_: Procesamiento de CSS
- _Jest_: Librería de pruebas.

### Comencemos

Creemos un projecto en con el CLI de create react-app

```
yarn start
yarn test
npm run build - empaqueta la aplicación para producción en la carpeta build.
npm run eject - permite cambiar manualmente las librerías y configuración que utiliza create-react-app por defecto.
// Ten cuidado con este comando, una vez lo ejecutas no hay marcha atrás.
```

### Hotreload

Esto es una de las caracteristicas que mejor hace y tiene `create-react-app`. Este feature
lo que hace es ayudarnos al desarrollo, ya que refreseca cuando se graba parte del código nuevo.
