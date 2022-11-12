$(document).ready(function(){
    var editor_one = CodeMirror.fromTextArea(document.getElementById("code1"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true
    });

    var editor_two = CodeMirror.fromTextArea(document.getElementById("code2"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true,
        theme:"material"
    });
    var editor_three= CodeMirror.fromTextArea(document.getElementById("code3"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true,
    });

    var editor_four = CodeMirror.fromTextArea(document.getElementById("code4"), {
        lineNumbers: true,
        matchBrackets: true,
        styleActiveLine: true,
        theme:"material"
    });
});