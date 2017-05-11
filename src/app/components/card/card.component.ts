import {Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {AnimationBuilder, AnimationService} from "css-animator";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    private animator: AnimationBuilder;

    @Input() animateEvent;

    constructor(animationService: AnimationService, private elementRef: ElementRef) {
        this.animator = animationService.builder();
    }

    ngOnInit() {
        this.animator
            .setType('fadeInUp')
            .setDelay(150)
            .setDuration(700)
            .show(this.elementRef.nativeElement);

    }
    ngOnChanges() {
        if (this.animateEvent)
        this.animateCard(this.animateEvent);
    }
    animateCard(val) {
        this.animator
            .setType(val)
            .setDelay(150)
            .setDuration(700)
            .show(this.elementRef.nativeElement);
    }
}
