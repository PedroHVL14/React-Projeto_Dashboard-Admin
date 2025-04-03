
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { SettingsForm } from "@/components/settings/SettingsForm";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[70px] lg:pl-[250px]">
        <Header title="Configurações" />
        
        <main className="container mx-auto p-4 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Preferências do Sistema</h2>
          <SettingsForm />
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
