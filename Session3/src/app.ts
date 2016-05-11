// Angular2
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

// Components
import { HomeComponent } from './Home/HomeComponent';
import { FooterComponent } from './Home/FooterComponent';
import { UserComponent } from './User/UserComponent';

// Services
import { ConfigService } from './ConfigService';

@Component({
  selector: "app-component",
  templateUrl: "partials/app.html",
  directives:  [UserComponent, FooterComponent]
})
class AppComponent {
  public GlobalName: string = "UTB Angular2 Course";
}

bootstrap(AppComponent, [ConfigService]);