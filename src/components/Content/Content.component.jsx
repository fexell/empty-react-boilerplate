import { Outlet } from 'react-router-dom'

const ContentComponent = () => {
  return (
    <>
      <div id='Content' className='content component w-full h-full'>
        <div className='content-container component-container w-full h-full'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ContentComponent