import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventService } from '../events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {

  eventList$!: Observable<any>

  constructor(private router: Router, private eventService: EventService) { }

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

  seeDetail(item: any) {
    this.router.navigate(["events/" + item.id]);
  }
}
