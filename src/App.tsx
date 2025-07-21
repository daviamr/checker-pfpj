import { Header } from "./components/layout/Header";
import { useView } from "./contexts/use-view"
import { ViewProvider } from "./contexts/view-provider"
import { ThemeProvider } from "./hooks/theme-provider"
import { CheckerPage } from "./pages/Checker/page";
import { LoginPage } from "./pages/Login/page";
import { UserPage } from "./pages/User/page"

function RootApp() {
  const { view } = useView();

  return (
    <>
      {view === 'loginpage' && <LoginPage />}
      {view === 'userpage' && <UserPage />}
      {view === 'checkerpage' && <CheckerPage />}
    </>
  )
}

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ViewProvider>
        <Header />
        <RootApp />
      </ViewProvider>
    </ThemeProvider>
  )
}

export default App