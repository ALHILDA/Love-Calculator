
const calculateButton = document.getElementById('calculate');
const name1Input = document.getElementById('name1');
const name2Input = document.getElementById('name2');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name1 = name1Input.value.trim();
    const name2 = name2Input.value.trim();
    
    if (name1 === '' || name2 === '') {
        alert('Please enter both names');
        return;
    }

    const loveScore = Math.random() * 100;
    const loveMessage = getLoveMessage(loveScore);

    const capitalized_name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
    const capitalized_name2 = name2.charAt(0).toUpperCase() + name2.slice(1);

    resultDiv.innerHTML = `
        <h2>${capitalized_name1} & ${capitalized_name2}</h2>
        <hr>
        <p class="text">Love Score: ${loveScore.toFixed(2)}%</p>
        <p class="text">${loveMessage}</p>
    `;
});

function getLoveMessage(score) {
    if (score < 30) return 'It wont last a week 💔';
    if (score < 50) return 'friends forever 👫';
    if (score < 70) return 'perfect match 👩‍❤️‍👨';
    if (score < 90) return 'Soulmates ❤️‍🔥';
    return 'heavenly match';
}