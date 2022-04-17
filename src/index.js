import Alpine from "alpinejs";
window.Alpine = Alpine;
async function fetchData() {
  const resp = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rub.json"
  );
  const data = await resp.json();
  const rub_usd = Math.round(1 / data.rub.usd);
  const rub_eur = Math.round(1 / data.rub.eur);

  Alpine.store("exchange", {
    usd: rub_usd,
    eur: rub_eur,
  });
}

document.addEventListener("alpine:init", () => {
  console.log("alpine:init");
});
document.addEventListener("alpine:init", () => {
  Alpine.store("darkMode", {
    open: true,
  });
});
fetchData().then(() => {
  Alpine.start();
});
