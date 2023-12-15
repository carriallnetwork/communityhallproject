"use client"

import DesignObjectivesPage from "./components/designobjectives";
import EligibilityPage from "./components/eligibility";
import LibrariesPage from "./components/homepage";
import PrizesPage from "./components/prizes";
import SubmitDesignsPage from "./components/submityourdesign";

export default function Home() {
  return (
    <body>
      <LibrariesPage />
      <DesignObjectivesPage />
      <PrizesPage />
      <EligibilityPage />
      <SubmitDesignsPage />
    </body>

  );
}
