import React from 'react'
import {moneyFormat} from '../Helpers'
function Header({total, money}) {
  return (
    <>
    <div>

    {total > 0 && money-total !==0 && (
      <div className='header'>Harcanacak {moneyFormat(money-total)} $ kaldı!</div>
    )}

    {total === 0 && (
      <div className='header'>Harcanacak {moneyFormat(money)} $ kaldı!</div>
    )}
    {
      money - total === 0 &&(
        <div className='header'>Harcanacak Para Kalmadı</div>
      )
    }
    </div>
 
    </>
    )
}
export default Header;