export function calcWidth(amount: number) {
    if (amount === 0) {
        return '100%';
    }
    return `${100 / amount}%`;
}