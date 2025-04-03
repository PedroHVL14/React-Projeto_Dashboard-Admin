
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ContentTable } from "@/components/content/ContentTable";
import { ContentForm } from "@/components/content/ContentForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[70px] lg:pl-[250px]">
        <Header title="Gerenciamento de Conteúdo" />
        
        <main className="container mx-auto p-4 space-y-6">
          <Tabs defaultValue="lista" className="w-full">
            <TabsList>
              <TabsTrigger value="lista">Lista de Conteúdos</TabsTrigger>
              <TabsTrigger value="novo">Novo Conteúdo</TabsTrigger>
            </TabsList>
            <TabsContent value="lista" className="pt-6">
              <h2 className="text-2xl font-semibold tracking-tight mb-6">Todos os Artigos</h2>
              <ContentTable />
            </TabsContent>
            <TabsContent value="novo" className="pt-6">
              <ContentForm />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ContentPage;
