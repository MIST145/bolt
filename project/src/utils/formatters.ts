export type FormatType = 'qbcore' | 'ecDealership' | 'shDealer' | 'lsrpVehicleshop' | 'pdm' | '0rVehicleshop' | 'mistCarsSpawn' | 'propscreenshotter' | 'stg-vehicleshop' | 'sh-dealership' | 'sql-vehicles' | 'brutal-vehicleshop';

export const formatters = {
  qbcore: (item: string) => `['${item.toLowerCase()}'] = {
  ['name'] = '${item}',
  ['brand'] = 'Default Brand',
  ['model'] = '${item.toLowerCase()}',
  ['price'] = 20000,
  ['category'] = 'default',
  ['categoryLabel'] = 'Default',
  ['hash'] = \`${item.toLowerCase()}\`,
  ['shop'] = 'pdm',
}`,
  ecDealership: (item: string) => `{ type = "car", model = "${item.toLowerCase()}", label = "${item}", price = 10 }`,
  shDealer: (item: string) => `{ name: "${item.toLowerCase()}", model: "${item.toLowerCase()}", category: 'categoria', price: 1, image: "${item.toLowerCase()}"}`,
  lsrpVehicleshop: (item: string) => `{label = '${item}', VEHICLE_MODEL = joaat('${item.toLowerCase()}'), VEHICLE_PRICE = 20000}`,
  pdm: (item: string) => `{ 
  name = "${item}", 
  model = "${item.toLowerCase()}", 
  icon = "bars", 
  iconColor = "#ffffff", 
  price = 100000, 
  description = "This is a description",
  stats = {
    maxspeed = "200",
    acceleration = "3.7",
    braking = "1.9",
    handling = "7",
    steering = "5"
  }
}`,
  '0rVehicleshop': (item: string) => `{label = "${item.toLowerCase()}", model = "${item.toLowerCase()}", price = 1}`,
  mistCarsSpawn: (item: string) => `{nome = "${item}", modelo = "${item.toLowerCase()}", description = "car"}`,
  propscreenshotter: (items: string) => `Cars["NOME_Cars"] = {
    ${items.split(',').map(item => `"${item.trim()}"`).join(',\n    ')}
}`,
  'stg-vehicleshop': (item: string) => `\t\t["${item.toLowerCase()}"] = {
\t\t\tmodelName = "${item.toLowerCase()}",
\t\t\tprice = 1
\t\t}`,
  'sh-dealership': (item: string) => `    { name: "${item.toLowerCase()}", model: "${item.toLowerCase()}", category: 'Mist', price: 1, image: "${item.toLowerCase()}"}`,
  'sql-vehicles': (item: string) => `\t('${item}', '${item.toLowerCase()}', 1, 'mist')`,
  'brutal-vehicleshop': (item: string) => `                        {model = "${item.toLowerCase()}", label = "${item.toLowerCase()}", price = 1, type = 'car'}`
};