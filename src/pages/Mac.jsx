
import React, { useState } from 'react';
import { FaApple, FaUser, FaEnvelope, FaPhotoVideo } from "react-icons/fa";
import wallpaper from "../assets/macWallpaper.jpg";
import Window from "../components/MacWindow";

function Mac() {
  const date = new Date();
  const dateSplit = date.toDateString().split(" ");
  const formattedDate = dateSplit[0] + " " + dateSplit[1] + " " + dateSplit[2]
  var hr = date.getHours();
  var min = date.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }

  const [aboutMeVisibility, setAboutMeVisibility] = useState(false);
  const [contactVisibility, setContactVisibility] = useState(false);
  const [galleryVisibility, setGalleryVisibulity] = useState(false);

  const [windows, setWindows] = useState([]); // State to manage an array of windows

  const addWindow = () => {
    setWindows([...windows, { id: Date.now() }]); // Add a new window with a unique id
    console.log("new window added");
  };

  const removeWindow = (id) => {
    setWindows(windows.filter(window => window.id !== id)); // Remove a window by id
  };

  return (
    <div className="w-screen h-screen">
      <div id="MenuBar" className='h-7 w-screen bg-black text-white flex'>
        <div id="MenuBar-L" className='w-1/2 h-full flex items-center space-x-5 pl-4 '>
          <FaApple color='white' />
          <p>Derrick's Portfolio</p>
        </div>
        <div id="MenuBar-R" className='w-1/2 h-full flex items-center pr-2 flex-row-reverse'>
          <p className='px-3'>{hr + ":" + min + " " + ampm}</p>
          <p className='px-3'>{formattedDate}</p>
        </div>
      </div>
      <img className="mt-5 scale-105 -z-10 absolute" src={wallpaper}>
      </img>

      <div className='w-1/2 h-20 bg-gray-500 bg-opacity-30 border-gray-400 border-2 drop-shadow-lg absolute bottom-0 right-1/4 mb-3 rounded-3xl flex justify-center items-center'>
        <div onMouseDown={addWindow} onMouseOver={() => setAboutMeVisibility(true)} onMouseLeave={() => setAboutMeVisibility(false)} className='mx-5 relative '>
          <FaUser className='text-white text-6xl drop-shadow-md' />
          {aboutMeVisibility &&
            <p className='absolute -top-14 w-20 -translate-x-2 bg-gray-700 border-gray-500 rounded-lg p-1 text-center text-white'>About Me</p>
          }
        </div>
        <div onMouseOver={() => setContactVisibility(true)} onMouseLeave={() => setContactVisibility(false)} className='mx-5 relative '>
          <FaEnvelope className='text-white text-6xl drop-shadow-md' />
          {contactVisibility &&
            <p className='absolute -top-14 w-32 -translate-x-8 bg-gray-700 border-gray-500 rounded-lg p-1 text-center text-white'>Contact Me</p>
          }
        </div>
        <div onMouseOver={() => setGalleryVisibulity(true)} onMouseLeave={() => setGalleryVisibulity(false)} className='mx-5 relative '>
          <FaPhotoVideo className='text-white text-6xl drop-shadow-md' />
          {galleryVisibility &&
            <p className='absolute -top-14 w-20 -translate-x-2 bg-gray-700 border-gray-500 rounded-lg p-1 text-center text-white'>Gallery</p>
          }
        </div>
      </div>

      {windows.map(win => (
        <Window key={win.id} className="absolute"> {/* Positioning the windows */} </Window>
      ))}
    </div>

  );
}

export default Mac;


          {/* <Window onClose={() => removeWindow(win.id)} /> Pass remove function as prop */}
        {/* </div> */}