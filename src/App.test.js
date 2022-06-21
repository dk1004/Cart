import { render, fireEvent, wait } from '@testing-library/react';
import Products from './Components/Products';

 
const mockCreateItem= jest.fn();

test('add new inventory to current', async ()=>{
  const newInv = 10;
  mockCreateItem.mockResolvedValueOnce(newInv);
  const {getByText, getByLabelText }=render(<Products/>);

  const input = getByLabelText('');
  fireEvent.change(input,{target:{value:'http://localhost:1337/api/products'}});
  fireEvent.click(getByText('ReStock Products'));

  await wait(()=>getByText)(newInv);

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining('Apples')
  );
})
