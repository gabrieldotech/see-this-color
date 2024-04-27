// Mapeamento das cores em tons traduzidas, emojis e etc.
const traducaoCores = {
    "preto": "black",
    "cinza escuro": "DarkGray",
    "cinza": "Gray",
    "cinza claro": "LightGrey",
    "azul ardósia": "SlateBlue",
    "azul ardósia1": "SlateBlue1",
    "azul ardósia3": "SlateBlue3",
    "azul ardósia escuro": "DarkSlateBlue",
    "azul meia-noite": "MidnightBlue",
    "azul marinho": "Navy",
    "azul escuro": "DarkBlue",
    "azul médio": "MediumBlue",
    "azul": "Blue",
    "azul flor-de-milho": "CornflowerBlue",
    "azul real": "RoyalBlue",
    "azul céu profundo": "DodgerBlue",
    "azul céu claro": "DeepSkyBlue",
    "azul céu claro": "LightSkyBlue",
    "azul claro": "LightBlue",
    "azul aço": "SteelBlue",
    "azul aço claro": "LightSteelBlue",
    "bege":"beige",
    "cinza ardósia": "SlateGray",
    "cinza ardósia claro": "LightSlateGray",
    "azul água": "Aqua",
    "ciano escuro": "DarkCyan",
    "ciano": "Cyan",
    "ciano escuro": "DarkTurquoise",
    "turquesa": "Turquoise",
    "turquesa média": "MediumTurquoise",
    "verde esmeralda": "MediumSpringGreen",
    "verde água": "LightSeaGreen",
    "azul petróleo": "DarkSlateGray",
    "azul petróleo": "DarkTurquoise",
    "turquesa": "Turquoise",
    "verde marinho médio": "MediumSeaGreen",
    "verde marinho": "SeaGreen",
    "verde escuro": "DarkGreen",
    "verde": "Green",
    "verde floresta": "ForestGreen",
    "verde limão": "LimeGreen",
    "verde limão": "Lime",
    "verde grama": "LawnGreen",
    "verde chartreuse": "Chartreuse",
    "verde amarelo": "GreenYellow",
    "verde limão": "Lime",
    "verde oliva escuro": "DarkOliveGreen",
    "verde oliva": "Olive",
    "verde oliva claro": "OliveDrab",
    "amarelo ouro": "Gold",
    "amarelo": "Yellow",
    "cáqui": "Khaki",
    "laranja escuro": "DarkOrange",
    "laranja": "Orange",
    "rosa claro": "LightPink",
    "rosa pink": "HotPink",
    "rosa": "Pink", 
    "rosa profundo": "DeepPink",
    "violeta": "Violet",
    "violeta": "Purple",
    "índigo": "Indigo",
    "magenta escuro": "DarkMagenta",
    "magenta": "Magenta",
    "roxo médio": "MediumOrchid",
    "roxo": "Purple",
    "orquídea": "Orchid",
    "ametista": "MediumSlateBlue",
    "azul ardósia": "SlateBlue",
    "azul ardósia claro": "LightSlateBlue",
    "tomato": "Tomato",
    "vermelho": "Red",
    "vermelho escuro": "DarkRed",
    "vermelho fogo": "FireBrick",
    "castanho": "Brown",
    "marrom": "Maroon",
    "salmão": "Salmon",
    "salmão escuro": "DarkSalmon",
    "rosa salmão": "LightSalmon",
    "coral": "Coral",
    "vermelho escuro": "DarkRed",
    "tomate": "Tomato",
    "vermelho fogo": "FireBrick",
    "vermelho claro": "#ec5353",
    "verde claro": "LightGreen",
    "verde médio": "#3cb371",
    "laranja vermelho": "OrangeRed",
    "amarelo alaranjado": "DarkOrange",
    "laranja": "Orange",
    "lilás": "#C8A2C8",
    "amarelo": "Yellow",
    "amarelo claro": "LightYellow",
    "amarelo ouro": "Gold",
    "dourado": "Gold",
    "🤍": "#FFFFFF",    
    "🩶": "#4F4F4F",   
    "🖤": "#000000",   
    "🤎": "#8B4513",    
    "💜": "#800080",   
    "🩵": "#8A2BE2",    
    "❤️": "#FF0000",   
    "🩷": "#FFA500",  
    "🧡": "#FFD700",    
    "💛": "#FFFF00",   
    "💙": "#0000FF",    
    "💚": "#008000",    
    "🔴": "#FF0000",    
    "🟠": "#FFA500",    
    "🟡": "#FFFF00",    
    "⚪": "#FFFFFF",    
    "⚫": "#000000",    
    "🟤": "#8B4513",   
    "🟣": "#800080",   
    "🔵": "#0000FF",    
    "🟢": "#008000",    
    "🟥": "#FF0000",    
    "🟧": "#FFA500",    
    "🟨": "#FFD700",    
    "🟩": "#008000",    
    "🟦": "#0000FF",    
    "🟪": "#800080",    
    "🟫": "#8B4513",   
    "⬛": "#000000",    
    "⬜": "#FFFFFF"    
}

