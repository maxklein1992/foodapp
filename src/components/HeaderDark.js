import React from 'react'
import SearchIcon from './icons/search.png';
import PlaceHolder from './icons/placeholder.png';

function HeaderDark() {
    return (
        <div class="h-72 ds:h-96 bg-gray w-full">
            <div class="pr-12 pl-12 ds:pr-48 ds:pl-48">
                <div class="pt-8 ds:pt-8">
                    <a href="/" className="text-white text-xl ds:text-4xl block ds:inline-block">Menu Check</a>
                    <a href="https://www.linkedin.com/in/maxklein1992/" target="_blank" rel="noreferrer" className="text-yellow text-sm ds:text-xl hover:underline block ds:inline-block ds:ml-6">by Max Klein</a>
                </div>
                <div class="pt-8 ds:pt-24">
                    <h1 className="text-white text-sm ds:text-2xl">See of all the restaurants the menu in photos before you eat</h1>
                    <div className="flex flex-row mt-6">
                        <img src={PlaceHolder} alt="SearchIcon" className="bg-white h-8 w-8 p-2 ds:p-1 ds:h-10 ds:w-10 ds:p-3" />
                        <input className="w-64 h-8 ds:w-96 ds:h-10 ds:py-4 py-2 text-xs ds:text-l outline-none" type="text" placeholder="Enter address" />
                        <img src={SearchIcon} alt="SearchIcon" className="bg-yellow h-8 w-8 p-2 ds:p-1 ds:h-10 ds:w-10 ds:p-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDark


/*const Container = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
`

const HeaderLogo = styled.div`
    img {
        width: 30px;
    }
`
const HeaderTitle = styled.div`
    text-align: center;
`

const TitleLineOne = styled.div`
    font-weight: 700;
    font-size: 32px;
    padding-top: 70px;
`

const TitleLineTwo = styled.div`
    color: grey;
    font-weight: 400;
    font-size: 20px;
    padding-top: 5px;
`*/


    
