// Bookbound
import bb800 from "../assets/projects/bookbound/bookbound-800.webp";
import bb1200 from "../assets/projects/bookbound/bookbound-1200.webp";

// Quick Notes
import qn800 from "../assets/projects/quick-notes/quick-notes-800.webp";
import qn1200 from "../assets/projects/quick-notes/quick-notes-1200.webp";

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
};