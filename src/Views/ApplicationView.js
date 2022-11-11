/* import modules */
import { Outlet, Routes, Route } from "react-router-dom"
import BlackFrugalList from "../Components/FrugalList"

export const ApplicationView = () => {
    return <>
    <Routes>
        <Route path="/" element={
                <>
                    <Outlet />
                </>
            }>
                <Route path="lists" element={ <BlackFrugalList /> } />
        </Route>
    </Routes>
</>
}