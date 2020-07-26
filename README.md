# Angular WebSocket Sample

![アプリサンプル画面](https://user-images.githubusercontent.com/16136760/88475849-a46a3f00-cf6e-11ea-8b06-5c29e18f831e.png)

## About

WebSocketで通信するクライアント・サーバーアプリのサンプルです。

それぞれの実装は以下の通りです。
* クライアント ... Angular, RxJS (WebSocketクライアント)
* サーバー ... WebSocket([websockets/ws](https://github.com/websockets/ws)) & REST APIサーバー

![アプリ構成](https://user-images.githubusercontent.com/16136760/88475878-dbd8eb80-cf6e-11ea-99e1-b2d0ee1341b9.png)

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
