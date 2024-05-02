export function truncate(paragraph:string, maxlength:number) {
    return `${paragraph.substring(0, maxlength)} ...`;
}
