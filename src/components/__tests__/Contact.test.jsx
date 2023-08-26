import { render,screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '../Contact'
    it("Should load contact.jsx",()=>{
    render(<Contact/>)
    const heading=screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    })
    it("Should load button inside contact.jsx",()=>{
    render(<Contact/>)
    // const heading=screen.getByRole("button")
    const heading=screen.getByText("Submit")
    expect(heading).toBeInTheDocument()
    })  
    test("Should load input inside contact.jsx",()=>{
    render(<Contact/>)
    // const heading=screen.getByRole("button")
    const heading=screen.getByPlaceholderText("name")
    expect(heading).toBeInTheDocument()
    })
    test("Should load 2 input boxes inside contact.jsx",()=>{
    render(<Contact/>)
    // const heading=screen.getByRole("button")
    const inputBoxes=screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2)
    })