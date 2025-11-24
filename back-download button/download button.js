
function toggleMenu() {
    let menu = document.getElementById("download-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

/* ---------- PDF Download (Already Working) ---------- */
function downloadPDF() {
    const resume = document.body;
    html2pdf().from(resume).save('Resume.pdf');
}

/* ---------- Word Download ---------- */
function downloadWORD() {
    let content = document.body.innerHTML;
    let blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.doc";
    link.click();
}

/* ---------- Excel Download ---------- */
function downloadEXCEL() {
    let content = document.body.innerHTML;
    let blob = new Blob([content], { type: "application/vnd.ms-excel" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.xls";
    link.click();
}

/* ---------- PowerPoint Download (HTML Slide Format) ---------- */
function downloadPPT() {
    let html = `
        <html><body>
        <div style="font-size:30px; font-weight:bold;">Resume Slide</div>
        <div>${document.body.innerHTML}</div>
        </body></html>`;
    
    let blob = new Blob([html], { type: "application/vnd.ms-powerpoint" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.ppt";
    link.click();
}

