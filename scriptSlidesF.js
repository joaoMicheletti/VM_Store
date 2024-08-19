const produtosFemininos = {
    RoupasF: ['Vestido', 'Blusa', 'Saia'],
    SapatosF: ['Sapatilha', 'Tênis', 'Salto Alto'],
    AcessoriosF: ['Colar', 'Brinco', 'Pulseira']
};

let indexRoupas = 0;
let indexSapatos = 0;
let indexAcessorios = 0;

function updateSlide(category, elementId, index) {
    const items = produtosFemininos[category];
    document.getElementById(elementId).textContent = items[index];
}

function nextSlide(category, elementId) {
    switch (category) {
        case 'RoupasF':
            indexRoupas = (indexRoupas + 1) % produtosFemininos.RoupasF.length;
            updateSlide(category, elementId, indexRoupas);
            break;
        case 'SapatosF':
            indexSapatos = (indexSapatos + 1) % produtosFemininos.SapatosF.length;
            updateSlide(category, elementId, indexSapatos);
            break;
        case 'AcessoriosF':
            indexAcessorios = (indexAcessorios + 1) % produtosFemininos.AcessoriosF.length;
            updateSlide(category, elementId, indexAcessorios);
            break;
    }
}

function prevSlide(category, elementId) {
    switch (category) {
        case 'RoupasF':
            indexRoupas = (indexRoupas - 1 + produtosFemininos.RoupasF.length) % produtosFemininos.RoupasF.length;
            updateSlide(category, elementId, indexRoupas);
            break;
        case 'SapatosF':
            indexSapatos = (indexSapatos - 1 + produtosFemininos.SapatosF.length) % produtosFemininos.SapatosF.length;
            updateSlide(category, elementId, indexSapatos);
            break;
        case 'AcessoriosF':
            indexAcessorios = (indexAcessorios - 1 + produtosFemininos.AcessoriosF.length) % produtosFemininos.AcessoriosF.length;
            updateSlide(category, elementId, indexAcessorios);
            break;
    }
}
