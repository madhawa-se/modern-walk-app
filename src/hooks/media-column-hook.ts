import { useEffect, useState } from "react";

export interface BreakColumn {
    size: string;
    count: number;
}

function getMqls(columnQueries: BreakColumn[]) {
    const queryMap = columnQueries.map((query: BreakColumn) => {
        const queryStr = `(min-width: ${query.size})`;
        return { queryStr, columns: query.count }
    });
    const mQueries = columnQueries.map((query: BreakColumn) => window.matchMedia(`(min-width : ${query.size})`));
    return {
        mQueries, queryMap
    }
}



export function useMediaQuery(columnQueries:BreakColumn[]) {

    const { mQueries, queryMap } = getMqls(columnQueries);
    console.log("queryMap ", queryMap);
    const [matchCoulmn, setMatches] = useState(queryMap[0]);


    const mediaTrigger = (event: any) => {
        console.log("event ", event);
        const mappedItem = queryMap.find(mItem => {
            console.log("checking ", mItem.queryStr, event.media);
            return mItem.queryStr === event.media
        });
        if (mappedItem) {
            setMatches(mappedItem);
        }
    }

    useEffect(() => {
        for (let i = 0; i < mQueries.length; i++) {
            mQueries[i].addListener(mediaTrigger)
        }
        return () => {
            for (let i = 0; i < mQueries.length; i++) {
                mQueries[i].removeListener(mediaTrigger);
            }
        };
    }, []);

    return matchCoulmn;
}