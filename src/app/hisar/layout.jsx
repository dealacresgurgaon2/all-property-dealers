// app/delhi/layout.jsx

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Property Dealers in hisar",
  description:
    "Find top property dealers and real estate agents in hisar.",
};

export default function Layout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}