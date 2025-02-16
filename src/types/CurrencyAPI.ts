export interface Rates {
  [key: string]: {
    name: string,
    rate: number,
    flagUrl: string
  };
};

export const currencyData: Record<string, { name: string; code: string }> = {
  AUD: { name: "Australian Dollar", code: "AU" },
  BGN: { name: "Bulgarian Lev", code: "BG" },
  BRL: { name: "Brazilian Real", code: "BR" },
  CAD: { name: "Canadian Dollar", code: "CA" },
  CHF: { name: "Swiss Franc", code: "CH" },
  CNY: { name: "Chinese Yuan", code: "CN" },
  CZK: { name: "Czech Koruna", code: "CZ" },
  DKK: { name: "Danish Krone", code: "DK" },
  EUR: { name: "Euro", code: "EU" },
  GBP: { name: "British Pound", code: "GB" },
  HKD: { name: "Hong Kong Dollar", code: "HK" },
  HRK: { name: "Croatian Kuna", code: "HR" },
  HUF: { name: "Hungarian Forint", code: "HU" },
  IDR: { name: "Indonesian Rupiah", code: "ID" },
  ILS: { name: "Israeli New Shekel", code: "IL" },
  INR: { name: "Indian Rupee", code: "IN" },
  ISK: { name: "Icelandic Krona", code: "IS" },
  JPY: { name: "Japanese Yen", code: "JP" },
  KRW: { name: "South Korean Won", code: "KR" },
  MXN: { name: "Mexican Peso", code: "MX" },
  MYR: { name: "Malaysian Ringgit", code: "MY" },
  NOK: { name: "Norwegian Krone", code: "NO" },
  NZD: { name: "New Zealand Dollar", code: "NZ" },
  PHP: { name: "Philippine Peso", code: "PH" },
  PLN: { name: "Polish Zloty", code: "PL" },
  RON: { name: "Romanian Leu", code: "RO" },
  RUB: { name: "Russian Ruble", code: "RU" },
  SEK: { name: "Swedish Krona", code: "SE" },
  SGD: { name: "Singapore Dollar", code: "SG" },
  THB: { name: "Thai Baht", code: "TH" },
  TRY: { name: "Turkish Lira", code: "TR" },
  USD: { name: "United States Dollar", code: "US" },
  ZAR: { name: "South African Rand", code: "ZA" },
  VND: { name: "Vietnamese Dong", code: "VN" }
};


