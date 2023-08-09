import Main from "@/app/components";
import {getCountries} from "@/app/utils";

export default async function Page() {
    const data = await getCountries();
    return <Main data={data} />;
}
