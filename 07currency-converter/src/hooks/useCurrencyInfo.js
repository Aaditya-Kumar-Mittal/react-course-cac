import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const result = await response.json();
        setData(result[currency] || {}); // Ensure we only set valid data
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({}); // Reset data in case of an error
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

