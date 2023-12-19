"use client"

// import { useEffect } from "react";
// import DesignObjectivesPage from "./components/designobjectives";
// import EligibilityPage from "./components/eligibility";
// import LibrariesPage from "./components/homepage";
// import PrizesPage from "./components/prizes";
// import SubmitDesignsPage from "./components/submityourdesign";

// export default function Home() {
//   return (
//     <body>
//       <LibrariesPage />
//       <DesignObjectivesPage />
//       <PrizesPage />
//       <EligibilityPage />
//       <SubmitDesignsPage />
//     </body>

//   );
// }

import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import DesignObjectivesPage from "./components/designobjectives";
import EligibilityPage from "./components/eligibility";
import LibrariesPage from "./components/homepage";
import PrizesPage from "./components/prizes";
import SubmitDesignsPage from "./components/submityourdesign";


export default function Home() {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const delta = event.deltaY;
      const sectionHeight = window.innerHeight;

      if (delta > 0) {
        // Scrolling down
        scroll.scrollMore(sectionHeight, {
          duration: 500,
          smooth: "easeInOut",
        });
      } else if (delta < 0) {
        // Scrolling up
        scroll.scrollMore(-sectionHeight, {
          duration: 500,
          smooth: "easeInOut",
        });
      }
      // You can add custom logic here for scrolling in either direction if needed
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const sectionHeight = window.innerHeight;

      if (event.key === "ArrowDown") {
        // Scrolling down
        scroll.scrollMore(sectionHeight, {
          duration: 500,
          smooth: "easeInOut",
        });
      } else if (event.key === "ArrowUp") {
        // Scrolling up
        scroll.scrollMore(-sectionHeight, {
          duration: 500,
          smooth: "easeInOut",
        });
      }
      // You can add custom logic here for scrolling in either direction if needed
    };

    // Add the event listeners for wheel and keydown
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Remove the event listeners when the component is unmounted
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <body>
      {/* Content Sections */}
      <section id="libraries">
        <LibrariesPage />
      </section>
{/* 
      <section id="designObjectives">
        <DesignObjectivesPage selectedLanguage={"english"} />
      </section> */}

      {/* <section id="prizes">
        <PrizesPage />
      </section> */}

      {/* <section id="eligibility">
        <EligibilityPage />
      </section> */}

      {/* <section id="submitDesigns">
        <SubmitDesignsPage />
      </section> */}
    </body>
  );
}







// import { useEffect } from "react";
// import { animateScroll as scroll } from "react-scroll";
// import DesignObjectivesPage from "./components/designobjectives";
// import EligibilityPage from "./components/eligibility";
// import LibrariesPage from "./components/homepage";
// import PrizesPage from "./components/prizes";
// import SubmitDesignsPage from "./components/submityourdesign";

// export default function Home() {
//   useEffect(() => {
//     const handleScroll = (event: WheelEvent) => {
//       const delta = event.deltaY;
//       const sectionHeight=window.innerHeight;
//       if (delta > 0) {
       
//         // Scrolling down
//         scroll.scrollMore(sectionHeight, {
//           duration: 500,
//           smooth: "easeInOut",
//         });
//       }
//       else if (delta < 0) {
//         // Scrolling up
//         scroll.scrollMore(-sectionHeight, {
//           duration: 500,
//           smooth: "easeInOut",
//         });
//       }



//       // You can add custom logic here for scrolling up if needed
//     };

//     // Add the event listener for mouse wheel scrolling
//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       // Remove the event listener when the component is unmounted
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <body>
//       {/* Content Sections */}
//       <section id="libraries">
//         <LibrariesPage />
//       </section>

//       <section id="designObjectives">
//         <DesignObjectivesPage />
//       </section>

//       <section id="prizes">
//         <PrizesPage />
//       </section>

//       <section id="eligibility">
//         <EligibilityPage />
//       </section>

//       <section id="submitDesigns">
//         <SubmitDesignsPage />
//       </section>
//     </body>
//   );
// }

