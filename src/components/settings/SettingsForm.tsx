
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import { useLanguage } from "@/context/LanguageProvider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Flag, Globe } from "lucide-react";

const SettingsForm = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t["theme"]}</CardTitle>
          <CardDescription>
            {theme === "light" ? t["light"] : t["dark"]}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Label htmlFor="theme-toggle">{t["dark"]}</Label>
            <Switch 
              id="theme-toggle" 
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe size={20} />
            {t["language"]}
          </CardTitle>
          <CardDescription>{t["choose_language"]}</CardDescription>
        </CardHeader>
        <CardContent>
          <ToggleGroup 
            type="single" 
            value={language}
            onValueChange={(value) => {
              if (value) changeLanguage(value as "pt-BR" | "en-US");
            }}
            className="flex justify-start"
          >
            <ToggleGroupItem value="pt-BR" aria-label={t["portuguese"]} className="flex gap-2 items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                className="h-5 w-5"
              >
                <rect width="512" height="512" fill="#6da544" />
                <polygon points="256,100 450,256 256,412 60,256" fill="#ffda44" />
                <circle cx="256" cy="256" r="80" fill="#0052b4" />
                <path d="M215.04,256.02c0-22.5,13.31-41.95,32.47-50.77c-4.39-1.29-9.06-1.99-13.88-1.99c-27.62,0-50.02,22.4-50.02,50.02s22.4,50.02,50.02,50.02c4.82,0,9.48-0.7,13.88-1.99C228.35,297.97,215.04,278.53,215.04,256.02z" fill="white" />
              </svg>
              {t["portuguese"]}
            </ToggleGroupItem>
            <ToggleGroupItem value="en-US" aria-label={t["english"]} className="flex gap-2 items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512" 
                className="h-5 w-5"
              >
                <rect width="512" height="512" fill="#f0f0f0" />
                <g fill="#d80027">
                  <rect width="512" height="38.7" y="39.3" />
                  <rect width="512" height="38.7" y="117.7" />
                  <rect width="512" height="38.7" y="196.2" />
                  <rect width="512" height="38.7" y="274.7" />
                  <rect width="512" height="38.7" y="353.2" />
                  <rect width="512" height="38.7" y="431.7" />
                </g>
                <rect width="217.4" height="194.9" fill="#2e3560" />
                <g fill="#f0f0f0">
                  <polygon points="27.2,29.1 30.9,40.3 42.8,40.3 33.1,47.2 36.8,58.4 27.2,51.5 17.5,58.4 21.2,47.2 11.5,40.3 23.4,40.3" />
                  <polygon points="77.2,29.1 80.9,40.3 92.8,40.3 83.1,47.2 86.8,58.4 77.2,51.5 67.5,58.4 71.2,47.2 61.5,40.3 73.4,40.3" />
                  <polygon points="127.2,29.1 130.9,40.3 142.8,40.3 133.1,47.2 136.8,58.4 127.2,51.5 117.5,58.4 121.2,47.2 111.5,40.3 123.4,40.3" />
                  <polygon points="177.2,29.1 180.9,40.3 192.8,40.3 183.1,47.2 186.8,58.4 177.2,51.5 167.5,58.4 171.2,47.2 161.5,40.3 173.4,40.3" />
                  <polygon points="27.2,79.1 30.9,90.3 42.8,90.3 33.1,97.2 36.8,108.4 27.2,101.5 17.5,108.4 21.2,97.2 11.5,90.3 23.4,90.3" />
                  <polygon points="77.2,79.1 80.9,90.3 92.8,90.3 83.1,97.2 86.8,108.4 77.2,101.5 67.5,108.4 71.2,97.2 61.5,90.3 73.4,90.3" />
                  <polygon points="127.2,79.1 130.9,90.3 142.8,90.3 133.1,97.2 136.8,108.4 127.2,101.5 117.5,108.4 121.2,97.2 111.5,90.3 123.4,90.3" />
                  <polygon points="177.2,79.1 180.9,90.3 192.8,90.3 183.1,97.2 186.8,108.4 177.2,101.5 167.5,108.4 171.2,97.2 161.5,90.3 173.4,90.3" />
                  <polygon points="27.2,129.1 30.9,140.3 42.8,140.3 33.1,147.2 36.8,158.4 27.2,151.5 17.5,158.4 21.2,147.2 11.5,140.3 23.4,140.3" />
                  <polygon points="77.2,129.1 80.9,140.3 92.8,140.3 83.1,147.2 86.8,158.4 77.2,151.5 67.5,158.4 71.2,147.2 61.5,140.3 73.4,140.3" />
                  <polygon points="127.2,129.1 130.9,140.3 142.8,140.3 133.1,147.2 136.8,158.4 127.2,151.5 117.5,158.4 121.2,147.2 111.5,140.3 123.4,140.3" />
                  <polygon points="177.2,129.1 180.9,140.3 192.8,140.3 183.1,147.2 186.8,158.4 177.2,151.5 167.5,158.4 171.2,147.2 161.5,140.3 173.4,140.3" />
                </g>
              </svg>
              {t["english"]}
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsForm;
