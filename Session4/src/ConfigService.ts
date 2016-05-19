import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
    public IsDebug: boolean = false;
    
    public ExchangeRates = {
        Endpoint: "http://api.fixer.io/latest",
        BaseQuery: "base"
    };
}