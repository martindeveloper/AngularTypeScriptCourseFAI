import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import { Http, Response, HTTP_PROVIDERS } from "@angular/http";
import { ConfigService } from "../ConfigService";
import { CurrencyEntity } from "./Model/CurrencyEntity";

@Component({
    selector: "exchange-lookup-component",
    templateUrl: "partials/exchange-rates/lookup.html",
    viewProviders: [HTTP_PROVIDERS],
    directives: [NgFor]
})
export class LookupRateComponent {
    public BaseExchangeInput: string;
    public IsSearching: boolean = false;
    public Messages: string[];
    public Rates: Array<CurrencyEntity>;

    public constructor(private HttpService: Http, private Config: ConfigService) {
        this.BaseExchangeInput = "";
        this.Messages = [];
        this.Rates = [];
        this.Messages = [];
    }

    public OnLookupClick(event: Event) {
        this.IsSearching = true;

        this.ClearMessages();
        this.ClearResults();

        if (this.BaseExchangeInput.length === 0 || !this.BaseExchangeInput.trim()) {
            this.OnInvalidUserInput();
            this.OnCompleted();
            return;
        }

        let baseCurrency = this.NormalizeBaseRateInput(this.BaseExchangeInput);

        this.HttpService.get(this.GetAPIEndpointWithOptionalBase(baseCurrency)).subscribe(
            (result) => { this.OnRatesDownloaded(result); },
            (error) => {
                this.OnRatesDownloadFailed(error);
                this.OnCompleted();
            },
            () => { this.OnCompleted(); }
        );
    }

    private GetAPIEndpointWithOptionalBase(base?: string) {
        let endpoint = `${this.Config.ExchangeRates.Endpoint}?${this.Config.ExchangeRates.BaseQuery}`;

        if (base) {
            endpoint += `=${base}`;
        }

        return endpoint;
    }

    private NormalizeBaseRateInput(input: string) {
        return input.toUpperCase().trim();
    }

    private ClearResults() {
        this.Rates.length = 0;
    }

    private ClearMessages() {
        this.Messages.length = 0;
    }

    private OnRatesDownloaded(ratesResponse: Response) {
        let ratesJson = ratesResponse.json();

        if (!ratesJson.rates) {
            this.Messages.push("API returned malformed data!");
            return;
        }

        this.Rates = [];

        for (var key in ratesJson.rates) {
            let value = ratesJson.rates[key];

            this.Rates.push({
                Currency: key,
                Rate: value
            });
        }
    }

    private OnRatesDownloadFailed(errorResponse: Response) {
        this.Messages.push("Failed to query rates API!");
        let errorJson = errorResponse.json();

        if (errorJson.error) {
            this.Messages.push("API error: " + errorJson.error);
        }
    }

    private OnInvalidUserInput() {
        this.Messages.push("Invalid input provided!");
    }

    private OnCompleted() {
        this.IsSearching = false;
    }
}