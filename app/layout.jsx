import {Nunito_Sans} from "next/font/google";
import ThemeRegistry from "@/app/theme/ThemeRegistry";
import Header from "@/app/components/Header";

export const metadata = {
    title: "Rest Countries Api",
    description: "rest countries api generated with next app"
};

export const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    display: "swap"
});

export default function RootLayout({children}) {
    return (
        <html lang="en" className={nunitoSans.className}>
            <body>
                <ThemeRegistry options={{key: "mui"}}>
                    <Header />
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
