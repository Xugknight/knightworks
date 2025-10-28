// Eldenmemory
import elden800 from "../assets/gallery/eldenmemory/eldenmemoryhome-800.webp";
import elden1200 from "../assets/gallery/eldenmemory/eldenmemoryhome-1200.webp";
import emex1800 from "../assets/gallery/eldenmemory/emex1-800.webp"
import emex11200 from "../assets/gallery/eldenmemory/emex1-1200.webp"
import emex2800 from "../assets/gallery/eldenmemory/emex2-800.webp"
import emex21200 from "../assets/gallery/eldenmemory/emex2-1200.webp"

// Finch Collector
import finchDetail800 from "../assets/gallery/finchcollector/finchdetail-800.webp";
import finchDetail1200 from "../assets/gallery/finchcollector/finchdetail-1200.webp";
import finchHome800 from "../assets/gallery/finchcollector/finchhomepage-800.webp";
import finchHome1200 from "../assets/gallery/finchcollector/finchhomepage-1200.webp";
import finchIndex800 from "../assets/gallery/finchcollector/finchindex-800.webp";
import finchIndex1200 from "../assets/gallery/finchcollector/finchindex-1200.webp";
import finchToys800 from "../assets/gallery/finchcollector/finchtoylist-800.webp";
import finchToys1200 from "../assets/gallery/finchcollector/finchtoylist-1200.webp";

export const galleryImages = {
    eldenmemory: [
        {
            src: elden1200,
            srcSet: `${elden800} 800w, ${elden1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory — homepage",
        },
        {
            src: emex11200,
            srcSet: `${emex1800} 800w, ${emex11200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory example with some cards flipped",
        },
        {
            src: emex21200,
            srcSet: `${emex2800} 800w, ${emex21200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory win screen",
        },
    ],
    finchcollector: [
        {
            src: finchHome1200,
            srcSet: `${finchHome800} 800w, ${finchHome1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — homepage",
        },
        {
            src: finchIndex1200,
            srcSet: `${finchIndex800} 800w, ${finchIndex1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — index",
        },
        {
            src: finchDetail1200,
            srcSet: `${finchDetail800} 800w, ${finchDetail1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — detail",
        },
        {
            src: finchToys1200,
            srcSet: `${finchToys800} 800w, ${finchToys1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — toy list",
        },
    ],
};