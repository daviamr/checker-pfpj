import { Header } from "./components/layout/Header";
// import { useAuth } from "./contexts/auth-context";
import { AuthProvider } from "./contexts/auth-provider";
import { useView } from "./contexts/use-view"
import { ViewProvider } from "./contexts/view-provider"
import { ThemeProvider } from "./hooks/theme-provider"
import { CheckerPage } from "./pages/Checker/page";
import { LoginPage } from "./pages/Login/page";
import { UserPage } from "./pages/User/page"

function RootApp() {
  const { view } = useView();
  // const { user } = useAuth()

  // if (!user) {
  //   return <LoginPage />;
  // }

  return (
    <>
      <Header />
      {view === 'loginpage' && <LoginPage />}
      {view === 'userpage' && <UserPage />}
      {view === 'checkerpage' && <CheckerPage />}
    </>
  )
}

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <ViewProvider>
          <RootApp />
        </ViewProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App