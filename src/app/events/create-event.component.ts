import { Component ,OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { EventsService } from "./shared/index";

@Component({
    templateUrl:'./create-event.component.html',
    styles:[`
    em { float:right; color: #E05C65;  padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder{color:#999;}
    .error :-moz-placeholder {color: #999;}
    .error : -moz-placeholder  {color: #999;}
    .error : ms-input-placeholder {color:#999;}
    `]
})
export class CreateEventComponent implements OnInit{
    
    isDirty:boolean=true
    event:any
    constructor (private router:Router, private eventService: EventsService){}

    ngOnInit(): void {
this.event={
    name:'rk',
    date: '20/08/2018',
    time: '12:40pm',
    price: '2000',
    location:{
        address: 'gwalior',
        city: 'gwalior',
        country: 'india'
    },
    onlineUrl: 'www.google.com ',
    imageUrl: 'https://avatars0.githubusercontent.com/u/1?v=4.jpg'
}
    }

    saveEvent(formValues){
       this.eventService.saveEvent(formValues).subscribe(()=>{
       this.isDirty = false
       this.router.navigate(['/events'])
        })
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}