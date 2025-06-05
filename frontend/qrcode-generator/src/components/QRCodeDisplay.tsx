import React from "react";
import { Card } from "../components/ui/card";

interface QRCodeDisplayProps {
  qrCodeDataUrl: string | null;
  isLoading: boolean;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  qrCodeDataUrl,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto p-8 bg-black/80 border-charcoal-700 backdrop-blur-sm animate-scale-in">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lavender-600"></div>
        </div>
      </Card>
    );
  }

  if (!qrCodeDataUrl) {
    return (
      <Card className="w-full max-w-md mx-auto p-8 bg-black/80 border-2 border-dashed border-charcoal-600">
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-lavender-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </div>
          <p className="text-gray-200 font-medium">
            Seu QR Code aparecerá aqui
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Digite um texto ou URL e clique em gerar
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6 bg-black/80 border-charcoal-700 backdrop-blur-sm animate-scale-in">
      <div className="flex items-center justify-center">
        <img
          src={qrCodeDataUrl}
          alt="QR Code gerado"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </Card>
  );
};

export default QRCodeDisplay;