export const testData = {
  "AUD": {
      "name": "Australian Dollar",
      "rate": 1.5742101861,
      "flagUrl": "https://flagsapi.com/AU/flat/64.png"
  },
  "BGN": {
      "name": "Bulgarian Lev",
      "rate": 1.8674202585,
      "flagUrl": "https://flagsapi.com/BG/flat/64.png"
  },
  "BRL": {
      "name": "Brazilian Real",
      "rate": 5.7146209777,
      "flagUrl": "https://flagsapi.com/BR/flat/64.png"
  },
  "CAD": {
      "name": "Canadian Dollar",
      "rate": 1.418340257,
      "flagUrl": "https://flagsapi.com/CA/flat/64.png"
  },
  "CHF": {
      "name": "Swiss Franc",
      "rate": 0.8995401037,
      "flagUrl": "https://flagsapi.com/CH/flat/64.png"
  },
  "CNY": {
      "name": "Chinese Yuan",
      "rate": 7.26488105,
      "flagUrl": "https://flagsapi.com/CN/flat/64.png"
  },
  "CZK": {
      "name": "Czech Koruna",
      "rate": 23.834163673,
      "flagUrl": "https://flagsapi.com/CZ/flat/64.png"
  },
  "DKK": {
      "name": "Danish Krone",
      "rate": 7.1092108636,
      "flagUrl": "https://flagsapi.com/DK/flat/64.png"
  },
  "EUR": {
      "name": "Euro",
      "rate": 0.9525101565,
      "flagUrl": "https://flagsapi.com/EU/flat/64.png"
  },
  "GBP": {
      "name": "British Pound",
      "rate": 0.7945001393,
      "flagUrl": "https://flagsapi.com/GB/flat/64.png"
  },
  "HKD": {
      "name": "Hong Kong Dollar",
      "rate": 7.782401313,
      "flagUrl": "https://flagsapi.com/HK/flat/64.png"
  },
  "HRK": {
      "name": "Croatian Kuna",
      "rate": 6.725801142,
      "flagUrl": "https://flagsapi.com/HR/flat/64.png"
  },
  "HUF": {
      "name": "Hungarian Forint",
      "rate": 383.3045137166,
      "flagUrl": "https://flagsapi.com/HU/flat/64.png"
  },
  "IDR": {
      "name": "Indonesian Rupiah",
      "rate": 16264.681535407,
      "flagUrl": "https://flagsapi.com/ID/flat/64.png"
  },
  "ILS": {
      "name": "Israeli New Shekel",
      "rate": 3.5400403713,
      "flagUrl": "https://flagsapi.com/IL/flat/64.png"
  },
  "INR": {
      "name": "Indian Rupee",
      "rate": 86.6914164467,
      "flagUrl": "https://flagsapi.com/IN/flat/64.png"
  },
  "ISK": {
      "name": "Icelandic Krona",
      "rate": 140.7226959381,
      "flagUrl": "https://flagsapi.com/IS/flat/64.png"
  },
  "JPY": {
      "name": "Japanese Yen",
      "rate": 152.2667154493,
      "flagUrl": "https://flagsapi.com/JP/flat/64.png"
  },
  "KRW": {
      "name": "South Korean Won",
      "rate": 1437.7355608007,
      "flagUrl": "https://flagsapi.com/KR/flat/64.png"
  },
  "MXN": {
      "name": "Mexican Peso",
      "rate": 20.3027825512,
      "flagUrl": "https://flagsapi.com/MX/flat/64.png"
  },
  "MYR": {
      "name": "Malaysian Ringgit",
      "rate": 4.4409005318,
      "flagUrl": "https://flagsapi.com/MY/flat/64.png"
  },
  "NOK": {
      "name": "Norwegian Krone",
      "rate": 11.1238112524,
      "flagUrl": "https://flagsapi.com/NO/flat/64.png"
  },
  "NZD": {
      "name": "New Zealand Dollar",
      "rate": 1.745090189,
      "flagUrl": "https://flagsapi.com/NZ/flat/64.png"
  },
  "PHP": {
      "name": "Philippine Peso",
      "rate": 57.7290204764,
      "flagUrl": "https://flagsapi.com/PH/flat/64.png"
  },
  "PLN": {
      "name": "Polish Zloty",
      "rate": 3.9650504737,
      "flagUrl": "https://flagsapi.com/PL/flat/64.png"
  },
  "RON": {
      "name": "Romanian Leu",
      "rate": 4.7412806785,
      "flagUrl": "https://flagsapi.com/RO/flat/64.png"
  },
  "RUB": {
      "name": "Russian Ruble",
      "rate": 91.3416028806,
      "flagUrl": "https://flagsapi.com/RU/flat/64.png"
  },
  "SEK": {
      "name": "Swedish Krona",
      "rate": 64.6908113656,
      "flagUrl": "https://flagsapi.com/SE/flat/64.png"
  },
  "SGD": {
      "name": "Singapore Dollar",
      "rate": 1.3380102004,
      "flagUrl": "https://flagsapi.com/SG/flat/64.png"
  },
  "THB": {
      "name": "Thai Baht",
      "rate": 33.6448350566,
      "flagUrl": "https://flagsapi.com/TH/flat/64.png"
  },
  "TRY": {
      "name": "Turkish Lira",
      "rate": 36.231076128,
      "flagUrl": "https://flagsapi.com/TR/flat/64.png"
  },
  "USD": {
      "name": "United States Dollar",
      "rate": 1,
      "flagUrl": "https://flagsapi.com/US/flat/64.png"
  },
  "ZAR": {
      "name": "South African Rand",
      "rate": 18.311932819,
      "flagUrl": "https://flagsapi.com/ZA/flat/64.png"
  }
}