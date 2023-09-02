import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full flex bg-gray-200'>
      { /* Profile */}
      <div className='w-1/2 flex flex-col items-center  border-r-2 border-black'>
        <div className='flex flex-col'>
          <div className='pt-48'>
            <h1 className='text-5xl font-bold text-blue-800'>Takumi Imanaka</h1>
            <h2 className='text-3xl font-bold text-gray-700 pt-2'>Software Engineer</h2>
            <h3 className='text-2xl text-gray-500 pt-4'>An energetic, self starting, and ambitious engineer.</h3>
          </div>
          <div className='text-gray-700 pt-24'>
            <div className='flex flex-col'>
              {/* ABOUT Link */}
              <div className='flex py-2'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8'></div>
                </div>
                <h1 className='pl-3'>about</h1>
              </div>

              {/* EXPERIENCE Link */}
              <div className='flex py-2'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8'></div>
                </div>
                <h1 className='pl-3'>experience</h1>
              </div>

              {/* projects Link */}
              <div className='flex py-2'>
                <div className='flex items-center'>
                  <div className='border-t-2 border-gray-500 w-8'></div>
                </div>
                <h1 className='pl-3'>projects</h1>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Content */}
      <div className='w-1/2 bg-gray-200 pl-24 pr-64 h-full overflow-y-scroll'>
        {/* About Blurb */}
        <div className='text-lg py-48'>
          <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Id consectetur purus ut faucibus pulvinar elementum integer enim. Urna condimentum mattis pellentesque id. Et molestie ac feugiat sed lectus. Tortor at risus viverra adipiscing at in tellus. In massa tempor nec feugiat nisl pretium. Nulla facilisi cras fermentum odio. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Aliquam sem et tortor consequat id. Egestas diam in arcu cursus euismod quis viverra nibh.</p>
          <p>Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Proin sed libero enim sed faucibus turpis. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Libero id faucibus nisl tincidunt eget nullam non nisi. Dui sapien eget mi proin sed libero enim sed faucibus. Vitae congue eu consequat ac felis donec et odio. Vitae aliquet nec ullamcorper sit amet risus. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Proin gravida hendrerit lectus a. Enim ut sem viverra aliquet eget. Odio pellentesque diam volutpat commodo. Elementum nibh tellus molestie nunc non blandit massa enim nec.</p>
        </div>

        {/* Experience Component */}
        <div>

        </div>

      </div>
    </main>
  )
}
