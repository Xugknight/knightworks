// Bookbound
import bb800 from "../assets/projects/bookbound/bookbound-800.webp";
import bb1200 from "../assets/projects/bookbound/bookbound-1200.webp";

// Quick Notes
import qn800 from "../assets/projects/quick-notes/quick-notes-800.webp";
import qn1200 from "../assets/projects/quick-notes/quick-notes-1200.webp";

// Elden Memory
import em800 from "../assets/gallery/eldenmemory/eldenmemoryhome-800.webp";
import em1200 from "../assets/gallery/eldenmemory/eldenmemoryhome-1200.webp";

// Write That Down
import wtd800 from "../assets/projects/wtd/light-800.webp"
import wtd1200 from "../assets/projects/wtd/light-1200.webp"

export const projectImages = {
    "bookbound": {
        hero: {
            src: bb1200,
            srcSet: `${bb800} 800w, ${bb1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Bookbound – reading list app screenshot",
        },
    },
    "quick-notes": {
        hero: {
            src: qn1200,
            srcSet: `${qn800} 800w, ${qn1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Quick Notes – notes app screenshot",
        },
    },
    "eldenmemory": {
        hero: {
            src: em1200,
            srcSet: `${em800} 800w, ${em1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "Elden Ring styled memory card matching game",
        },
    },
    "wtd": {
        hero: {
            src: wtd1200,
            srcSet: `${wtd800} 800w, ${wtd1200} 1200w`,
            sizes: "(max-width: 768px) 92vw, 1200px",
            alt: "A fast, offline-friendly scratchpad",
        },
    },
};