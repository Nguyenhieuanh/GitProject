
function check() {
    let score1 = parseFloat(document.getElementById('examPoint').value),
        score2 = parseFloat(document.getElementById('mid_termExamPoint').value),
        score3 = parseFloat(document.getElementById('finlExamPoint').value),
        rank = document.getElementById('rank'),
        average = (score1 + score2 + score3) / 3;
    document.getElementById('average').value = average;
    if (average >= 8.5) {
        rank.value = 'Giỏi';
    } else if (7 <= average && average < 8.5) {
        rank.value = 'Khá';
    } else if (5.5 <= average && average < 7) {
        rank.value = 'Trung bình';
    } else if (4 <= average && average < 5.5) {
        rank.value = 'TB Yếu';
    } else {
        rank.value = 'Kém';
    }
}
