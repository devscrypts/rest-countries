import Country from "@/app/components/Country";
import {getCountry, getFullCountryName} from "@/app/utils";

export default async function Page({params}) {
    const [data] = await getCountry(params.slug);
    const borderCountries = await getFullCountryName(data);

    return <Country country={data} borderCountries={borderCountries} />;
}
