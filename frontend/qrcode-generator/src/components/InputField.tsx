import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder = "Digite seu texto ou URL aqui...",
  label = "Texto ou URL",
}) => {
  return (
    <div className="space-y-2 animate-fade-in">
      <Label htmlFor="qr-input" className="text-sm font-medium text-gray-100">
        {label}
      </Label>
      <Input
        id="qr-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-base border-2 border-charcoal-700 bg-charcoal-950 text-white placeholder:text-gray-400 rounded-xl focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200 transition-all duration-200"
      />
    </div>
  );
};

export default InputField;
