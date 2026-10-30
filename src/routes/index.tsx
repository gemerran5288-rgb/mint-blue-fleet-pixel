import { createFileRoute } from "@tanstack/react-router";
import { PriceListApp } from "@/components/price-list";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PriceListApp />;
}
