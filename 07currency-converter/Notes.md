# Currency Converter

## api link

```javascript
let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
```

## input box

```javascript
function InputBox({
  label,

  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">label</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
```

## app js

```javascript
function App() {


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

```

### Using the Currency API

The Currency API provides exchange rates and currency conversion data in JSON format. You can use it to fetch real-time or historical exchange rates.

---

## 🚀 Steps to Use the API

### 1️⃣ Update the API URL

The old URL format:

```api
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
```

New URL format:

```api
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}
```

---

### 2️⃣ Fetch Exchange Rates Using JavaScript

Here’s how you can fetch exchange rates for a specific currency using `fetch` in JavaScript:

```javascript
async function getExchangeRates(currency) {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(`Exchange rates for ${currency}:`, data[currency]);
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
  }
}

// Example usage
getExchangeRates("usd"); // Fetch exchange rates for USD
```

---

### 3️⃣ Convert Currency

To convert one currency to another, you need to fetch the rates and extract the conversion value.

```javascript
async function convertCurrency(fromCurrency, toCurrency, amount) {
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    let rate = data[fromCurrency][toCurrency];

    if (!rate) {
      console.error("Invalid currency pair.");
      return;
    }

    let convertedAmount = amount * rate;
    console.log(
      `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`
    );
  } catch (error) {
    console.error("Error fetching conversion rate:", error);
  }
}

// Example usage
convertCurrency("usd", "inr", 10); // Convert 10 USD to INR
```

---

### 4️⃣ Using with Fallback Mechanism

To avoid issues in the future, it's recommended to add a fallback URL (Cloudflare CDN) in case the primary URL fails.

```javascript
async function fetchWithFallback(url, fallbackUrl) {
  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error("Primary API failed");
    return await response.json();
  } catch (error) {
    console.warn("Switching to fallback API");
    let fallbackResponse = await fetch(fallbackUrl);
    return await fallbackResponse.json();
  }
}

async function getRatesWithFallback(currency) {
  let primaryUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  let fallbackUrl = `https://api.exchangerate-api.com/v4/latest/${currency}`; // Example fallback URL

  let data = await fetchWithFallback(primaryUrl, fallbackUrl);
  console.log(`Exchange rates for ${currency}:`, data);
}

// Example usage
getRatesWithFallback("usd");
```

---

## 📌 Summary

| Task                              | API URL                         | Example                                                          |
| ------------------------------------- | ----------------------------------- | -------------------------------------------------------------------- |
| Get all exchange rates for a currency | `/currencies/{currencyCode}.json`   | `/currencies/usd.json`                                               |
| Convert currency                      | `/currencies/{fromCurrency}.json`   | Fetch `fromCurrency` data, then use `data[fromCurrency][toCurrency]` |
| Fallback mechanism                    | Use a backup API in case of failure | `https://api.exchangerate-api.com/v4/latest/usd`                     |

---

## 📖 More Resources

- 📜 [API Endpoints](https://github.com/fawazahmed0/exchange-api#endpoints)
- 🔄 [Why Migration is Necessary](https://github.com/fawazahmed0/exchange-api/issues/89)
- 🌐 [Additional Fallback URL](https://github.com/fawazahmed0/exchange-api/blob/main/README.md#additional-fallback-url-on-cloudflare)

Would you like a working React example as well? 🚀
