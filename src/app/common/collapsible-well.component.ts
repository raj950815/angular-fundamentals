import { Component } from "@angular/core";

@Component({
selector:'collapsible-well',
template:`
<div (click)="toggleContent()" class="well poitable">
<h4>
<ng-content select="[well-title]"></ng-content>
</h4>
<ng-content *ngIf="visisble" select="[well-body]"></ng-content>
</div>
`
})
export class CollapsibleWellComponent {
visisble: boolean = true;

toggleContent(){
    this.visisble = !this.visisble;
}
}