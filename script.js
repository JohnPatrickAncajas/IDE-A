function showEditor(editorId) {
    const editors = document.querySelectorAll('#editor textarea');
    editors.forEach(editor => {
        editor.style.display = 'none';
    });

    const editor = document.getElementById(editorId);
    editor.style.display = 'block';
}

function runCode() {
    const html5 = document.getElementById('html5').value;
    const css3 = document.getElementById('css3').value;
    const js = document.getElementById('js').value;

    const iframe = document.getElementById('preview');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${css3}</style>
        </head>
        <body>
            ${html5}
            <script>${js}<\/script>
        </body>
        </html>
    `);
    iframeDocument.close();
}

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

document.getElementById('downloadHTML').addEventListener('click', function() {
    const htmlContent = document.getElementById('html5').value;
    downloadFile('index.html', htmlContent);
});

document.getElementById('downloadCSS').addEventListener('click', function() {
    const cssContent = document.getElementById('css3').value;
    downloadFile('styles.css', cssContent);
});

document.getElementById('downloadJS').addEventListener('click', function() {
    const jsContent = document.getElementById('js').value;
    downloadFile('script.js', jsContent);
});

showEditor('html5');