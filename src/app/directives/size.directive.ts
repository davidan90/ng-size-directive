import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[size]',
})
export class SizeDirective implements OnInit {
    @Input() size: string;
    private _units: string[] = [
        'ch',
        'cm',
        'em',
        'ex',
        'in',
        'mm',
        'pc',
        'pt',
        'px',
        'rem',
        'vh',
        'vmax',
        'vmin',
        'vw',
        '%'
    ];

    constructor(private el: ElementRef) { }

    ngOnInit() {
        const size: string = this.size;
        if (size) {
            this._changeSize(size);
        }
    }

    private _changeSize(size: string): void {
        const unit = this._findUnit(size, this._units.slice());
        this.el.nativeElement.style.width = unit ? size : 'auto';
    }

    private _findUnit(size: string, units: string[]): string {
        return units.find((u: string) => {
            if (size.indexOf(u) >= 0) {
                const sizeSplited: string[] = size.split(u);
                const sizeNumber: number = Number(sizeSplited[0]);
                if (sizeSplited.length == 2 && !isNaN(sizeNumber)) {
                    return true;
                }
            }
        });
    }
}