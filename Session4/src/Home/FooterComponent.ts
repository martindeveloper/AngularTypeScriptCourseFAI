import { Component, Input } from "@angular/core";

@Component({
    selector: "footer-component",
    template: "<footer class=\"footer\">&copy; {{CurrentYear}} - {{CopyName}}</footer>"
})
export class FooterComponent {
    public CurrentYear: number;
    @Input() public CopyName: string;

    public constructor() {
        this.CurrentYear = (new Date()).getFullYear();
        this.CopyName = "Not filled";
    }
}