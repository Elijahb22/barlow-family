import React from 'react'

function Home(){
return(
    <div>
        <div className="flex-row justify-space-between">
                <div className=''>
                    <div>Loading...</div>
                    <Posts posts={posts} title="What would you like to post?" />
                </div>
            
            </div>
    </div>
)
}

export default Home; 