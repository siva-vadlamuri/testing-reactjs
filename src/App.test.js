


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });
describe('Addtion of 2 + 2 ',()=>{
  it('I want to 2+2 is 4',()=>{
    expect(2+2).toBe(4);
  })
  it('4 +2 should be 6',()=>{
    expect(4+2).toBe(6);
  })
})

describe('Testing App component',()=>{
  test('Is count is 0 initialy',()=>{
    const wrapper = shallow(<App/>);
    const countText = wrapper.find('p').text();
    expect(countText).toBe('count : 0')

  })
  test('Increment the count by 1',()=>{
    const wrapper = shallow(<App/>);
     const incrementButton = wrapper.find('button.increment');
     incrementButton.simulate('click');
     const countText = wrapper.find('p').text();
     expect(countText).toBe('count : 1');

  })
})