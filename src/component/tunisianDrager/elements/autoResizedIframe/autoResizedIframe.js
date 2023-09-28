import React, { useState, useEffect } from 'react';
import Frame from 'react-frame-component';

const AutoResizingIframe = ({ task,show }) => {
  const [iframeHeight, setIframeHeight] = useState('60vh');

  useEffect(() => {
    // This function handles the resizing of the iframe based on the content length
    const handleFrameLoad = () => {
      const iframe = document.getElementById('output-iframe');
      if (iframe) {
        const sectionToResize = iframe.contentWindow.document.getElementById('sectionToResize');
        if (sectionToResize) {
          const newHeight = sectionToResize.scrollHeight + 'px';
          setIframeHeight(newHeight);
        }
      }
    };

    // Attach the load event handler when the component mounts
    const iframeElement = document.getElementById('output-iframe');
    if (iframeElement) {
      iframeElement.addEventListener('load', handleFrameLoad);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (iframeElement) {
        iframeElement.removeEventListener('load', handleFrameLoad);
      }
    };
  }, []);

  return (
    <Frame
      id="output-iframe"
      initialContent={`
        <html>
          <style>${task.section_css}</style>
          <body>${task.section_data}</body>
          <script>${task.js_data}</script>
        </html>
      `}
      title="output"
      sandbox="allow-scripts"
      frameBorder="none"
      width="100%"
      style={{
        width: show ?"75vw " : "90vw",
        backgroundColor: 'white',
        height: iframeHeight,
        transition: 'height 0.3s ease-in-out',
      }}
    />
  );
};

export default AutoResizingIframe;
