import Navbar from "./components/Navbar"
import { useAuthContext } from "./hooks/AuthContext.tsx"
import Dashboard from "./pages/dashboard/Dashboard"
import ExpenseDetails from "./pages/expense/ExpenseDetails.tsx"
import ExpenseReports from "./pages/expense/ExpenseReports.tsx"
import NewExpense from "./pages/expense/NewExpense.tsx"
import Login from "./pages/login/Login.tsx"
import Register from "./pages/register/Register.tsx"


const App = () => {
    const {isAuthenticated} = useAuthContext();
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={!isAuthenticated ? <Login  /> : <Navigate to="/"/>}/>
                <Route path="/register" element={!isAuthenticated ?<Register  /> : <Navigate to="/"/>}/>
                <Route path="/" element={!isAuthenticated ?<Dashboard  /> : <Navigate to="/login"/>}/>
                
                <Route path="/new" element={!isAuthenticated ?<NewExpense  /> : <Navigate to="/login"/>}/>
                <Route path="/view/:expenseId" element={!isAuthenticated ?<ExpenseDetails  /> : <Navigate to="/login"/>}/>
                <Route path="/edit/:expenseId" element={!isAuthenticated ?<NewExpense  /> : <Navigate to="/login"/>}/>
                <Route path="/reports" element={!isAuthenticated ?<ExpenseReports  /> : <Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App