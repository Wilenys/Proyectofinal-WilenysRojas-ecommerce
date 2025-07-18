# Proyecto Final Ecommerce 

API REST para gestión de productos con autenticación JWT y almacenamiento en Firestore.

## Requisitos

- Node.js
- Firebase Project configurado con Firestore
- Visual Studio Code

## Instalación

```bash
git clone https://github.com/Wilenys/Proyectofinal-WilenysRojas-ecommerce.git
cd Proyectofinal-WilenysRojas-ecommerce
npm install
```

## Variables de entorno

Crea un archivo `.env` con las siguientes variables:

```
PORT=3000
JWT_SECRET=miclaveultrasecreta
FIREBASE_API_KEY=TU_API_KEY
FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
FIREBASE_PROJECT_ID=TU_PROJECT_ID
FIREBASE_STORAGE_BUCKET=TU_BUCKET
FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
FIREBASE_APP_ID=TU_APP_ID
```

## Comando de ejecución

```bash
npm start
```

## Endpoints

### Auth
- `POST /auth/login`: Devuelve un token si las credenciales son válidas

### Products
- `GET /api/products`: Lista todos los productos
- `GET /api/products/:id`: Obtiene un producto por ID
- `POST /api/products/create`: Crea un nuevo producto (requiere token)
- `DELETE /api/products/:id`: Elimina un producto (requiere token)

## Licencia

MIT
