// Eldenmemory
import elden800 from "../assets/gallery/eldenmemory/eldenmemoryhome-800.webp";
import elden1200 from "../assets/gallery/eldenmemory/eldenmemoryhome-1200.webp";
import emex1800 from "../assets/gallery/eldenmemory/emex1-800.webp";
import emex11200 from "../assets/gallery/eldenmemory/emex1-1200.webp";
import emex2800 from "../assets/gallery/eldenmemory/emex2-800.webp";
import emex21200 from "../assets/gallery/eldenmemory/emex2-1200.webp";
import eldenFail800 from "../assets/gallery/eldenmemory/eldenfailed-800.webp";
import eldenFail1200 from "../assets/gallery/eldenmemory/eldenfailed-1200.webp";

// Finch Collector
import finchDetail800 from "../assets/gallery/finchcollector/finchdetail-800.webp";
import finchDetail1200 from "../assets/gallery/finchcollector/finchdetail-1200.webp";
import finchHome800 from "../assets/gallery/finchcollector/finchhomepage-800.webp";
import finchHome1200 from "../assets/gallery/finchcollector/finchhomepage-1200.webp";
import finchIndex800 from "../assets/gallery/finchcollector/finchindex-800.webp";
import finchIndex1200 from "../assets/gallery/finchcollector/finchindex-1200.webp";
import finchToys800 from "../assets/gallery/finchcollector/finchtoylist-800.webp";
import finchToys1200 from "../assets/gallery/finchcollector/finchtoylist-1200.webp";
import finchAdd800 from "../assets/gallery/finchcollector/finchaddform-800.webp";
import finchAdd1200 from "../assets/gallery/finchcollector/finchaddform-1200.webp";
import finchToyAdd800 from "../assets/gallery/finchcollector/finchtoyform-800.webp";
import finchToyAdd1200 from "../assets/gallery/finchcollector/finchtoyform-1200.webp";
import finchDelete800 from "../assets/gallery/finchcollector/finchconfirmdelete-800.webp";
import finchDelete1200 from "../assets/gallery/finchcollector/finchconfirmdelete-1200.webp";

export const galleryImages = {
    eldenmemory: [
        {
            src: elden1200,
            srcSet: `${elden800} 800w, ${elden1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory — homepage",
            caption: "Home page with new game",
        },
        {
            src: emex11200,
            srcSet: `${emex1800} 800w, ${emex11200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory example with some cards flipped",
            caption: "Showing some flipped cards and failed match counter working",
        },
        {
            src: emex21200,
            srcSet: `${emex2800} 800w, ${emex21200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory win screen",
            caption: "Win condition screen",
        },
        {
            src: eldenFail1200,
            srcSet: `${eldenFail800} 800w, ${eldenFail1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring Memory lose screen",
            caption: "Fail screen showing what happens when you run out of attempts",
        },
    ],
    finchcollector: [
        {
            src: finchHome1200,
            srcSet: `${finchHome800} 800w, ${finchHome1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — homepage",
            caption: "The landing page for Finch Collector",
        },
        {
            src: finchIndex1200,
            srcSet: `${finchIndex800} 800w, ${finchIndex1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — index",
            caption: "Index page showing all current finches",
        },
        {
            src: finchDetail1200,
            srcSet: `${finchDetail800} 800w, ${finchDetail1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — detail",
            caption: "Detail page for a specific finch with more information",
        },
        {
            src: finchToys1200,
            srcSet: `${finchToys800} 800w, ${finchToys1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector — toy list",
            caption: "A list of current toys for the finches",
        },
        {
            src: finchAdd1200,
            srcSet: `${finchAdd800} 800w, ${finchAdd1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector form for adding new finch to database",
            caption: "A form for adding a new finch to the index",
        },
        {
            src: finchToyAdd1200,
            srcSet: `${finchToyAdd800} 800w, ${finchToyAdd1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector form for adding new toy to database",
            caption: "A form for adding new toy to the toy list",
        },
        {
            src: finchDelete1200,
            srcSet: `${finchDelete800} 800w, ${finchDelete1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Finch Collector confirmation page before removing a finch from the database",
            caption: "Confirmation page before removing a finch from the index",
        },
    ],
};