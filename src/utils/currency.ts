export const toLKR = (usd: number) => {
    //Just a simple converter not a real one 
    const exchangeRate = 297;
    //Todays [5/2] Rate 
    const lkr = usd * exchangeRate;
    return `Rs. ${Math.floor(lkr)}`;
};