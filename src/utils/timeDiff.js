export function getTimeElapsed(postDate) {
    const datePosted = new Date(postDate);
    const now = new Date();
    const milliseconds = Math.floor(now - datePosted);
    const seconds = Math.floor(milliseconds / 1000);

    if (seconds > 59) {
        const minutes = Math.floor(seconds / 60);
        if (minutes > 59) {
            const hours = Math.floor(minutes / 60);
            if (hours > 23) {
                return datePosted.toLocaleDateString("en-us", {
                    day: "numeric",
                    year: "numeric",
                    month: "short",
                });
            } else {
                return `${hours} h`;
            }
        } else {
            return `${minutes} m`;
        }
    } else {
        return `${seconds} s`;
    }
}
