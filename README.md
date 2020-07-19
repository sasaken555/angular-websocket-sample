# Angular WebSocket Sample

## About

WebSocketで通信するクライアント・サーバーアプリのサンプルです。

それぞれの実装は以下の通りです。
* クライアント ... Angular, RxJS (WebSocketクライアント)
* サーバー ... [websockets/ws](https://github.com/websockets/ws) (WebSocketサーバー実装)

## Usage

### クライアント

Web画面の場合
```shell script
cd client
npm ci
npm run build
```

コマンドラインの場合
```shell script
cd client
npx wscat -c ws://localhost:8000
```

### サーバー

```shell script
yarn install
yarn build
```
