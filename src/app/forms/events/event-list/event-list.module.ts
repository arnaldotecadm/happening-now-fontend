import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { EventListComponent } from './event-list.component';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [EventListComponent]
})
export class EventListModule { }
