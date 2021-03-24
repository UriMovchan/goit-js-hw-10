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
        addClassFn('body', 'dark-theme')
        remClassFn('body', 'light-theme')
        setLocalStor('theme', 'dark-theme')
    } else {
        addClassFn('body', 'light-theme')
        remClassFn('body', 'dark-theme')
        setLocalStor('theme', 'light-theme')
    }
}

function addClassFn(whom, what) {
    document.querySelector(whom).classList.add(what)
}
function remClassFn(whom, what) {
    document.querySelector(whom).classList.remove(what)
}