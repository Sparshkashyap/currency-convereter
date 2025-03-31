import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_jdaPyK9RSXGtRn6Mb9SIepwJL6mCcyRUvtR5AbHO');

export async function calculatecurrency(fromcurrency,tocurrency,unit){

    const res= await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: tocurrency
    });

    const cal=(res.data[tocurrency])*unit;
    return cal;

}


