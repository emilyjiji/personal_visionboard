import './Download.css';


function Download() {

    const handleDownload = () => {
        // Get the image source path
        const imagePath = '/images/og-demo.png';

        // Create a link element
        const downloadLink = document.createElement('a');

        // Set the href attribute to the image path
        downloadLink.href = imagePath;

        // Set the download attribute with a suggested filename
        downloadLink.download = 'vision-wallpaper.png';

        // Append the link to the document
        document.body.appendChild(downloadLink);

        // Trigger a click on the link to start the download
        downloadLink.click();

        // Remove the link from the document
        document.body.removeChild(downloadLink);
    }

    return (
      <div className='parent'>
        <div className='child'>
          <div className='download-box'>
            <img className='demo-img' src='/images/og-demo.png' alt='generated-wallpaper'/>
            <div className='download-text'>
              <p>Try out your new background!</p>
              <button className='btn' onClick={handleDownload}>Download</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Download;

