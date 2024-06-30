import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from "@angular/material/tabs";
import { EventsComponent } from './events.component';


@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [EventsComponent]
})
export class EventsModule { }
