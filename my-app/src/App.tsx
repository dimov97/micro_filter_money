import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

 export type FilterType= "all" | "RUBLS" | "Dollars"



export type moneyType= {
    banknots: string,
    value: number,
    number: string
}

function App() {
    const [money, setMoney] = useState<moneyType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const[filter, setFilter] = useState<FilterType>("all")

    let currentMoney = money;
    if(filter === "Dollars")
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots==="Dollars")
    if(filter === "RUBLS")
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots==="RUBLS")

    const onClickFilterHundler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent money={currentMoney} onClickFilterHundler={onClickFilterHundler} />
        </>
    )

}

export default App;
