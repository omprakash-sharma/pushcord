import {NgModule} from "@angular/core";
import {CommunicationComponent} from "./communication.component";

import {NgDraggableDirective} from "../../shared/directives/ng-draggable/ng-draggable.directive";
import {ChatComponent} from "./chat/chat.component";
import {VideoComponent} from "./video-chat/video-chat.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {SharedModule} from "../../shared/shared.module";
import {CustomMaterialModule} from "./custom-material.module";

@NgModule({
  imports: [
    SharedModule,
    CustomMaterialModule
  ],
  declarations: [CommunicationComponent, NgDraggableDirective, ChatComponent, VideoComponent, TransactionComponent],
  exports: [CommunicationComponent]
})
export class CommunicationModule {
}
