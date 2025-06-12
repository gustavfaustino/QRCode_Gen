import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { QrCode } from "lucide-react";
import InputField from "./InputField";
import QRCodeDisplay from "./QRCodeDisplay";
import DownloadButton from "./DownloadButton";
import { toast } from "../hooks/use-toast";

const QRCodeGenerator: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Atenção!",
        description: "Por favor, insira um texto ou URL válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setQrCodeDataUrl(null);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL

      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.url || "Erro desconhecido ao gerar QR Code");
      }

      const data = await response.json();
      setQrCodeDataUrl(data.url);
      toast({
        title: "Sucesso!",
        description: "QR Code gerado com sucesso.",
        variant: "default",
      });
    } catch (error) {
      console.log("Erro ao gerar QR Code:", error);
      toast({
        title: "Erro!",
        description:
          (error as Error).message || "Ocorreu um erro ao gerar o QR Code.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setInputText("");
    setQrCodeDataUrl(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-lavender-500 to-lavender-600 rounded-2xl shadow-lg">
            <QrCode className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Gerador de QR Code
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Crie QR Codes personalizados de forma simples e rápida para qualquer
          texto ou URL
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Painel de Entrada */}
        <Card className="p-6 bg-black/80 border-charcoal-700 backdrop-blur-sm animate-fade-in">
          <div className="space-y-6">
            <InputField
              value={inputText}
              onChange={setInputText}
              placeholder="Digite seu texto, URL, email, telefone..."
            />

            <div className="flex gap-3">
              <Button
                onClick={generateQRCode}
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-lavender-600 to-lavender-700 hover:from-lavender-700 hover:to-lavender-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                <QrCode className="w-5 h-5 mr-2" />
                {isLoading ? "Gerando..." : "Gerar QR Code"}
              </Button>

              <Button
                onClick={clearAll}
                variant="outline"
                className="px-6 py-3 rounded-xl border-2 border-charcoal-600 hover:border-charcoal-500 text-gray-300 hover:text-white bg-transparent hover:bg-charcoal-800 transition-all duration-200"
              >
                Limpar
              </Button>
            </div>
          </div>
        </Card>

        {/* Painel de Visualização e Download */}
        <div className="space-y-6">
          <QRCodeDisplay qrCodeDataUrl={qrCodeDataUrl} isLoading={isLoading} />

          {qrCodeDataUrl && (
            <div className="animate-fade-in">
              <DownloadButton qrCodeDataUrl={qrCodeDataUrl} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
