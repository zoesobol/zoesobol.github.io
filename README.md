# Qué es Github Pages?
Github Pages te permite tener una página web a partir de un repo de Github, completamente gratis! Y con muy poco esfuerzo.
## 
# Cómo empiezo?
## Crear una cuenta en github
paso medio obvio

## Crear un repo
- Debe tener de nombre "tunombredeusuario".github.io

## Clonar el repo en una carpeta
- Copiar la url del repo para clonar
- Abrir una terminal o git bash en una carpeta y poner
``` bash
git clone https://github.com/<usuario>/<usuario>.github.io.git
```
- Empezar a crear!

## 
# Creando el primer index.html
El index.html principal tiene que que estar en la carpeta principal del repo, junto con una carpeta css e img (si le queremos dar estilos).

```
.
├── index.html
```

## Hora de la diversión! Copiar una plantilla linda

A la hora de crear una página web, considero que para empezar, está bueno aprender con una plantilla ya hecha. Es menos frustrante, porque ya tenés un diseño completo de entrada, y podés customizarlo a tu gusto (e ir aprendiendo a la vez!).

**Lista de páginas de plantillas HTML:**
- [ ] https://bootstrapmade.com/
- [ ] https://startbootstrap.com/
- [ ] https://html5up.net/
- [ ] https://colorlib.com/

## Customizar la plantilla copiada
Esta es la parte más divertida, podés hacer lo que quieras! Borrar secciones, copiar secciones, cambiar los colores, las imágenes, jugar con el CSS. Animate!

##
# Directorio de carpetas
Para tener las url bien organizadas, es necesario dividir el proyecto en carpetas.
Por ejemplo, si creás una carpeta "frontend" en tu directorio principal y le ponés un index.html, cuando accedas a https://usuario.github.io/frontend/ vas a ver ese index!

```
.
├── index.html
├── frontend
│   ├── index.html

```

## Linkeando a las carpetas
Hacer un link que te lleve a la carpeta es super fácil! 
Acordate que si vas a la carpeta, y ésta tiene un index.html, eso es lo que se va a ver! No hace falta referenciar el /index.html

Siguiendo el ejemplo anterior, si ponés un link así, ya es suficiente!
```HTML
<a href="frontend/">Frontend</a>
```

Y para referenciar a la página principal es tan fácil como poner esto
```HTML
<a href="/">Página principal</a>
```

Con las / podés referenciar carpetas!
