
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { useLanguage } from "@/context/LanguageProvider";

const ProfilePage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1 pl-[70px] lg:pl-[250px]">
        <Header title={t["profile"]} />
        
        <main className="container mx-auto p-4 space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">{t["profile_information"]}</h2>
          <ProfileCard />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
