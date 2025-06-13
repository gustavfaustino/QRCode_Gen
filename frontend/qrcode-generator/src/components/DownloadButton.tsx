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
      
      const response = await fetch(qrCodeDataUrl);
      if (!response.ok) {
        throw new Error("Erro ao baixar o QR Code");
      }

      const imageBlob = await response.blob();
      const blobUrl = window.URL.createObjectURL(imageBlob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      toast({
        title: "Download iniciado!",
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
