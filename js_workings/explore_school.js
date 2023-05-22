var school_class;
var school_board;
var school_stream;

var filtered_class = document.getElementById('filtered_class');
var filtered_board = document.getElementById('filtered_board');
var filtered_Stream = document.getElementById('filtered_Stream');
var filtered_Stream_field = document.getElementById('filtered_Stream_field');

function get_data_from_params() {

    var queryString = window.location.search;

    var urlParams = new URLSearchParams(queryString);

    school_class = urlParams.get('school_class');
    school_board = urlParams.get('board');
    school_stream = urlParams.get('Stream');

    filtered_class.innerHTML = school_class;
    filtered_board.innerHTML = school_board;
    if (school_stream != '') {
        filtered_Stream_field.style.display = 'bloc';

        filtered_Stream.innerHTML = school_stream;
    }
    else {
        filtered_Stream_field.style.display = 'none';
    }

    if (school_class == 'LKG') { send_data_to_use(cbse_school_data[0]) }
    else if (school_class == 'UKG') { send_data_to_use(cbse_school_data[1]) }
    else if (school_class == '1st') { send_data_to_use(cbse_school_data[2]) }
    else if (school_class == '2nd') { send_data_to_use(cbse_school_data[3]) }
    else if (school_class == '3rd') { send_data_to_use(cbse_school_data[4]) }
    else if (school_class == '4th') { send_data_to_use(cbse_school_data[5]) }
    else if (school_class == '5th') { send_data_to_use(cbse_school_data[6]) }
    else if (school_class == '6th') { send_data_to_use(cbse_school_data[7]) }
    else if (school_class == '7th') { send_data_to_use(cbse_school_data[8]) }
    else if (school_class == '8th') { send_data_to_use(cbse_school_data[9]) }
    else if (school_class == '9th') { send_data_to_use(cbse_school_data[10]) }
    else if (school_class == '10th') { send_data_to_use(cbse_school_data[11]) }

    else if (school_class == '11th' && school_stream == 'Bio, Maths') { send_data_to_use(cbse_school_data[12]) }
    else if (school_class == '11th' && school_stream == 'Bio, IP') { send_data_to_use(cbse_school_data[13]) }
    else if (school_class == '11th' && school_stream == 'Computer, Science') { send_data_to_use(cbse_school_data[14]) }
    else if (school_class == '11th' && school_stream == 'Commerce, Maths') { send_data_to_use(cbse_school_data[15]) }
    else if (school_class == '11th' && school_stream == 'Commerce, IP') { send_data_to_use(cbse_school_data[16]) }
    else if (school_class == '11th' && school_stream == 'Humanities') { send_data_to_use(cbse_school_data[17]) }

    else if (school_class == '12th' && school_stream == 'Bio, Maths') { send_data_to_use(cbse_school_data[18]) }
    else if (school_class == '12th' && school_stream == 'Bio, IP') { send_data_to_use(cbse_school_data[19]) }
    else if (school_class == '12th' && school_stream == 'Computer, Science') { send_data_to_use(cbse_school_data[20]) }
    else if (school_class == '12th' && school_stream == 'Commerce, Maths') { send_data_to_use(cbse_school_data[21]) }
    else if (school_class == '12th' && school_stream == 'Commerce, IP') { send_data_to_use(cbse_school_data[22]) }
    else if (school_class == '12th' && school_stream == 'Humanities') { send_data_to_use(cbse_school_data[23]) }

}

var school_selected_class = document.getElementById('school_selected_class');

var class_price_live = document.getElementById('class_price_live');
var class_paragraph_live = document.getElementById('class_paragraph_live');

var class_price_one_to_one = document.getElementById('class_price_one_to_one');
var class_paragraph_one_to_one = document.getElementById('class_paragraph_one_to_one');

function send_data_to_use(data) {

    school_selected_class.innerHTML = data.class; //main class heading

    // live class price
    if (data.data_price.live_original_price == data.data_price.live_price) {
        class_price_live.innerHTML = `₹ ${data.data_price.live_original_price}/month`;
    }
    else {
        class_price_live.innerHTML = `<del>₹ ${data.data_price.live_original_price}/-</del> <span>₹ ${data.data_price.live_price}/month</span>`;
    }
    // live class price


    // live class para
    let para_data = data.data_price.live_data;
    let para_data_arr = para_data.split('.');
    let para_html = '';
    para_data_arr.forEach(item => {
        para_html += `<p>&#x2022; ${item}</p>`;
    });
    class_paragraph_live.innerHTML = para_html;
    // live class para


    // live class price
    if (data.data_price.one_to_one_original_Price == data.data_price.one_to_one_Price) {
        class_price_one_to_one.innerHTML = `₹ ${data.data_price.one_to_one_Price}/month`;
    }
    else {
        class_price_one_to_one.innerHTML = `<del>₹ ${data.data_price.one_to_one_original_Price}/-</del> <span>₹ ${data.data_price.one_to_one_Price}/month</span>`;
    }
    // live class price

    // one to one class para
    let one_to_one_para_data = data.data_price.one_to_one;
    let one_to_one_para_data_arr = one_to_one_para_data.split('.');
    let one_to_one_para_html = '';
    one_to_one_para_data_arr.forEach(item => {
        one_to_one_para_html += `<p>&#x2022; ${item}</p>`;
    });
    class_paragraph_one_to_one.innerHTML = one_to_one_para_html;
    // one to one class para

}


