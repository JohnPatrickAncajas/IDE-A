function runCode() {
    const html5 = document.getElementById('html').value;
    const css3 = document.getElementById('css').value;
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
