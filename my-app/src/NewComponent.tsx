import React from "react";
import {FilterType, moneyType} from "./App";

type NewComponentType = {
    money: moneyType[]
    onClickFilterHundler: (nameButton: FilterType) => void
}




export const NewComponent =(props:NewComponentType)=> {
    const AllHandler = () => {
        props.onClickFilterHundler('all')
    }
    const RUBLSHandler = () => {
        props.onClickFilterHundler('RUBLS')
    }
    const DollarsHandler = () => {
        props.onClickFilterHundler('Dollars')
    }
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots} </span>
                            <span> {objFromMoneyArr.value} </span>
                            <span> {objFromMoneyArr.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:"35px"}}>
                <button onClick={AllHandler}>all</button>
                <button onClick={RUBLSHandler}>RUBLS</button>
                <button onClick={DollarsHandler}>Dollars</button>
            </div>
        </>

    )
}