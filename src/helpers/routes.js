const serverUrl = 'http://api.nbp.pl/api/exchangerates/tables'
const currUrl = 'http://api.nbp.pl/api/exchangerates/rates/A/'
const serverGoldUrl = 'http://api.nbp.pl/api/cenyzlota'

export const currencyUrl = code =>
code ? `${currUrl}/${code}/` : `${serverUrl}/A/`
