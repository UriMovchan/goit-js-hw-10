function getLocalStor(item) {return localStorage.getItem(item)};
function setLocalStor(key, val) {localStorage.setItem(key, val)};

const swithThemeRef = document.getElementById('theme-switch-toggle');
swithThemeRef.addEventListener('change', swithThemeFn);

if (getLocalStor('theme') && getLocalStor('theme') === 'dark-theme') {
    swithThemeRef.checked = true;
    swithThemeFn();
} 

function swithThemeFn() {
    if (swithThemeRef.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        setLocalStor('theme', 'dark-theme')
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        setLocalStor('theme', 'light-theme')
    }
}
