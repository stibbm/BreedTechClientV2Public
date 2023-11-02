import React, { useState } from 'react';
import MInput from '../../grid/MInput';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)

  return (
    <>
      <MInput
        marginTop="20px"
        marginBottom="20px"
        width="20%"
        label="Search"
        value={filter || ''}
        onChange={e => {
          setFilter(e.target.value)
          onChange(e.target.value)
        }}
      />
    </>
  )
}
export default GlobalFilter;
