//fetch all countries
export const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

//fetch country
export const getCountry = async (value) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${value}`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

//convert border countries name in abbrev to full
export const getFullCountryName = async (data) => {
    if (data?.borders) {
        try {
            const countries = data.borders.map(async (item) => {
                const res = await fetch(
                    `https://restcountries.com/v3.1/alpha/${item}`
                );
                const [data] = await res.json();
                return data.name.common;
            });
            return await Promise.all(countries);
        } catch (err) {
            throw new Error(err);
        }
    }
    return null;
};

//get country currencies
export const getCurrencies = (obj) => {
    if (obj) {
        const currencies = Object.values(obj);
        return currencies.map((currency) => currency.name).join(", ");
    }
};

//get country languages
export const getLanguages = (obj) => {
    if (obj) {
        return Object.values(obj).join(", ");
    }
};

//get country native name
export const getNativeName = (obj) => {
    if (obj) {
        const nativeNames = Object.values(obj);
        const random = Math.floor(Math.random() * nativeNames.length);
        return nativeNames[random].common;
    }
};
