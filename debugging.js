
console.log('Debugging started...');


document.getElementById('display').addEventListener('input', (e) => {
    console.log('Display input changed:', e.target.value);
});

