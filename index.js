async function fetchData() {
  const resp = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rub.json"
  );
  const data = await resp.json();
  const date = data.date;
  const rub_usd = Math.round(1 / data.rub.usd);
  const rub_eur = Math.round(1 / data.rub.eur);

  document.addEventListener("alpine:init", () => {
    Alpine.store("data", {
      usd: rub_usd,
      eur: rub_eur,
    });
  });
  console.log(rub_usd);
}
fetchData();
