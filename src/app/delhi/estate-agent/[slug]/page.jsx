import DealerPage from "@/templates/design5/pages/[slug]/page";
export const metadata = {
  title: "Property Dealers in Faridabad",
  description:
    "Find top property dealers and real estate agents in faridabad.",
};
export default function Page({params}) {
  return <DealerPage  params={params}/>;
}
