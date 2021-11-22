import React from 'react'

function HeaderLight() {
    return (
        <div class="h-12 ds:h-24 bg-white w-full">
            <div class="pr-12 pl-12 ds:pr-48 ds:pl-48">
                <div class="pt-8 ds:pt-8 text-center ds:text-justify">
                    <a href="/" className="text-gray text-xl ds:text-4xl block ds:inline-block">Menu Check</a>
                    <a href="https://www.linkedin.com/in/maxklein1992/" target="_blank" rel="noreferrer" className="text-yellow text-sm ds:text-xl hover:underline block ds:inline-block ds:ml-6">by Max Klein</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderLight

    
