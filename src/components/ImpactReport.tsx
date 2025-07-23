import { RadarChart } from "./RadarChart";
import { VisibilityCard } from "./VisibilityCard";
import { InteractionsCard } from "./InteractionsCard";
import { VisitsCard } from "./VisitsCard";
import { PurchasesCard } from "./PurchasesCard";
import { ReviewsCard } from "./ReviewsCard";
import { NudgeBox } from "./NudgeBox";
import { ExportButton } from "./ExportButton";

export const ImpactReport = () => {
  // Mock data for the report
  const radarData = {
    store: [85, 75, 90, 70, 95],
    network: [70, 65, 75, 60, 80]
  };

  const nudgeMessage = "¡Buen trabajo! Tus reseñas positivas te ponen en el 1% de la red de Heladerías el Coquito.";

  return (
    <div className="min-h-screen bg-impact-bg text-impact-text">
      {/* Header */}
      <div className="px-4 py-6 border-b border-impact-border">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-impact-text">Reporte de Impacto</h1>
            <p className="text-impact-secondary text-sm">Heladerías el Coquito - Sucursal Centro</p>
          </div>
          <ExportButton />
        </div>
        <div className="text-impact-secondary text-sm">
          Período: Octubre 2024
        </div>
      </div>

      {/* Spider Web Chart Section */}
      <div className="px-4 py-6">
        <div className="bg-impact-card rounded-xl p-6 border border-impact-border">
          <h2 className="text-lg font-semibold text-impact-header mb-4">
            Tu Desempeño vs Red Nacional
          </h2>
          <RadarChart data={radarData} />
        </div>
      </div>

      {/* Nudge Box */}
      <div className="px-4 pb-6">
        <NudgeBox message={nudgeMessage} />
      </div>

      {/* Metric Cards */}
      <div className="space-y-4 px-4 pb-8">
        <VisibilityCard />
        <InteractionsCard />
        <VisitsCard />
        <PurchasesCard />
        <ReviewsCard />
      </div>
    </div>
  );
};