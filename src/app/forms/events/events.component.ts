import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventList$!: Observable<any>

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.eventService.getAll()
      .subscribe((data: any) => {
        this.eventList$ = of(data.content)
        console.log(data.content)
      })
  }
}
