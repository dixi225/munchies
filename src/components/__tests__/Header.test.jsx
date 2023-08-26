import { fireEvent, render,screen } from "@testing-library/react"
import appStore from '../../utils/appStore'
import Header from '../Header'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
it("should load header component with login button",()=>
{
    render(<BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
          )
          const btn = screen.getByText("Log-In")
        // const btn = screen.getByRole("button", {name:'Log-In'} )
        
          expect(btn).toBeInTheDocument()
})
it("should load header component with cart item",()=>
{
    render(<BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
          )
        //   const btn = screen.getByText("Log-In")
        const btn = screen.getByText(/Cart/)
        
          expect(btn).toBeInTheDocument()
})
it("should change login to logout",()=>
{
    render(<BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
          )
        //   const btn = screen.getByText("Log-In")
        const btn1 = screen.getByRole("button", {name:'Log-In'})
        fireEvent.click(btn1)
        const btn2 = screen.getByRole("button", {name:'Log-out'})
          expect(btn2).toBeInTheDocument()
})