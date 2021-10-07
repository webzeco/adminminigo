export function filterByPrice(items, price) {
  if (price === "All") return items;
  if (price === "Less than Rs.500") return items.filter((pr) => pr.price < 500);
  if (price === "Rs.500-Rs.1000")
    return items.filter((pr) => pr.price >= 500 && pr.price <= 1000);
  if (price === "Greater then Rs.1000")
    return items.filter((pr) => pr.price > 1000);
  return items;
}
