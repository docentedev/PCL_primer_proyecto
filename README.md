# Primer Proyecto

## Crear un proyecto

- `create-react-app primer_proyecto_pcl --template typescript --use-npm`
- Eliminar logo.svg
- Modificar App.tsx y dejar de la siguiente forma

```tsx
import React from "react";
import "./App.css";

function App() {
  return <div className="App">Init</div>;
}

export default App;
```

- dejar vacio el contenido de los archivos `index.css` y `App.css`

## Agregar Bootstrap

- `npm install bootstrap`
- Agregar bootstrap a `index.tsx` agregando la siguiente linea entre la linea 3 y 4

`import 'bootstrap/dist/css/bootstrap.min.css';`

## Estructura inicial

- crear directorio `src/components`
- creat directorio `src/containers`
