const serverUrl = 'https://api.nbp.pl/api/exchangerates/tables'
const currUrl = 'https://api.nbp.pl/api/exchangerates/rates/A/'

export const currencyUrl = code =>
code ? `${currUrl}/${code}/` : `${serverUrl}/A/`
