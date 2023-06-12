import Link from 'next/link'
import React from 'react'

function TopHeader() {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto '>
      <div className='flex items-center space-x-5 '>
        <Link href="/">
          <img className='w-40 object-contain cursor-pointer'  src='https://ucbd382d867eda2285bc3724c2e9.previews.dropboxusercontent.com/p/thumb/AB65a58uuB__FZbQe9It2Fkwt7CznurhBFTguSYIpZFc6T4H02YBA2JoxDUM7xBR35bDzY3y30030133hdU5hKLBu5FpdrybMgrlrTF-dC-J08Or8UhNhPYbR9sGwARQEmkDYDNu0ofWSqdTOCrdgUp0OAIrWnlHiRmSAXM-tEMLkHNygBoWlcTKTUdPAESEC5jdXYsyK-q5Ymxa57WY4UJHzzcmzRA5yDEiKMOCo6BEJtf5dWHXzU68qsvlOk58hIbpWNRWmJsowwx2Luq7FtiSiTkE8DGjaV2lvIT_9il0bFhok7e-sB-9xq6CNP79v7BTqHahuA1xyzW9n8Fkb6dxTBlMHzxP0od95ZjmwOzmP8dMOPamlyEW0e7dvGUflSv9WUK2dncUekC8MWkITJMxTyOjYGOf3rzxPyUAx3pjuVNI12uCN-1eLA-UAi5NLETM7pyFX4CyrSmfaxmLFnm6TI9QZRsnA4sqp7iQ6rtojftL73dp4CNsAz6SgcHfkY7rJaTRFMv7DyMDQXNT6OneanVk_V3BZSzHCK1mBXhyGpRp8jhg3dvv5v-tKJoYW-Eb4pxWf9Cw9-gDSYnLLAUyr3lZsjM0VMejbsIdH1LpBx37DMj3brP-afm9G36pokKI_-oFpCaCeNck6_UxVkjbdzvZOiQ7j28V_X878QYsyypop50u8G9DofgLIyaa0-0mbea3sjbV5gLhRlAkZfRkLwmSRrNRao2MNWWU7fyoY_rwdkRms-DmT7ox-mrPmb8v0IKDmWhm3Hc8Q8Pcu60mLgAGf0TprN5ZkJePNEE1Id9ZMd8kY59RWrsj72BY7aNVsPBDAkU9YCTV_Aw5ao0f7wTbj7Ydc1mABTts0v1ELznnB-GEd4_HW-H3075dNAIlX0eXAAVc_eLiEJnB1iZp-McMmDs8oVrS-I1tcntRPDqDyKnK4UsSU-7pze_ID78eW60uzQGb_pnG9RarN0q1wEp73GZoBoec9LWV89qdmeZ_g0ujjOVGIGtM0WYh7RuIVLZtKwh13xiyySCc_4JyCUPMfDcuZskA1CTMTY1E2HNREP6FUpl9yC08B2M2E4J0QsLjiP5oOwDdyB0qaZElJtf7vPGg3irhqQXZ768YodhRKf1fuH7R57ZmE9S15uoaNNNzGlYyvsXn7kxrC4QYAoVAN0DFHtnB06TvZsMCJPkYkOHRs22UbgVyNFCSyDKSREFeb-L0hraEnaRv8qzUQCjSLiumsdEAzv_oK-RSSA/p.png' />
       </Link>
       <div className='hidden md:inline-flex items-center space-x-5'>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
       </div>
       <div className="flex items-center space-x-5 text-green-600 ">
        <h3>
          Sign In
        </h3>
        <h3 className='border px-4 py-1 rounded-full border-green-600'>
          Get Started
        </h3>
      </div>
      </div>

     

    </header>
    
  )
}

export default TopHeader;