'use strict'

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/
const  express  =  require ( 'express' ) ;
const  socketIO  =  require ( 'socket.io' ) ;

const  PORT  =  proceso . env . PUERTO  ||  3000 ;
const  INDEX  =  '/index.html' ;

 const servidor =  express ( )
  . use ( ( req ,  res )  =>  res . sendFile ( INDEX ,  {  root : __dirname  } ) )
  . listen ( PORT ,  ( )  =>  console . log ( `Escuchando en $ { PORT } ` ) ) ;

const  io  =  socketIO ( servidor ) ;

io . on ( 'conexión' ,  ( enchufe )  =>  {
  consola . log ( 'Cliente conectado' ) ;
  zócalo . on ( 'desconectar' ,  ( )  =>  consola . log ( 'Cliente desconectado' ) ) ;
} ) ;

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
