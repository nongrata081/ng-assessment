export interface ExampleSharedEntity {
	prop: string;
}

export type Currency = 'EUR' | 'GBP' | 'USD';

export interface Value {
	currency: Currency;
	value: number;
}

export interface Package {
	name: string;
	weight: number | string;
	value: number | Value;
}

export interface CurrencyRates {
	base: Currency;
	rates: CurrencyConversionRates;
}

export interface CurrencyConversionRates {
	GBP?: string;
	USD?: string;
}

export interface Shipment {
	packages: Package[];
}
