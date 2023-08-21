import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }
  return (
    <> 
    <div className="container my-2" style={{height: '44px'}}>
    {props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.message)}</strong>
    </div>}
    </div>
    </>
  )
}