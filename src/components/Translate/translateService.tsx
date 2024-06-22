export const translateText = async (text: string, inputLanguage: string, outputLanguage: string): Promise<string> => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(text)}`;
    const response = await fetch(url);
    const json = await response.json();
    return json[0].map((item: any) => item[0]).join("");
}
