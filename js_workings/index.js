// navbar workings
var myNav = document.getElementById('navigation_bar');
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        myNav.style.top = "0";
        if (prevScrollpos > 50) {
            myNav.classList.add("nav_bar_bg_color");
        }
        else {
            myNav.classList.remove("nav_bar_bg_color");
        }

    } else {
        myNav.style.top = "-80px";
        myNav.classList.remove("nav_bar_bg_color");
    }
    prevScrollpos = currentScrollPos;
}








var side_bar = document.getElementById('side_bar')

function open_sideBAR(what) {
    if (what == 'open') {
        side_bar.classList.add('open_side_bar');
    }
    else {
        if (side_bar.classList.contains('open_side_bar')) {
            side_bar.classList.remove('open_side_bar');
            open_side_Bar_InnerOption('from_here')
        }
    }
}

var Course_inner_Section = document.getElementById('Course_inner_Section');
function open_side_Bar_InnerOption(what) {
    if (Course_inner_Section.classList.contains('open_Course_inner_Section')) {
        Course_inner_Section.classList.remove('open_Course_inner_Section')
    }
    else {
        if (what == 'from_here') { }
        else {
            Course_inner_Section.classList.add('open_Course_inner_Section')
        }
    }
}








var explore_popup_form = document.getElementById('explore_popup_form');

explore_popup_form.addEventListener('click', function (event) {
    if (event.target == explore_popup_form) {
        open_close_explore_popup('scdvfg')
    }

})

var stream_field = document.getElementById('stream_field');
var Stream = document.getElementById('Stream');
function show_stream_field(what) {
    if (what.value == '11th' || what.value == '12th') {
        stream_field.style.display = 'block';
        Stream.required = true;
    }
    else {
        stream_field.style.display = 'none';
        Stream.required = false;
    }
}

var school_class = document.getElementById('school_class');
var board = document.getElementById('board');
var Stream = document.getElementById('Stream');

function open_close_explore_popup(what) {
    if (what == 'open') {
        explore_popup_form.style.display = 'flex';
    }
    else {
        explore_popup_form.style.display = 'none';

        // clear inputs
        if (school_class.value == '') { }
        else {
            school_class.value = '';
        }

        if (board.value == '') { }
        else {
            board.value = '';
        }

        if (Stream.value == '') { }
        else {
            Stream.value = '';
        }
        // clear inputs

    }
}