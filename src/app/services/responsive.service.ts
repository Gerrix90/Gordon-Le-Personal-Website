import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ResponsiveService {
    private isMobile = new Subject();
    public screenwidth: string;

    constructor() {
        this.checkWidth();
    }

    private onMobileChange = (status: boolean) => {
        this.isMobile.next(status);
    }

    public getMobileStatus = () => {
        return this.isMobile.asObservable();
    }

    public checkWidth = () => {
        let width = window.innerWidth;
        if (width <= 786) {
            this.screenwidth = "sm";
            this.onMobileChange(true);
        } else if (width > 786 && width <= 992) {
            this.screenwidth = "md";
            this.onMobileChange(false);
        } else {
            this.screenwidth = "lg";
            this.onMobileChange(false);
        }
    }
}