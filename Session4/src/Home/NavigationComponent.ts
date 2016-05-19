import { Component, Input } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: "navigation-component",
    templateUrl: "partials/navigation.html",
    directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent {
}