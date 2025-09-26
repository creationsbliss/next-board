import Card from "@/components/card/Card";
import Chart from "@/components/chart/Chart";
import RightWidget from "@/components/right-widget/RightWidget";
import Transaction from "@/components/transaction/Transaction";

const DashboardPage = () => (
  <div className="mt-4 flex gap-4">
    <div className="flex flex-3 flex-col gap-4">
      <div className="flex gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Transaction />
      </div>
      <div>
        <Chart />
      </div>
    </div>
    <div className="flex-1">
      <div>
        <RightWidget />
      </div>
    </div>
  </div>
);

export default DashboardPage;