// Funções de abertura e fechamento do modal
function openModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.add('mostrar');
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.remove('mostrar');
}

// Evento de para inicializar a funcionalidade do seletor de cores
document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const colorInput = document.getElementById('colorInput');
    
    colorPicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        document.body.style.backgroundColor = selectedColor;
        
        const decimalColor = hexToDecimal(selectedColor);
        
        colorInput.value = decimalColor;
    });
});

// Conversão de cor
function hexToDecimal(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
}

// Efeito de mudança de cor automática
function startColorEffect() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "DarkOrange", "DeepPink", "Goldenrod", "Lime", "Aqua", "Crimson", "Chocolate", "Indigo", "Magenta"];
    let currentIndex = 0;

    let changeColor = setInterval(function() {
        document.body.style.transition = "background-color 0.3s ease";
        document.body.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    }, 100);

    setTimeout(function() {
        clearInterval(changeColor); 
        document.body.style.transition = "background-color 1s ease"; 
        document.body.style.backgroundColor = "white"; 
    }, 2000);
}

// Função para efeito policial
let mixInterval;

function mixColors(input) {
    const inputValue = input.value.toLowerCase().trim();

    if (inputValue.includes('cop') || inputValue.includes('police') || inputValue.includes('policial')) {
        let currentIndex = 0;
        clearInterval(mixInterval);
        
        mixInterval = setInterval(function() {
            document.body.style.transition = "background-color 0.3s ease";
            document.body.style.backgroundColor = currentIndex === 0 ? "red" : "blue";
            currentIndex = (currentIndex + 1) % 2;
        }, 200); 
        
        const sirenSound = document.getElementById('siren-sound');
        sirenSound.play();
        
        setTimeout(function() {
            clearInterval(mixInterval);
            document.body.style.transition = "background-color 1s ease";
            document.body.style.backgroundColor = "white";
            sirenSound.pause();
        }, 7400);
    } else {
    }
}

// Função para iniciar o confete
function startConfetti() {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Função para alterar a cor do fundo
function color(input) {
    const inputValue = input.value.toLowerCase().trim();
    const corTraduzida = traducaoCores[inputValue];
    
    if (corTraduzida) {
        document.body.style.transition = "background-color 1s ease";
        document.body.style.backgroundColor = corTraduzida;
    } else {
        document.body.style.transition = "background-color 1s ease";
        document.body.style.backgroundColor = input.value;
    }
}

// Função para redefinir a cor de fundo para branco
function resetBackgroundColor() {
    document.body.style.transition = "background-color 1s ease";
    document.body.style.backgroundColor = "white";
}

// Tradução de mensagens
const traducaoMensagens = {
    "party": "Have fun! ;)",
    "festa": "Se divirta! ;)",
};

// Adicionando eventos de entrada para o input de cor
const input = document.getElementById('colorInput');

input.addEventListener('input', function () {
    const value = this.value.toLowerCase().trim();
    
    if (traducaoMensagens.hasOwnProperty(value)) {
        this.classList.add('transition-out');
        startColorEffect();
        startConfetti();
        setTimeout(() => {
            this.value = traducaoMensagens[value]; 
            this.classList.remove('transition-out');
            this.classList.add('transition-in');
            setTimeout(() => {
                this.classList.remove('transition-in');
                resetBackgroundColor();
            }, 3000);
        }, 200);
    } else if (this.value === traducaoMensagens['party'] || this.value === traducaoMensagens['festa']) {
        this.classList.add('transition-out');
        setTimeout(() => {
            this.value = '';
            this.classList.remove('transition-out', 'transition-in');
        }, 300); 
    }
});
