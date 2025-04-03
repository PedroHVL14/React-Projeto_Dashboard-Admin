
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, FileEdit, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

type Article = {
  id: number;
  title: string;
  category: string;
  status: "publicado" | "rascunho" | "revisão";
  date: string;
  views: number;
};

const dummyArticles: Article[] = [
  {
    id: 1,
    title: "10 Dicas para SEO em 2023",
    category: "Marketing",
    status: "publicado",
    date: "2023-11-15",
    views: 1250,
  },
  {
    id: 2,
    title: "Como Criar um Blog de Sucesso",
    category: "Desenvolvimento",
    status: "publicado",
    date: "2023-11-10",
    views: 845,
  },
  {
    id: 3,
    title: "Guia de Redes Sociais para Iniciantes",
    category: "Marketing",
    status: "revisão",
    date: "2023-11-05",
    views: 0,
  },
  {
    id: 4,
    title: "Estratégias de Email Marketing",
    category: "Marketing",
    status: "rascunho",
    date: "2023-10-28",
    views: 0,
  },
  {
    id: 5,
    title: "Tendências de Design para 2024",
    category: "Design",
    status: "publicado",
    date: "2023-10-22",
    views: 632,
  },
];

export function ContentTable() {
  const [articles, setArticles] = useState<Article[]>(dummyArticles);
  const { toast } = useToast();

  const handleDelete = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
    toast({
      title: "Artigo excluído",
      description: `O artigo #${id} foi excluído com sucesso.`,
    });
  };

  const getStatusBadgeColor = (status: Article["status"]) => {
    switch (status) {
      case "publicado":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "rascunho":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
      case "revisão":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      default:
        return "";
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">ID</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data</TableHead>
            <TableHead className="text-right">Visualizações</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell className="font-medium">{article.id}</TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.category}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getStatusBadgeColor(article.status)}>
                  {article.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(article.date).toLocaleDateString('pt-BR')}</TableCell>
              <TableCell className="text-right">{article.views.toLocaleString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>Visualizar</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileEdit className="mr-2 h-4 w-4" />
                      <span>Editar</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-red-600"
                      onClick={() => handleDelete(article.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Excluir</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
