import React from "react";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";
import { toast } from "../hooks/use-toast";

interface DownloadButtonProps {
  qrCodeDataUrl: string | null;
  disabled?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  qrCodeDataUrl,
  disabled = false,
}) => {
  const handleDownload = () => {
    if (!qrCodeDataUrl) {
      toast({
        title: "Atenção!",
        description: "Por favor, gere um QR Code primeiro.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Cria um elemento <a> temporário no DOM
      const link = document.createElement("a");
      link.href = qrCodeDataUrl; // Define a URL da imagem do QR Code como o href do link
      link.download = "qrcode.png"; // Define o nome do arquivo para download
      document.body.appendChild(link); // Adiciona o link ao corpo do documento
      link.click(); // Simula um clique no link para iniciar o download
      document.body.removeChild(link); // Remove o link do DOM após o download

      toast({
        title: "Sucesso!",
        description: "Seu QR Code está sendo baixado.",
        variant: "default",
      })
    } catch (error) {
      console.log("Erro ao baixar QR Code:", error);
        toast({
        title: "Erro no download!",
        description: "Ocorreu um erro ao baixar o QR Code.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={disabled || !qrCodeDataUrl}
      className="w-full bg-gradient-to-r from-lavender-600 to-lavender-700 hover:from-lavender-700 hover:to-lavender-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    >
      <Download className="w-5 h-5 mr-2" />
      Download PNG
    </Button>
  );
};

export default DownloadButton;
