export const updateMilanTime = () => {
    const now = new Date();
    const options = {
        timeZone: "Europe/Rome",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(now);
};