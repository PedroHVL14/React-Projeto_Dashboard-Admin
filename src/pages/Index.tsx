
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { ContentTable } from "@/components/content/ContentTable";
import { useLanguage } from "@/context/LanguageProvider";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[70px] lg:pl-[250px]">
        <Header title={t["dashboard"]} />
        
        <main className="container mx-auto p-4 space-y-6">
          <DashboardCards />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnalyticsChart />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">{t["recent_content"]}</h2>
            <p className="text-muted-foreground">
              {t["manage_content"]}
            </p>
          </div>
          
          <ContentTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
