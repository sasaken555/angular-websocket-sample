'use strict';
const express = require('express');
const app = express();
const PORT = process.env.PORT || '8000';
const EventEmitter = require('events');

// WebHook endpoint
class WebHookEmitter extends EventEmitter {}
const em = new WebHookEmitter();
app.get('/webhook', (req, res) => {
    em.emit('event', 'event arrived');
    res.status(202).send('OK.');
});
const server = app.listen(PORT, () => {
    console.log('web application server started at port = %s', PORT);
});

// WebSocket Entry Point
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });
wss.on('connection', ws => {
    // connection event
    ws.send('connected!');

    // event handler
    em.on('event', payload => {
        console.log(`event payload: ${payload}`);
        ws.send(payload);
    })
});
