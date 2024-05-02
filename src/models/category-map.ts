export const categoryMap = {
    "mens-clothing": "men's clothing",
    "womens-clothing": "women's clothing",
};

export type CategoryMapKey = keyof typeof categoryMap;
//type safe access for keys in the map