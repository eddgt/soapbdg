## Clase 1 Proyecto BDG Nodejs 2

### para ejecutar aplicacion

#### abrir directorio del proyecto

1 cd soapbdg

#### instalar dependencias

2 npm install

#### iniciar servidor http

3 npm start o nodemon app.js

#### agregar info a redis db

sadd lista:desa 1

hmset endpoint1:desa ip localhost port 8088 endpoint /{idService} method POST wsdl http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL

sadd lista:test 1

hmset endpoint1:test ip localhost port 8088 endpoint /{idService} method POST wsdl http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL
