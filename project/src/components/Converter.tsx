import React, { useRef } from 'react';
import { Copy, ArrowRight, FolderOpen } from 'lucide-react';
import { FormatType } from '../utils/formatters';
import { scanFiles } from '../utils/fileScanner';

interface ConverterProps {
  theme: 'light' | 'dark';
  inputList: string;
  convertedList: string;
  format: FormatType;
  onFormatChange: (format: FormatType) => void;
  onInputChange: (value: string) => void;
  onConvert: () => void;
  onCopy: () => void;
}

export function Converter({
  theme,
  inputList,
  convertedList,
  format,
  onFormatChange,
  onInputChange,
  onConvert,
  onCopy,
}: ConverterProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const inputBg = theme === 'light' ? 'bg-gray-100' : 'bg-gray-700';
  const borderColor = theme === 'light' ? 'border-gray-200' : 'border-gray-700';
  const selectBg = theme === 'light' ? 'bg-gray-50' : 'bg-gray-700';

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const files = await scanFiles(fileList);
      if (files.length > 0) {
        onInputChange(files.join(',\n'));
      }
    }
  };

  const handleScanClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className={`${bgColor} ${textColor} rounded-lg p-6 shadow-lg border ${borderColor}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Input List</h2>
          <div className="flex items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
              webkitdirectory=""
              directory=""
            />
            <button
              onClick={handleScanClick}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
              title="Select files to scan"
            >
              <FolderOpen size={18} />
              Select Files
            </button>
            <select
              value={format}
              onChange={(e) => onFormatChange(e.target.value as FormatType)}
              className={`${selectBg} ${textColor} px-4 py-2 rounded-lg border ${borderColor} focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            >
              <option value="qbcore">QBCore Format</option>
              <option value="ecDealership">EC Dealership Format</option>
              <option value="shDealer">SH Dealer Format</option>
              <option value="lsrpVehicleshop">LSRP Vehicleshop Format</option>
              <option value="pdm">PDM Format</option>
              <option value="0rVehicleshop">0R Vehicleshop Format</option>
              <option value="mistCarsSpawn">Mist Cars Spawn Format</option>
              <option value="propscreenshotter">PropScreenshotter Format</option>
              <option value="stg-vehicleshop">STG Vehicleshop Format</option>
              <option value="sh-dealership">SH Dealership Format</option>
              <option value="sql-vehicles">SQL Vehicles Format</option>
              <option value="brutal-vehicleshop">Brutal Vehicleshop Format</option>
            </select>
            <button
              onClick={onConvert}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              <ArrowRight size={18} />
              Convert
            </button>
          </div>
        </div>
        <textarea
          className={`w-full h-[500px] ${inputBg} ${textColor} p-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          value={inputList}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder='Enter items like: "2020CopoV2", "2020Copo", "4thgenss"...'
        />
      </div>

      <div className={`${bgColor} ${textColor} rounded-lg p-6 shadow-lg border ${borderColor}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Converted List</h2>
          <button
            onClick={onCopy}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            <Copy size={18} />
            Copy
          </button>
        </div>
        <div className={`w-full h-[500px] ${inputBg} rounded-lg overflow-auto`}>
          <pre className="p-4 text-sm">
            {convertedList}
          </pre>
        </div>
      </div>
    </div>
  );
}