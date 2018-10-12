import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import {ActivatedRoute} from '@angular/router'
import { IEvent } from './shared/index';

@Component({
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit{
 
  events:IEvent[]

    constructor(private route:ActivatedRoute,private eventService: EventsService){
      }
    handlerClickedEvent(data){
      console.log('recieved ',data)
   //   toastr.success(data)
    }
    
    ngOnInit() {
    this.events=this.route.snapshot.data['events'] 
    }
    
    handleThumbnailClick(EventName){
     // this.toastr.success(EventName)
    console.log(EventName)
    }
}
