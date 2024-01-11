import React, { useState } from 'react';

const LibraryViewer = () => {
    const [windowRef, setWindowRef] = useState(null);

    const openNewWindow = () => {
        // Close the previous window if it's still open
        if (windowRef) {
            windowRef.close();
        }

        // Open a new window and save the reference
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            // You can customize the new window by setting its document content
            newWindow.document.title = 'Library Viewer';
            newWindow.document.body.innerHTML = '<h1>Welcome to the Library Viewer</h1>';

            // Update the state with the new window reference
            setWindowRef(newWindow);
        }
    };

    return (
        <div>
            <a onClick={openNewWindow}></a>
        </div>
    );
};

export default LibraryViewer;
