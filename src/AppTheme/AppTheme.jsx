import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ThemeProvider from "./Context/ThemeProvider";

export default function AppTheme() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}
