import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    // Make sure currency is lowercase for API call
    const currencyLower = currency.toLowerCase();
    
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyLower}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("API Response:", res);
        if (res && res[currencyLower]) {
          setData(res[currencyLower]);
          console.log("Currency data fetched successfully");
        } else {
          console.error("Invalid API response structure:", res);
          setData({});
        }
      })
      .catch(error => {
        console.error("Error fetching currency data:", error);
        setData({});
      });
  }, [currency]);
  
  return data;
}

export default useCurrencyInfo;