
const keys = document.querySelectorAll('.main__key');
const screen = document.querySelector('.header__screen_container');

const themeOptions = document.querySelectorAll('option');
const themeToggle = document.getElementById('toggle-range');

function themeChanger(e) {
    let equalColor = document.querySelector('.main__key--equal');
    if (e.value === '2') {
        document.body.classList.remove('theme3');
        document.body.classList.add('theme2');
        document.body.style.color = 'var(--blue-text)';
        equalColor.removeAttribute('style');

    } else if (e.value === '3') {
        document.body.classList.remove('theme2');
        document.body.classList.add('theme3');
        document.body.style.color = 'var(--blue-text)';
        equalColor.style.color = 'var(--dark-blue-text)';

    } else {
        document.body.classList.remove('theme2');
        document.body.classList.remove('theme3');
        document.body.style.color = 'var(--white-text)';
    }
}

themeOptions.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
       themeChanger(themeOption);
       if (themeOption.value === '2') {
        themeToggle.value = '2';
       } else if (themeOption.value === '3') {
        themeToggle.value = '3';
       } else {
        themeToggle.value = '1';
       }
    })
})

themeToggle.addEventListener('input', () => {
    themeChanger(themeToggle);
})


// Keydown
window.addEventListener('keydown', (event) => {
    let keyValue = keys.value;
    switch(event.key) {
        case '1':
            keyValue = '1';
            break;

        case '2':
            keyValue = '2';
            break;

        case '3':
            keyValue = '3';
            break;

        case '4':
            keyValue = '4';
            break;

        case '5':
            keyValue = '5';
            break;

        case '6':
            keyValue = '6';
            break;

        case '7':
            keyValue = '7';
            break;

        case '8':
            keyValue = '8';
            break;

        case '9':
            keyValue = '9';
            break;

        case '0':
            keyValue = '0';
            break;

        case '+':
            keyValue = '+';
            break;

        case '-':
            keyValue = '-';
            break;

        case '*':
            keyValue = '*';
            break;      

        case 'Enter':
            keyValue = 'equal';
            break;

        case 'Backspace':
            keyValue = 'del';
            break;
        
        default:
            screen.textContent = '';
            break;
    }

    if (keyValue === 'del') {
        if (screen.textContent.length === 1 || screen.textContent === 'Syntax error' || screen.textContent === 'undefined' || screen.textContent === 'Infinity') {
            screen.textContent = '0';
        } else {
            screen.textContent = screen.textContent.slice(0, -1);
        }
        return;
    }

    if (keyValue === 'reset') {
        return screen.textContent = '0';
    }

    if (keyValue === 'equal') {
        try { 
            screen.textContent = eval(screen.textContent);
        } catch {
            screen.textContent = 'Syntax error';
        }
        return;
    }

    if (screen.textContent === '0' || screen.textContent === 'Syntax error' || screen.textContent === 'undefined' || screen.textContent === 'Infinity'){
        screen.textContent = keyValue;
    } else {
        screen.textContent += keyValue;
    }

    if (screen.textContent.length > 11) {
        screen.textContent = screen.textContent.slice(0, -1);
    }
})


// Click
keys.forEach(key => {
    key.addEventListener('click', () => {
        let keyValue = key.value;
        if (key.id === 'del') {
            if (screen.textContent.length === 1 || screen.textContent === 'Syntax error' || screen.textContent === 'undefined' || screen.textContent === 'Infinity') {
                screen.textContent = '0';
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (key.id === 'reset') {
            return screen.textContent = '0';
        }

        if (key.id === 'equal') {
            try { 
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = 'Syntax error';
            }
            return;
        }

        if (screen.textContent === '0' || screen.textContent === 'Syntax error' || screen.textContent === 'undefined' || screen.textContent === 'Infinity'){
            screen.textContent = keyValue;
        } else {
            screen.textContent += keyValue;
        }

        if (screen.textContent.length > 11) {
            screen.textContent = screen.textContent.slice(0, -1);
        }
    })
})