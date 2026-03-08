export default function calculateTime(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let diff = Math.floor((now - start) / 1000);

  const years = Math.floor(diff / (365 * 24 * 60 * 60));
  diff %= 365 * 24 * 60 * 60;

  const months = Math.floor(diff / (30 * 24 * 60 * 60));
  diff %= 30 * 24 * 60 * 60;

  const days = Math.floor(diff / (24 * 60 * 60));
  diff %= 24 * 60 * 60;

  const hours = Math.floor(diff / (60 * 60));
  diff %= 60 * 60;

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  return { years, months, days, hours, minutes, seconds };
}