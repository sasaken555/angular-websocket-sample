import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  connect(): Subject<string> {
    // webSocketのdeserializerはデフォルトでJSON.parseが適用される。
    // 単純なstring型のレスポンスを受け取る場合は下記のようにカスタムのdeserializerを作成
    // TODO: 接続エラー時に再接続
    return webSocket({
      url: "ws://127.0.0.1:8000/",
      deserializer: ({ data }) => data
    });
  }
}
