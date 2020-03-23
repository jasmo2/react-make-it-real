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

---

## JSX

[Babel Recurso](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgfAFgpgGwQewAQFcB2JnAPTjRA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=)

### Diferencias con HTML

> [diferences.js](./2-differences/src/App.js)

### Todas las Etiquetas deben estar cerradas.

##### JSX (javascript and XML)

> `<img src='algo.png'/>`

##### HTML

> `<img src='algo.png'>`

### usar una clase CSS

##### JSX

> `<div className="App"></div>`

##### HTML

> `<div class="App"></div>`

Dado que en JS **class** ya es una palabra reservada.

---

### Los elementos en JSX deben estar envueltos por un elemento.

En este ekemplo vemos dos parrafos. Pero estos 2 parrafos deben estar envueltos
por un elemento HTML, por ejemplo un `<div/>` .

###### Hay otra forma de envolver los elementos hermanos

##### JSX

```
<div>
  <p>Hola</p>
  <p>Mundo</p>
</div>
```

##### HTML

```
  <p>Hola</p>
  <p>Mundo</p>
```

Ahora veamos como lo transforma en JS

[Babel Recurso](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwEwlgbgfAFgpgGwQewAQFcB2JnAPTjRA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=)

## JS en JSX

### Variables

Puedes crear variables y escribir sobre el JSX: ejemplo

```
const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;
```

##### Manos a la obra

##### Crear un div el cual imprima una operación matematica.

### Arreglos

En los arreglos debemos tener encuenta que **_JSX_** siempre espera un arreglo en forma
de XML en sus elementos.

```
const names = ["Daniel", "Juan", "Alejandro"];

const jsx = (
  <ul>
    {names.map((name) =>
      <li>{name}</li>
    )}
  </ul>
);
```

`{names.map((name) => <div>...</div>`

> Manos a la acción, en el archivo [diferences.js](./2-differences/src/App.js)
> generemos parrafos apartir de la variable `parragraphs`

## Estilos enlinea

```
let styles = {
  borderColor: "#daae33"
};

const jsx = (
  <div style={styles}>
    Hola mundo
  </div>
);
```

## Eventos

Tener encuenta que son los mismos que cuando controlamos el DOM pero con camelCase.

- onclick
- onchange
- onkeydown
- etc...

````
const saluda = () => alert("Hola!");
<button onClick={saluda}></button>```
````

# Componentes EN JSX

Los componentes son formas de encapsular las logica de nuestros pedasos de UI
y reutilizarlos más adelantes.

## Stateless Components y Statefull components

### Stateless

```
const Title = (props) => {
  return <h1>{props.name}</h1>;
};
```

Usualmente este componentes son solo usados para pintar y
no tienen ningún tipo de logica.

### Statefull

Estos tienen usualmente logic de alguna indole.

```
class Library extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      available: false,
    };
    // tenemos que enlazar el método al contexto actual
    this.updateBook = this.updateText.bind(this);
  }

  updateBook(book) {
    this.setState({ title: book.title, available: book.available })
  }

  componentDidMount(){
    setTimeout(() => {
      this.updateBook('Guns, Germs, and Steel')
    }, 1600);
  }

  render() {
    <>
      <input type="text" placeholder="Change title" />
      <Title>{titel}</Title>
    </>
  }
}
```

##### Estados

Ejercicio, ahora actualicemos arreglos y objectos literales.

---

Dentro de estos estados manejemos un Formulario y veamos.

##### Ej: Crear varios 'inputs' y manejar los estados

# React Hooks

Cambiemos todo el concepto. _**React Hooks**_ se puede usar desde _React 16.8_.
Dado que el paradigma ha venido cambiando hacia ser funcional más que orientado a clases.
Los **Hooks** hacen más sentido que tener que usar clases como lenguajes de programación.
Ya que JS en la actulidad(2020) se orienta a funciones, y trata de ser funcional.

## State

Se usa `const [val, setVal] = useState(initValue)` el cual recibe un valor de inicialización y devuelve
2 parametros, el 1º es el valor que se actuliza y el segundo es la función encargada de actulizar el valor.

Miremos el ejemplo aquí: [https://codesandbox.io/s/admiring-haslett-teusl](https://codesandbox.io/s/admiring-haslett-teusl)

##### Ex: hagamos un componente similar a Form pero que sea React-Hooks
