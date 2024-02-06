import './Download.css';
import { useLocation } from "react-router-dom";

function Download() {
  // Use the useLocation hook to access the current location
  const location = useLocation();

  // Extract the image link from the location state
  const imageLink = location.state && location.state.imageLink;

  const handleDownload = () => {
    // Create a link element
    const downloadLink = document.createElement('a');
    // Set the href attribute with the image link
    downloadLink.href = imageLink;
    // Set the download attribute with the desired file name
    downloadLink.download = 'downloaded_image.png';
    // Append the link element to the body
    document.body.appendChild(downloadLink);
    // Simulate a click on the link to trigger the download
    downloadLink.click();
  }

  return (
    <div className='parent'>
      <div className='download-box'>
        <img className='demo-img' src={imageLink} alt='generated-wallpaper' />
        <div className='download-text'>
          <p>Try out your new background!</p>
          <button className='btn' onClick={handleDownload}>Download</button>
        </div>
      </div>
    </div>
  );
}

export default Download;

