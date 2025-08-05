###### Instalar la extensión "Markdown Preview Github Styling" para visualizar mejor esta información.
* Estilos de las taretas en la sección 2
  -- Los estilos de las tarjetas se mantienen dentro de una sola hoja a pesar de ser 2 componentes diferentes
    pero para no crear otra hoja de estilos nuevas, se opta por definirlos solo en "tarjetaGuia.css" ya que 
    entre ellas solo difiere la propiedad entre "flex" a "grid".-
    !!! la propiedad "flex-direction: column" se omite escribirla para la "tarjeta2" ya que de esta manera,
        independientemente del contenido, ocupará el alto de dos filas asignado.-
  
  -- En las calses de tarjetas 1,2 y 3, le quitamos la propiedad "flex-direction:column" porque esto hace que
    las cajas ajusten su alto automaticamente solo a los elementos que hay dentro, al quitarlo, omite y ocupa
    todo lo que dispone el padre. Si queremos volver a esa config, solo añadir esa linea en cada tarjeta

  --Poceso de configuración para lograr que las imagenes en las tarjetas ocupen un 100% en ancho y alto:
    Explicación:
    Altura explícita en contenedores:

    Si los contenedores .imagenesX1 y .imagenesX3 no tienen una altura explícita, sus hijos (img) no podrán determinar cuánto espacio vertical tienen disponible.
    Por eso, añadimos height: 100% (o una altura fija como height: 300px, dependiendo del diseño).
    Uso de object-fit: cover:

    Este estilo asegura que las imágenes se escalen y recorten para ajustarse completamente al área disponible.
    Flexibilidad del diseño:

    Si quieres que el tamaño de los contenedores dependa dinámicamente de algún padre superior, asegúrate de que las propiedades de altura se propaguen correctamente desde el contenedor raíz hasta .imagenesX1 y .imagenesX3.

### ✅ **Importar estilos CSS en `Principal.jsx`: ¿Está bien o no?**

Importar los estilos globales o de componentes en el archivo `Principal.jsx` **no es una mala práctica en sí misma**, pero puede tener implicaciones dependiendo de cómo esté estructurado tu proyecto y qué tipo de estilos estés cargando. Vamos a desglosarlo:

---

## 🔍 **1. ¿Es válido importar los estilos en `Principal.jsx`?**

Sí, es totalmente válido. Esto es posible porque **CSS en Vite (y en general en React)** se importa como un módulo global, lo que significa que al importar el CSS en `Principal.jsx`, sus estilos estarán disponibles en toda la página.

### ✔️ **Cuándo está bien:**
- Si **todos los estilos importados son necesarios** en toda la página (por ejemplo, estilos globales, de layout o tipografía).
- Si quieres mantener **menos líneas de código en los componentes** y no preocuparte por importar archivos CSS en cada uno.

---

## ⚠️ **2. Problemas Potenciales**

1. **Carga innecesaria de CSS**:
   - Si `Principal.jsx` importa estilos de componentes que **no están renderizados** en ese momento, el navegador cargará CSS innecesario, afectando el rendimiento.

2. **Estilos globales no encapsulados**:
   - Al importar los estilos de todos los componentes en `Principal.jsx`, corres el riesgo de que los **estilos colisionen** entre componentes (por ejemplo, reglas `.button` podrían sobreescribirse entre distintos componentes).

3. **Dificultad para mantener**:
   - Si el proyecto crece mucho, será **difícil gestionar qué CSS está afectando a qué componente**, ya que todo estará centralizado en `Principal.jsx`.

---

## 🛠️ **3. Mejores Prácticas que Podrías Implementar**

### **Opción 1: Estilos por Componente (Recomendado)**
Importa los estilos de cada componente **dentro de ese componente**:

```jsx
// NavBar.jsx
import './navBar.css';

const NavBar = () => {
  return <nav className="navbar">...</nav>;
};
```

Esto ofrece:
- **Mejor encapsulación**: Cada componente carga solo sus propios estilos.
- **Menor riesgo de colisiones**: Evita que los estilos se sobreescriban accidentalmente.
- **Mejor rendimiento**: Solo se carga el CSS necesario.

---

### **Opción 2: Dividir los Estilos por Contexto**

1. **Globales** (que afectan a todo el sitio):
   Importarlos en `index.css` o `Principal.jsx`.
   ```jsx
   // Principal.jsx
   import '../../styles/global.css'; // Tipografía, variables, resets
   ```

2. **Estilos de Componentes**:
   Importarlos **solo dentro de cada componente** para mantenerlos aislados.

3. **Estilos de Layout**:
   Si `Principal.jsx` maneja el layout principal (cabecera, pie de página), puedes importar los estilos **de layout específicos** allí.

---

## 🎯 **Conclusión**

- **Importar estilos en `Principal.jsx` está bien** si son globales o comunes a toda la página.  
- **Para estilos específicos de componentes**, es mejor importarlos dentro de cada componente.  
- Esto mejora el rendimiento, la encapsulación y facilita el mantenimiento a largo plazo.


## **Breackpoints globales**

Dispositivo	Tamaño (px)	Ejemplo de @container
📱 Teléfono Pequeño	width <= 480px	@container perfil (width <= 480px) { ... }
📱 Teléfono Mediano	width <= 768px	@container perfil (width <= 768px) { ... }
📱 Teléfono Grande	width <= 992px	@container perfil (width <= 992px) { ... }
📲 Tablet (Vertical)	width <= 1200px	@container perfil (width <= 1200px) { ... }
💻 Tablet (Horizontal)	width < 1400px	@container perfil (width < 1400px) { ... }
🖥️ Laptop/PC Pequeño	width < 1600px	@container perfil (width < 1600px) { ... }
🖥️ Pantalla Grande	width >= 1600px	@container perfil (width >= 1600px) { ... }