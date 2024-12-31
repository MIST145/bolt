import { formatters, FormatType } from './formatters';

export function convertListFormat(inputList: string, format: FormatType = 'qbcore'): string {
  const items = inputList
    .split(',')
    .map(item => item.trim().replace(/['"]/g, ''))
    .filter(Boolean);

  const uniqueItems = [...new Set(items)];
  
  // Special handling for propscreenshotter format
  if (format === 'propscreenshotter') {
    return formatters[format](uniqueItems.join(','));
  }

  // Special handling for SQL vehicles format
  if (format === 'sql-vehicles') {
    return `INSERT INTO \`vehicles\` (\`name\`, \`model\`, \`price\`, \`category\`) VALUES\n${uniqueItems.map(item => formatters[format](item)).join(',\n')}\n;`;
  }
  
  return uniqueItems.map(item => formatters[format](item)).join(',\n');
}