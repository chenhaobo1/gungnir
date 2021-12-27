import React from "react";
import { render,fireEvent } from '@testing-library/react'
// fireEvent模拟用户事件
import Button,{ButtonProps,ButtonSize,ButtonType} from "./button";
const defaultProps = {
    onClick: jest.fn()  //被监控的模拟函数  jest的Mock function
}

const testProps: ButtonProps = {
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'klass'
}

const disabledProps:ButtonProps = {
    disabled:true,
    onClick:jest.fn()
}

describe('Button Component',() => {
    it('should render the correct default button',() => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)  //取一个wrapper对象
        const elemnt = wrapper.getByText('Nice') as HTMLButtonElement
        expect(elemnt).toBeInTheDocument()
        expect(elemnt.tagName).toEqual('BUTTON')  //测试是否是button
        expect(elemnt).toHaveClass('btn btn-default')   //测试class存在
        expect(elemnt.disabled).toBeFalsy()
        fireEvent.click(elemnt)
        expect(defaultProps.onClick).toHaveBeenCalled() //被调用到
    })
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)  //取一个wrapper对象
        const elemnt = wrapper.getByText('Nice')
        expect(elemnt).toBeInTheDocument()
        expect(elemnt).toHaveClass('btn-primary btn-lg klass')
    }
    )
    it('should render a link when btnType equals link and href is provided',() => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>)
        const elemnt = wrapper.getByText('Link')
        expect(elemnt).toBeInTheDocument()
        expect(elemnt.tagName).toEqual('A')
        expect(elemnt).toHaveClass('btn btn-link')
    })
    it('shoule render disabled button when disabled set to true',() => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)  //取一个wrapper对象
        const elemnt = wrapper.getByText('Nice') as HTMLButtonElement   //类型断言，
        expect(elemnt).toBeInTheDocument()
        expect(elemnt.disabled).toBeTruthy()
        fireEvent.click(elemnt)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})