import Header from "./Header";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AuthProvider from "./AuthProvider";

export default function AppAuth() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <LoginPage />
        <HomePage />
      </div>
    </AuthProvider>
  );
}
