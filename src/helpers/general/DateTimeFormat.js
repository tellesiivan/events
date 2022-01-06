const lang = navigator.language;

export default function DateTimeFormat(date) {
  const options = {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleTimeString(`${lang}`, options);
}
