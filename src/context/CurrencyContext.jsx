import { createContext, useContext, useState } from "react";

export const currencies = [
  { code: "USD", label: "US Dollar",       symbol: "$",   rate: 1 },
  { code: "GBP", label: "British Pound",   symbol: "£",   rate: 0.79 },
  { code: "EUR", label: "Euro",            symbol: "€",   rate: 0.92 },
  { code: "CAD", label: "Canadian Dollar", symbol: "CA$", rate: 1.37 },
];

const defaultValue = {
  currency: currencies[0],
  setCurrency: () => {},
  convert: (amountUsd) => amountUsd,
  format: (amountUsd) => `$${amountUsd}`,
};

const CurrencyContext = createContext(defaultValue);

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(currencies[0]);

  function setCurrency(codeOrCurrency) {
    const next =
      typeof codeOrCurrency === "string"
        ? currencies.find((c) => c.code === codeOrCurrency) ?? currencies[0]
        : codeOrCurrency;
    setCurrencyState(next);
  }

  function convert(amountUsd) {
    return amountUsd * currency.rate;
  }

  function format(amountUsd, { decimals = 0 } = {}) {
    const converted = convert(amountUsd);
    return `${currency.symbol}${converted.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
