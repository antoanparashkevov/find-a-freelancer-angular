import {animate, query, style, transition, trigger} from "@angular/animations";

export const fader = 
    
    trigger('childRouterAnimation', [
        transition('*<=>*', [
            query(':enter, :leave', [
                style({//both states will be hidden on initial load
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'
                })
            ]),
            query(':enter', [
                animate('600ms ease', 
                    style({
                        opacity: 1,
                        transform: 'scale(1) translateY(0)',
                        
                    })
                )
            ])
        ])
    ])