import { Outlet } from "react-router-dom";

import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
