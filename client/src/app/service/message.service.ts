import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject$: WebSocketSubject<string>;

  connect(): Subject<string> {
    // webSocketのdeserializerはデフォルトでJSON.parseが適用される。
    // 単純なstring型のレスポンスを受け取る場合は下記のようにカスタムのdeserializerを作成
    this.subject$ = webSocket({
      url: "ws://127.0.0.1:8000/",
      deserializer: ({ data }) => JSON.stringify(data)
    });

    // TODO: 接続エラー時に再接続
    return this.subject$;
  }
}
