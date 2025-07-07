export function formatDate(date) {
    return new Date(date).toLocaleTimeString("en-us",
        {
            hours: "2-digit",
            minutes: "2-digit",
            hour12: false,
        }
    )
}