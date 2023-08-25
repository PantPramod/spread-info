import './BirthdayCard1.css'
import React from 'react'

type propTypes = {
    info: {
        name:string,
        no:number
    },
    setInfo:React.Dispatch<React.SetStateAction<{ name: string,no:number }>>
}
const BirthdayCard1 = ({info, setInfo}:propTypes) => {
    return (<>
        <div className="card">
            <div className="back"></div>
            <div className="front">
                <div className="imgset">
                    <img
                        width="100%"
                        src="https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png"
                    />
                </div>
            </div>
            <div className="text-container">
                <p id="head">Happy Birthday
                    <input
                        type='text'
                        className='w-full outline-none bg-transparent text-center'
                        placeholder='Enter Name Here'
                        value={info.name}
                        onChange={(e) => setInfo({...info,name:e.target.value})}
                    />
                </p>
                <p>I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!</p>
                <p>Hope your day goes great!</p>
            </div>
        </div>
    </>
    )
}

export default BirthdayCard1
