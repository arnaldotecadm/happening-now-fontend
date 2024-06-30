import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './forms/events/event-list/event-list.component';
import { EventDetailComponent } from './forms/events/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/events",
    pathMatch: "full"
  },
  {
    path: "events",
    component: EventListComponent
  },
  {
    path: "events/:identifier",
    component: EventDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
