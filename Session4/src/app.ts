// Angular2
import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component, OnInit } from "@angular/core";
import { Router, Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from "@angular/router";

// Routes
import { RoutesDefinition } from "./Routes";

// Components
import { FooterComponent } from "./Home/FooterComponent";
import { NavigationComponent } from "./Home/NavigationComponent";

// Services
import { ConfigService } from "./ConfigService";

@Component({
  selector: "app-component",
  templateUrl: "partials/app.html",
  directives: [ROUTER_DIRECTIVES, FooterComponent, NavigationComponent]
})
@Routes(RoutesDefinition)
class AppComponent implements OnInit {
  public GlobalName: string = "UTB Angular2 Course";

  public constructor(private Router: Router) {
  }

  public ngOnInit() {
    this.Router.navigate(["/"]);
  }
}

bootstrap(AppComponent, [ConfigService, ROUTER_PROVIDERS]);