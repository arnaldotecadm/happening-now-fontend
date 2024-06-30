import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { EventService } from '../events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent {

  event$!: Observable<any>
  identifier?: string | null;

  constructor(private eventService: EventService,
    private route: ActivatedRoute,
  ) {
    this.loadData()
  }

  loadData() {
    this.identifier = this.route.snapshot.paramMap.get("identifier");
    console.log(this.identifier)
    this.event$ = this.eventService.getById(this.identifier!!)
      .pipe(tap(data => console.log(data)))
  }
}
