import { useEffect } from "react";

function setMeta(name, content) {
    if (!content) return;
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setOG(property, content) {
    if (!content) return;
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}


export default function Meta({
    title,
    description,
    ogImage,
    ogTitle,
    ogDescription,
    canonical
}) {
    useEffect(() => {
        if (title) document.title = title;
        if (description) setMeta("description", description);
        setOG("og:title", ogTitle || title);
        setOG("og:description", ogDescription || description);
        if (ogImage) {
            setOG("og:image", ogImage);
            setMeta("twitter:image", ogImage);
        }
        if (canonical) setLink("canonical", canonical);
    }, [title, description, ogTitle, ogDescription, ogImage, canonical]);

    return null;
}