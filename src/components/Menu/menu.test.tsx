import React from "react";
import { render,RenderResult,fireEvent, cleanup } from "@testing-library/react"; 
import Menu,{MenuProps} from './menu'
import MenuItem from './menuItem'

const testProps:MenuProps = {
    defaultIndex:0,
    onSelect:jest.fn(),
    className:'test'
}

const testVerProps:MenuProps = {
    defaultIndex:0,
    mode:'vertical'
}

const goodMenu = (props: JSX.IntrinsicAttributes & MenuProps & { children?: React.ReactNode; }) => {
    return(
        <Menu {...props}>
          <MenuItem index={0}>
          one
          </MenuItem>
          <MenuItem index={1} disabled>
          two
          </MenuItem>
          <MenuItem index={2}>
          three
          </MenuItem>
        </Menu>
    )
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe('menu and menuItem component', () => {
    beforeEach(()=>{
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render correct menu and menuItem based on default props',() => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('viking-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback',() => {
        const thirdItem = wrapper.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    })
    it('should render vartical mode when mode is set to vertical',() => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})

function generateMenu(testProps: MenuProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
    throw new Error("Function not implemented.");
}
