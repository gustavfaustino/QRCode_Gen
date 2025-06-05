import React from "react";
import { Button } from "../components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  qrCodeDataUrl: string | null;
  disabled?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  qrCodeDataUrl,
  disabled = false,
}) => {
  const handleDownload = () => {
    if (!qrCodeDataUrl) return;

    // TODO: Link backend API to handle the download
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
