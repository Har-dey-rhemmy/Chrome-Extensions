const article = document.querySelector("article");

if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1");
    // @ts-ignore
    const date = article.querySelector("time")?.parentNode;
    // eslint-disable-next-line
    (date ?? heading).insertAdjacentElement("afterend", badge);
}