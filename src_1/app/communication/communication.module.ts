import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommunicationComponent} from "./communication.component";

import {CustomMaterialModule} from "../shared/custom-material.module";
import {NgDraggableDirective} from "../shared/ng-draggable/ng-draggable.directive";
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from "@angular/forms";
import { VideoComponent } from './video-chat/video-chat.component';
import {TransactionComponent} from "./transaction/transaction.component";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule
  ],
  declarations: [CommunicationComponent, NgDraggableDirective, ChatComponent, VideoComponent, TransactionComponent],
  exports: [CommunicationComponent]
})
export class CommunicationModule { }
