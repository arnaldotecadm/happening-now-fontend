import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from "@angular/material/tabs";
import { EventListModule } from './event-list/event-list.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailModule } from './event-detail/event-detail.module';
import { EventDetailComponent } from './event-detail/event-detail.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    EventListModule,
    EventDetailModule
  ],
  exports: [EventListComponent, EventDetailComponent]
})
export class EventsModule { }
