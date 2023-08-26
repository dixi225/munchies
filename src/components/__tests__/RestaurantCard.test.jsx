import { render } from "@testing-library/react"
import mockData from './mocks/mockData.json'
import Restrauntcard from "../RestrauntCard"
it("should render restaurant card component with props data",()=>{
    render(<Restrauntcard resData={mockData}/>)
})