import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventDetailComponent } from './event-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [EventDetailComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [EventDetailComponent]
})
export class EventDetailModule { }
