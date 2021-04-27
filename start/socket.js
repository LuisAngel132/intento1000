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

const ws = new WebSocket('ws://https://invernaderoeq5.herokuapp.com//chat')

const Ws = use('Ws')

Ws.channel('chat', 'ChatController')
