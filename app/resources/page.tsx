import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesCatalog from "@/components/ResourcesCatalog";
import ChannelList from "@/components/ChannelList";
import { getAllResources } from "@/lib/mdx";

export default function ResourcesPage() {
  const resources = getAllResources();

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-black">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary dark:text-white">
            Recursos
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Guías y artículos para entender Bitcoin paso a paso.
          </p>
        </div>

        <ResourcesCatalog resources={resources} />
        <ChannelList />
      </main>
      <Footer />
    </div>
  );
}
