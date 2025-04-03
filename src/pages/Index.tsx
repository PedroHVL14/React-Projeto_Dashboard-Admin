
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { ContentTable } from "@/components/content/ContentTable";

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[70px] lg:pl-[250px]">
        <Header title="Dashboard" />
        
        <main className="container mx-auto p-4 space-y-6">
          <DashboardCards />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnalyticsChart />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Conteúdo Recente</h2>
            <p className="text-muted-foreground">
              Gerencie seus artigos, blogs e outros conteúdos.
            </p>
          </div>
          
          <ContentTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
