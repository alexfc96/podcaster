export function formatDate(originalDate: string) {
    const date = new Date(originalDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}

export function formatMinutes(time: number) {
    if(!time) return 'Unspecified time'
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);

    if(minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const leftMinutes = minutes % 60;
        return `${hours}h:${leftMinutes} minutes`;
    }
    return `${minutes}:${seconds.padStart(2, '0')} minutes`;
}