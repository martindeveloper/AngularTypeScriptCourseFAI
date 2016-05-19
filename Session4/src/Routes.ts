import { HomeComponent } from "./Home/HomeComponent";
import { UserComponent } from "./User/UserComponent";
import { LookupRateComponent } from "./ExchangeRates/LookupRateComponent";

export const RoutesDefinition = [
    { path: "/", component: HomeComponent },
    { path: "/users", component: UserComponent },
    { path: "/exchange-rates/lookup", component: LookupRateComponent }
];