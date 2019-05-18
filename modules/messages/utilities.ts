import distanceInWords from "date-fns/distance_in_words";

export function truncate(
  words: string,
  truncateLen: number,
  trailingElem?: any
) {
  if (words.length > truncateLen) {
    const wordCount = words.split(" ").length;
    const returnSet = words.slice(0, truncateLen);
    console.log("word count:", wordCount);
    return `${returnSet} ${trailingElem}`; //  ? trailingElem : "...";
  } else {
    return words;
  }
}

export const getTimeWords = (dateString: string) => {
  return distanceInWords(new Date(dateString), new Date()).toUpperCase();
};
