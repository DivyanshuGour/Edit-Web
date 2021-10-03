var toolbaravial = document.getElementById('customToolbar');
if (toolbaravial == null) {
    let elem = document.querySelector("html");
    elem.style['cursor'] = 'pointer';
}
var mode = 1;

var toolbar = $('<div>').attr('id', 'customToolbar');
$('body').append(toolbar);
var hide_button = $('<abbr title="Hide Mode"><svg id="btnhide" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-slash" class="svg-inline--fa fa-eye-slash fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg>');
$('body').append(hide_button);
var blur_button = $('<abbr title="Blur Mode"><svg id="btnblur" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-dropper" class="svg-inline--fa fa-eye-dropper fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"></path></svg>');
$('body').append(blur_button);
var drag_button = $('<abbr title="Drag Mode"><svg id="btndrag" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="project-diagram" class="svg-inline--fa fa-project-diagram fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg>');
$('body').append(drag_button);
var resize_button = $('<abbr title="Resize Mode"><svg id="btnresize" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crop-alt" class="svg-inline--fa fa-crop-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 352h-40V96c0-17.67-14.33-32-32-32H192v96h160v328c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-40h40c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24zM160 24c0-13.26-10.75-24-24-24H88C74.75 0 64 10.74 64 24v40H24C10.75 64 0 74.74 0 88v48c0 13.25 10.75 24 24 24h40v256c0 17.67 14.33 32 32 32h224v-96H160V24z"></path></svg>');
$('body').append(resize_button);
var highlight_button = $('<abbr title="Highlight Mode"><svg id="btnhighlight" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="highlighter" class="svg-inline--fa fa-highlighter fa-w-17" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M0 479.98L99.92 512l35.45-35.45-67.04-67.04L0 479.98zm124.61-240.01a36.592 36.592 0 0 0-10.79 38.1l13.05 42.83-50.93 50.94 96.23 96.23 50.86-50.86 42.74 13.08c13.73 4.2 28.65-.01 38.15-10.78l35.55-41.64-173.34-173.34-41.52 35.44zm403.31-160.7l-63.2-63.2c-20.49-20.49-53.38-21.52-75.12-2.35L190.55 183.68l169.77 169.78L530.27 154.4c19.18-21.74 18.15-54.63-2.35-75.13z"></path></svg>');
$('body').append(highlight_button);
var color_picker = $('<input type="color" id="colorpicker">');
$('body').append(color_picker);
var title_button = $('<abbr title="Clear Title"><svg id="btntitle" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="broom" class="svg-inline--fa fa-broom fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"></path></svg>');
$('body').append(title_button);
var done_button = $('<abbr title="Done"><svg id="btndone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
$('body').append(done_button);

$("div, p, h1, h2, h3, h4, h5, h6, img, button, a").on({
    mouseover: function (e) {
        if (mode == 1) {
            $(this).addClass('hmwc');
        }
        else if (mode == 2) {
            $(this).addClass('hmwc');
        }
        else if (mode == 3) {
            $(this).addClass('hmwc');
        }
        else if (mode == 4) {
            $(this).addClass('hmwc');
        }
        else if (mode == 5) {
            $(this).addClass('hmwc');
        }
        return false;
    },
    mouseout: function (e) {
        if (mode == 1) {
            $(this).removeClass('hmwc');
        }
        else if (mode == 2) {
            $(this).removeClass('hmwc');
        }
        else if (mode == 3) {
            $(this).removeClass('hmwc');
        }
        else if (mode == 4) {
            $(this).removeClass('hmwc');
        }
        else if (mode == 5) {
            $(this).removeClass('hmwc');
        }
        return false;
    },
});

$("div, p, h1, h2, h3, h4, h5, h6, img, button, a").on('click', function (e) {
    if (mode == 1) {                 //Hide
        e.preventDefault();
        $(this).hide();
    }
    if (mode == 2) {                 // Blur
        if ($(this).attr('data-click-state') == 0) {
            e.preventDefault();
            $(this).attr('data-click-state', 1);
            $(this).removeClass('hmwb');

        }
        else {
            e.preventDefault();
            $(this).attr('data-click-state', 0);
            $(this).addClass('hmwb');
        }
    }
    if (mode == 3) {              // Drag
        dragElement($(this).get(0));
        console.log($(this).get(0))
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.style['position'] = 'absolute';
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
               // elmnt.style['position'] = 'default';
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }
    if (mode == 4) {                  // Resize
    }
    if (mode == 5) {                  // Highlight
        var color = document.getElementById("colorpicker").value;
        if ($(this).attr('data-click-state') == 0) {
            e.preventDefault();
            $(this).attr('data-click-state', 1);
            $(this).css("background-color", 'transparent');
        }
        else {
            e.preventDefault();
            $(this).attr('data-click-state', 0);
            $(this).css("background-color", color);
        }
    }
    e.stopPropagation();
});

document.getElementById("btnhide").addEventListener("click", function () {
    mode = 1;
});
document.getElementById("btnblur").addEventListener("click", function () {
    mode = 2;
});
document.getElementById("btndrag").addEventListener("click", function () {
    mode = 3;
});
document.getElementById("btnresize").addEventListener("click", function () {
    mode = 4;
});
document.getElementById("btnhighlight").addEventListener("click", function () {
    mode = 5;
});
document.getElementById("btntitle").addEventListener("click", function () {
    document.title = '-';
});
document.getElementById("btndone").addEventListener("click", function () {
    var tb = document.getElementById('customToolbar');
    var hm = document.getElementById('btnhide');
    var bm = document.getElementById('btnblur');
    var bd = document.getElementById('btndrag');
    var br = document.getElementById('btnresize');
    var cp = document.getElementById('colorpicker');
    var hlm = document.getElementById('btnhighlight');
    var ht = document.getElementById('btntitle');
    var d = document.getElementById('btndone');
    $(tb).remove();
    $(hm).remove();
    $(bm).remove();
    $(bd).remove();
    $(br).remove();
    $(cp).remove();
    $(hlm).remove();
    $(ht).remove();
    $(d).remove();
    let crsr = document.querySelector("html");
    crsr.style['cursor'] = 'default';
    var tbd = document.getElementById('customToolbar');
    if (tbd == null) {
        mode = null;
    }
});
