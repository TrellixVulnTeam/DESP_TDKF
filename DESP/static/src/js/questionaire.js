$.ajaxSetup({
    data: {csrfmiddlewaretoken: "{{ csrf_token }}"},
});


function blankfilling() {
    var questionlist = document.getElementById('question_list');
    var addblank = $();
    addblank.appendTo(questionlist);
}

function choice() {
    var questionlist = document.getElementById('question_list');
    var addchoice = $("");
    addchoice.appendTo(questionlist)
}

function answerfilling() {
    var questionlist = document.getElementById('question_list');
    var addanswer = $();
    addanswer.appendTo(questionlist)

}

function SwapTxt(e) {
    var bt = $(e.target);
    bt.parent().prev().find('h5').text(bt.val());
    if (bt.parent().prev().find('h5').text() === '') {
        bt.parent().prev().find('h5').text('标题')
    }
}

function trid(e) {
    var col = $(e.target);
    return col.parent().parent().index() - 1
}

function SwapTxt_option(e) {
    var a = trid(e);
    var choice = $(e.target);
    choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML = choice.val();
    if ( choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML === '') {
        choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML = 'Answer' + (a+1)
    }

}


function delchoice(e) {
    var table = $(e.target).closest('.div_question').find('table')[0];
    var tr = $(e.target).parent().parent().parent().index();
    table.deleteRow(tr);
   
}

function addchoice(e) {
    var add = $(e.target);
    var table = add.closest(".div_question").find('table')[0];
    var addtr = $('                                                                    <tr class="choiceedit">\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="text"\n' +
        '                                                                                   onkeyup="SwapTxt_option(event)" onclick="trid(event)" >\n' +
        '                                                                            <a onclick="delchoice(event)"><i class="ft-minus-circle"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="checkbox">\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <a><i class="ft-arrow-up"></i></a>\n' +
        '                                                                            <a><i class="ft-arrow-down"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                    </tr>');
    addtr.appendTo(table);
    var choicelist = add.closest(".div_question").find('.choice_list');
    var addli = $('<li class="mb-2">\n' +
        '                                                                        <input type="checkbox">\n' +
        '                                                                        <span>'+'Answer'+(table.rows.length - 1)+'</span>'+'</li>');
    addli.appendTo(choicelist);
}


function answershow() {
    $('#editForm').modal('show');
}

variableID(10);

function variableID(prefix) {
    formlist = document.getElementsByClassName('form-horizontal');
    for (var i = 0; i < formlist.length; i++) {
        var testID = (prefix || '') + new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
        formlist[i].setAttribute('id', testID)
    }

}

function test() {
    var len = $(".div_question").length;
    $('#question_list').append("<h5 class='div_question' id = " + len + ">" + len + '.' + ' ' + 'Question' + ' ' + len + ' <button class="btn mr-1 btn-secondary" onclick=\'test1(' + len + ')\' >del</button>' + "</h5>")
}

function test1(index) {
    // debugger;
    var len = $(".div_question").length - 1;
    $("#" + index).remove();
    for (var i = index + 1, j = index; i <= len; i++, j++) {
        $("#" + i).replaceWith("<h5 class='div_question' id = " + (i - 1) + ">" + 'Question' + (i - 1) + ' <button class="btn mr-1 btn-secondary" onclick=\'test1(' + (i - 1) + ')\' >del</button>' + "</h5>");
    }
}

