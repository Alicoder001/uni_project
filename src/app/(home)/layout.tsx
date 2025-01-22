import { useStore } from "zustand";
import BodyAttributes from "../../components/body-attributes";
import Footer from "../../components/footer";
import AnimatedNavbar from "../../components/navbar";
import { getLang } from "../../lib/getLang";
import { ILocale } from "../../types";
// import { getServerTranslations } from "../../lib/getServerTranslations";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: ILocale; page?: string };
}) {
  const locale = params?.locale || "en";
  const page = params?.page || "home";

  return (
    <>
      <script type="application/ld+json" />
      <AnimatedNavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
