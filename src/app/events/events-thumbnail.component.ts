import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'events-thumbnail',
  templateUrl:'./events-thumbnail.component.html',
  styles: [`
  .bold{font-weight:bold;}
  .green{color:#003300 !important;}
  .thumbnail{min-height:210px;}
  .pad-left{margin-left:10pz;}
  .wel div{color:#bbb;}
  `]
})
export class EventsThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
someproperties:any="some data"

  @Input() event:IEvent
  @Output() eventClick=new EventEmitter()
  handlerClickMe(){
      console.log('clicked');
      this.eventClick.emit('foo') 
  }

  logfoo(){
    console.log('foo')
  }

  getSmartTimeClass(){
   if(this.event && this.event.time === '8:00 am')
    return ['green','bold']
    return []
  }

  getSmartTimeStyle():any{
    if(this.event && this.event.time === '8:00 am')
    return {color:'#003300','font-weight':'bold'}
    return {}
  }
}