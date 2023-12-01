function solution(strings, n) {
    var answer = [];

    for (var i = 0; i < strings.length; i++) {
        var idx = strings[i];
        answer[i] = idx[n] + idx;
    }

    answer.sort();

    for (var i = 0; i < strings.length; i++) {
        answer[i] = answer[i].substr(1);
    }

    return answer;
}