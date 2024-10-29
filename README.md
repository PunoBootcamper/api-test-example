# NODE-SERVER Example 💻

¡Hola y bienvenidos! Este proyecto de Node.JS demuestra una arquitectura simple construyendo una API completa con Node.JS, Express.JS y MongoDB, presentando una demostración arquitectónica de estas características:

# Archivos de prueba

Los archivos de test han sido creados para probar las funcionalidades. Se ha verificado que algunos endpoints de assets están fallando, el siguiente paso es revisar el código de assets para corregir los errores y que pase el test. 

- Construido con Node.js y Express
- API REST

## Enrutador y Rutas de Express

| Ruta                    | HTTP       | Middleware de Ruta | Descripción                          |
| ------------------------| -----------| ------------------ | ------------------------------------ |
| /api/tasks              | GET        |                    | Obtener lista de tareas              |
| /api/tasks              | POST       |                    | Crear una nueva tarea                |
| /api/tasks/:id          | GET        |                    | Obtener una tarea específica         |
| /api/tasks/:id          | PATCH      |                    | Actualiza una tarea                  |
| /api/tasks/:id          | DELETE     |                    | Eliminar una tarea                   |
| /api/assets             | GET        |                    | Obtener lista de activos             |
| /api/assets             | POST       |                    | Crear un nuevo activo                |
| /api/assets/:id         | GET        |                    | Obtener un activo específico         |
| /api/assets/slug/:slug  | GET        |                    | Obtener lista de activos por slug    |
| /api/assets/:id         | PATCH      |                    | Actualizar un activo                 |
| /api/assets/:id         | DELETE     |                    | Eliminar un activo                   |


## Uso
El uso de los endpoints es muy simple, anteriormente se podía ver una tabla de endpoints que puedes llamar, aquí tenemos algunos ejemplos.

### Ejemplo básico **Crear TAREA** `/api/task`:

Cuerpo de la solicitud:
```json
{
  "title": "Crear tarea",
  "description": "Endpoint para crear tareas"
}
```

Respuesta:
```json
{
  "title": "Crear tarea",
  "description": "Endpoint para crear tareas",
  "completed": false,
  "id": 4
}
```

## Comenzando

### Prerrequisitos

- [Git](https://git-scm.com/)
- [Node.js y npm](nodejs.org) Node >= 16.14.x, npm >= 8.3.x

### Desarrollo

1. Ejecuta `npm install` para instalar las dependencias del servidor.

2. Configura el entorno
```shell
$ cp .env.example .env
```

3. Actualiza `.env` con la información requerida

4. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

