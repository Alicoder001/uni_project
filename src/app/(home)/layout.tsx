import Footer from "../../components/footer";
import AnimatedNavbar from "../../components/navbar";
import { ILocale } from "../../types";

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
