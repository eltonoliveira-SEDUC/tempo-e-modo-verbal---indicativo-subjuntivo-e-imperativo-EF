// Dados das questões
const questions = [
  {
    "id": 1,
    "question": "Em qual modo verbal está a frase \"Eu **estudo** alemão aos sábados\"?",
    "options": [
      {"text": "Modo Subjuntivo", "isCorrect": false, "explanation": "O Modo Subjuntivo expressa dúvida, desejo ou possibilidade, não uma ação habitual como 'estudo'. Tente novamente!"},
      {"text": "Modo Imperativo", "isCorrect": false, "explanation": "O Modo Imperativo expressa ordem, conselho ou pedido. 'Estudo' não é uma ordem. Tente novamente!"},
      {"text": "Modo Indicativo", "isCorrect": true, "explanation": "Correto! O Modo Indicativo expressa ações que são consideradas reais, certas ou habituais, como 'estudo' que indica uma ação que acontece regularmente."},
      {"text": "Modo Infinitivo", "isCorrect": false, "explanation": "O Modo Infinitivo é a forma original do verbo (estudar, comer, partir), sem conjugação. Tente novamente!"}
    ]
  },
  {
    "id": 2,
    "question": "Qual o tempo verbal da palavra destacada em \"Ela **viajou** para o México\"?",
    "options": [
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. 'Viajou' indica uma ação que já aconteceu. Tente novamente!"},
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": true, "explanation": "Correto! O Pretérito Perfeito do Indicativo indica uma ação que começou e terminou no passado."},
      {"text": "Futuro do Presente do Indicativo", "isCorrect": false, "explanation": "O Futuro do Presente do Indicativo indica uma ação que acontecerá. 'Viajou' já aconteceu. Tente novamente!"},
      {"text": "Pretérito Imperfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Imperfeito do Indicativo indica uma ação contínua no passado. 'Viajou' é uma ação concluída. Tente novamente!"}
    ]
  },
  {
    "id": 3,
    "question": "Complete a frase: \"Se ele ________ (estudar) mais, passaria de ano.\"",
    "options": [
      {"text": "estuda", "isCorrect": false, "explanation": "'Estuda' está no Presente do Indicativo, que não expressa a condição ou hipótese necessária aqui. Tente novamente!"},
      {"text": "estudasse", "isCorrect": true, "explanation": "Correto! 'Estudasse' está no Pretérito Imperfeito do Subjuntivo, que expressa uma condição ou hipótese no passado."},
      {"text": "estudará", "isCorrect": false, "explanation": "'Estudará' está no Futuro do Presente do Indicativo, que indica uma ação futura certa, não uma condição. Tente novamente!"},
      {"text": "estude", "isCorrect": false, "explanation": "'Estude' está no Presente do Subjuntivo, que expressa desejo ou possibilidade, mas não a condição para 'passaria'. Tente novamente!"}
    ]
  },
  {
    "id": 4,
    "question": "Qual das frases abaixo está no Modo Imperativo?",
    "options": [
      {"text": "Eu comi todo o bolo.", "isCorrect": false, "explanation": "'Comi' está no Modo Indicativo, indicando uma ação real e concluída. Tente novamente!"},
      {"text": "Talvez ele coma o bolo.", "isCorrect": false, "explanation": "'Coma' está no Modo Subjuntivo, expressando uma possibilidade. Tente novamente!"},
      {"text": "Coma o bolo!", "isCorrect": true, "explanation": "Correto! 'Coma' aqui é uma ordem ou instrução, característica do Modo Imperativo."},
      {"text": "Se ele comesse o bolo...", "isCorrect": false, "explanation": "'Comesse' está no Modo Subjuntivo, expressando uma condição. Tente novamente!"}
    ]
  },
  {
    "id": 5,
    "question": "Identifique o tempo verbal de \"Nós **amávamos** a praia no verão.\"",
    "options": [
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Perfeito indica uma ação concluída. 'Amávamos' sugere uma ação contínua no passado. Tente novamente!"},
      {"text": "Pretérito Imperfeito do Indicativo", "isCorrect": true, "explanation": "Correto! O Pretérito Imperfeito do Indicativo expressa uma ação habitual ou contínua no passado."},
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. 'Amávamos' é uma ação passada. Tente novamente!"},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": false, "explanation": "O Futuro do Pretérito indica uma ação futura condicionada. 'Amávamos' é uma ação passada. Tente novamente!"}
    ]
  },
  {
    "id": 6,
    "question": "Qual a conjugação correta do verbo 'partir' no Futuro do Presente do Indicativo para 'eles'?",
    "options": [
      {"text": "eles partem", "isCorrect": false, "explanation": "'Partem' está no Presente do Indicativo. Tente novamente!"},
      {"text": "eles partiram", "isCorrect": false, "explanation": "'Partiram' está no Pretérito Perfeito do Indicativo. Tente novamente!"},
      {"text": "eles partirão", "isCorrect": true, "explanation": "Correto! 'Partirão' indica uma ação que acontecerá no futuro."},
      {"text": "eles partiriam", "isCorrect": false, "explanation": "'Partiriam' está no Futuro do Pretérito do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 7,
    "question": "Em \"Quando eu **comer** o bolo, avisarei.\", qual o modo e tempo verbal?",
    "options": [
      {"text": "Indicativo, Futuro do Presente", "isCorrect": false, "explanation": "'Comer' aqui não expressa certeza, mas uma possibilidade futura. Tente novamente!"},
      {"text": "Subjuntivo, Futuro", "isCorrect": true, "explanation": "Correto! O Futuro do Subjuntivo expressa uma ação futura incerta ou hipotética."},
      {"text": "Imperativo, Presente", "isCorrect": false, "explanation": "'Comer' não é uma ordem. Tente novamente!"},
      {"text": "Indicativo, Presente", "isCorrect": false, "explanation": "'Comer' não indica uma ação que ocorre agora com certeza. Tente novamente!"}
    ]
  },
  {
    "id": 8,
    "question": "Qual a forma negativa do imperativo para 'tu' do verbo 'amar'?",
    "options": [
      {"text": "não ames tu", "isCorrect": true, "explanation": "Correto! O Imperativo Negativo para 'tu' mantém a forma do Presente do Subjuntivo."},
      {"text": "não ama tu", "isCorrect": false, "explanation": "'Ama' está no Imperativo Afirmativo. No negativo, a forma muda. Tente novamente!"},
      {"text": "não amavas tu", "isCorrect": false, "explanation": "'Amavas' está no Pretérito Imperfeito do Indicativo. Tente novamente!"},
      {"text": "não amarias tu", "isCorrect": false, "explanation": "'Amarias' está no Futuro do Pretérito do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 9,
    "question": "A frase \"Se eu **tivesse** tempo, viajaria.\" está em qual modo verbal?",
    "options": [
      {"text": "Modo Indicativo", "isCorrect": false, "explanation": "O Modo Indicativo expressa certeza. 'Tivesse' expressa uma condição ou hipótese. Tente novamente!"},
      {"text": "Modo Imperativo", "isCorrect": false, "explanation": "O Modo Imperativo expressa ordem. 'Tivesse' não é uma ordem. Tente novamente!"},
      {"text": "Modo Subjuntivo", "isCorrect": true, "explanation": "Correto! O Modo Subjuntivo expressa dúvida, desejo, possibilidade ou condição, como em 'tivesse'."},
      {"text": "Modo Infinitivo", "isCorrect": false, "explanation": "O Modo Infinitivo é a forma original do verbo. Tente novamente!"}
    ]
  },
  {
    "id": 10,
    "question": "Qual o tempo verbal de \"Quando cheguei ao cinema, o filme já **começara**.\"?",
    "options": [
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Perfeito indica uma ação concluída no passado. 'Começara' indica uma ação anterior a outra ação passada. Tente novamente!"},
      {"text": "Pretérito Imperfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Imperfeito indica uma ação contínua no passado. 'Começara' é uma ação pontual anterior. Tente novamente!"},
      {"text": "Pretérito Mais-que-Perfeito do Indicativo", "isCorrect": true, "explanation": "Correto! O Pretérito Mais-que-Perfeito do Indicativo indica uma ação passada que ocorreu antes de outra ação passada."},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": false, "explanation": "O Futuro do Pretérito indica uma ação futura condicionada. 'Começara' é uma ação passada. Tente novamente!"}
    ]
  },
  {
    "id": 11,
    "question": "Complete a frase: \"É importante que você ________ (fazer) a lição de casa.\"",
    "options": [
      {"text": "faz", "isCorrect": false, "explanation": "'Faz' está no Presente do Indicativo, que expressa certeza, não a necessidade ou desejo implícita aqui. Tente novamente!"},
      {"text": "fará", "isCorrect": false, "explanation": "'Fará' está no Futuro do Presente do Indicativo, que indica uma ação futura certa. Tente novamente!"},
      {"text": "faça", "isCorrect": true, "explanation": "Correto! 'Faça' está no Presente do Subjuntivo, que expressa desejo, necessidade ou possibilidade."},
      {"text": "fez", "isCorrect": false, "explanation": "'Fez' está no Pretérito Perfeito do Indicativo, indicando uma ação concluída. Tente novamente!"}
    ]
  },
  {
    "id": 12,
    "question": "Qual o modo verbal de \"**Leia** o livro com atenção!\"?",
    "options": [
      {"text": "Modo Indicativo", "isCorrect": false, "explanation": "O Modo Indicativo expressa certeza. 'Leia' é uma ordem. Tente novamente!"},
      {"text": "Modo Subjuntivo", "isCorrect": false, "explanation": "O Modo Subjuntivo expressa dúvida ou desejo. 'Leia' é uma instrução direta. Tente novamente!"},
      {"text": "Modo Imperativo", "isCorrect": true, "explanation": "Correto! O Modo Imperativo expressa ordem, conselho ou pedido."},
      {"text": "Modo Infinitivo", "isCorrect": false, "explanation": "O Modo Infinitivo é a forma original do verbo. Tente novamente!"}
    ]
  },
  {
    "id": 13,
    "question": "Identifique o tempo verbal de \"Eu **amarei** você para sempre.\"",
    "options": [
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. 'Amarei' indica uma ação futura. Tente novamente!"},
      {"text": "Futuro do Presente do Indicativo", "isCorrect": true, "explanation": "Correto! O Futuro do Presente do Indicativo expressa uma ação que acontecerá no futuro."},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": false, "explanation": "O Futuro do Pretérito indica uma ação futura condicionada. 'Amarei' é uma certeza futura. Tente novamente!"},
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Perfeito indica uma ação concluída no passado. Tente novamente!"}
    ]
  },
  {
    "id": 14,
    "question": "Qual a conjugação correta do verbo 'comer' no Pretérito Imperfeito do Subjuntivo para 'nós'?",
    "options": [
      {"text": "nós comemos", "isCorrect": false, "explanation": "'Comemos' pode ser Presente do Indicativo ou Pretérito Perfeito do Indicativo. Tente novamente!"},
      {"text": "nós comêssemos", "isCorrect": true, "explanation": "Correto! 'Comêssemos' expressa uma condição ou hipótese no passado no Modo Subjuntivo."},
      {"text": "nós comeríamos", "isCorrect": false, "explanation": "'Comeríamos' está no Futuro do Pretérito do Indicativo. Tente novamente!"},
      {"text": "nós comíamos", "isCorrect": false, "explanation": "'Comíamos' está no Pretérito Imperfeito do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 15,
    "question": "A frase \"Eles **partiriam** amanhã, se pudessem.\" está em qual tempo verbal?",
    "options": [
      {"text": "Futuro do Presente do Indicativo", "isCorrect": false, "explanation": "O Futuro do Presente indica uma ação futura certa. 'Partiriam' indica uma ação futura condicionada. Tente novamente!"},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": true, "explanation": "Correto! O Futuro do Pretérito do Indicativo expressa uma ação que poderia ter acontecido ou que está condicionada a outra."},
      {"text": "Pretérito Imperfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Imperfeito indica uma ação contínua no passado. Tente novamente!"},
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. Tente novamente!"}
    ]
  },
  {
    "id": 16,
    "question": "Qual a conjugação correta do verbo 'amar' no Presente do Subjuntivo para 'que eles'?",
    "options": [
      {"text": "que eles amam", "isCorrect": false, "explanation": "'Amam' está no Presente do Indicativo. Tente novamente!"},
      {"text": "que eles amem", "isCorrect": true, "explanation": "Correto! 'Amem' expressa desejo, possibilidade ou necessidade no Presente do Subjuntivo."},
      {"text": "que eles amavam", "isCorrect": false, "explanation": "'Amavam' está no Pretérito Imperfeito do Indicativo. Tente novamente!"},
      {"text": "que eles amariam", "isCorrect": false, "explanation": "'Amariam' está no Futuro do Pretérito do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 17,
    "question": "Em \"**Não corra** na sala!\", qual o modo verbal?",
    "options": [
      {"text": "Modo Indicativo", "isCorrect": false, "explanation": "O Modo Indicativo expressa certeza. 'Não corra' é uma proibição. Tente novamente!"},
      {"text": "Modo Subjuntivo", "isCorrect": false, "explanation": "Embora use a forma do subjuntivo, a função aqui é de ordem/proibição. Tente novamente!"},
      {"text": "Modo Imperativo", "isCorrect": true, "explanation": "Correto! O Modo Imperativo Negativo expressa uma proibição ou um comando para não fazer algo."},
      {"text": "Modo Infinitivo", "isCorrect": false, "explanation": "O Modo Infinitivo é a forma original do verbo. Tente novamente!"}
    ]
  },
  {
    "id": 18,
    "question": "Qual o tempo verbal de \"Eu **comi** uma maçã ontem.\"?",
    "options": [
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. 'Comi' indica uma ação passada. Tente novamente!"},
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": true, "explanation": "Correto! O Pretérito Perfeito do Indicativo indica uma ação que começou e terminou no passado."},
      {"text": "Pretérito Imperfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Imperfeito indica uma ação contínua no passado. 'Comi' é uma ação pontual. Tente novamente!"},
      {"text": "Futuro do Presente do Indicativo", "isCorrect": false, "explanation": "O Futuro do Presente indica uma ação que acontecerá. 'Comi' já aconteceu. Tente novamente!"}
    ]
  },
  {
    "id": 19,
    "question": "Complete a frase: \"Espero que ele ________ (vir) à festa.\"",
    "options": [
      {"text": "vem", "isCorrect": false, "explanation": "'Vem' está no Presente do Indicativo, que expressa certeza. Aqui, expressamos um desejo. Tente novamente!"},
      {"text": "virá", "isCorrect": false, "explanation": "'Virá' está no Futuro do Presente do Indicativo, que indica uma ação futura certa. Tente novamente!"},
      {"text": "venha", "isCorrect": true, "explanation": "Correto! 'Venha' está no Presente do Subjuntivo, que expressa desejo ou expectativa."},
      {"text": "veio", "isCorrect": false, "explanation": "'Veio' está no Pretérito Perfeito do Indicativo, indicando uma ação concluída. Tente novamente!"}
    ]
  },
  {
    "id": 20,
    "question": "Qual a conjugação correta do verbo 'partir' no Imperativo Afirmativo para 'vós'?",
    "options": [
      {"text": "partis", "isCorrect": false, "explanation": "'Partis' está no Presente do Indicativo. Tente novamente!"},
      {"text": "parti", "isCorrect": true, "explanation": "Correto! 'Parti' é a forma correta para dar uma ordem a 'vós'."},
      {"text": "partam", "isCorrect": false, "explanation": "'Partam' é a forma para 'eles/elas' no Imperativo Afirmativo. Tente novamente!"},
      {"text": "partireis", "isCorrect": false, "explanation": "'Partireis' está no Futuro do Presente do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 21,
    "question": "Em \"Se ela **amasse** a música, tocaria um instrumento.\", qual o modo e tempo verbal?",
    "options": [
      {"text": "Indicativo, Pretérito Perfeito", "isCorrect": false, "explanation": "'Amasse' não expressa uma ação concluída com certeza. Tente novamente!"},
      {"text": "Subjuntivo, Pretérito Imperfeito", "isCorrect": true, "explanation": "Correto! O Pretérito Imperfeito do Subjuntivo expressa uma condição ou hipótese no passado."},
      {"text": "Imperativo, Presente", "isCorrect": false, "explanation": "'Amasse' não é uma ordem. Tente novamente!"},
      {"text": "Indicativo, Presente", "isCorrect": false, "explanation": "'Amasse' não indica uma ação que ocorre agora com certeza. Tente novamente!"}
    ]
  },
  {
    "id": 22,
    "question": "Qual o tempo verbal de \"Eles **receberão** as gratificações no fim do mês.\"?",
    "options": [
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. 'Receberão' indica uma ação futura. Tente novamente!"},
      {"text": "Pretérito Perfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Perfeito indica uma ação concluída no passado. Tente novamente!"},
      {"text": "Futuro do Presente do Indicativo", "isCorrect": true, "explanation": "Correto! O Futuro do Presente do Indicativo expressa uma ação que acontecerá no futuro."},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": false, "explanation": "O Futuro do Pretérito indica uma ação futura condicionada. 'Receberão' é uma certeza futura. Tente novamente!"}
    ]
  },
  {
    "id": 23,
    "question": "Complete a frase: \"Quando nós ________ (chegar) em casa, ligaremos para você.\"",
    "options": [
      {"text": "chegamos", "isCorrect": false, "explanation": "'Chegamos' está no Presente do Indicativo ou Pretérito Perfeito do Indicativo. Aqui, expressamos uma ação futura incerta. Tente novamente!"},
      {"text": "chegaremos", "isCorrect": false, "explanation": "'Chegaremos' está no Futuro do Presente do Indicativo, que indica uma ação futura certa. Tente novamente!"},
      {"text": "chegarmos", "isCorrect": true, "explanation": "Correto! 'Chegarmos' está no Futuro do Subjuntivo, que expressa uma ação futura incerta ou hipotética."},
      {"text": "chegávamos", "isCorrect": false, "explanation": "'Chegávamos' está no Pretérito Imperfeito do Indicativo. Tente novamente!"}
    ]
  },
  {
    "id": 24,
    "question": "Qual o modo verbal de \"**Não partas** agora!\"?",
    "options": [
      {"text": "Modo Indicativo", "isCorrect": false, "explanation": "O Modo Indicativo expressa certeza. 'Não partas' é uma proibição. Tente novamente!"},
      {"text": "Modo Subjuntivo", "isCorrect": false, "explanation": "Embora use a forma do subjuntivo, a função aqui é de ordem/proibição. Tente novamente!"},
      {"text": "Modo Imperativo", "isCorrect": true, "explanation": "Correto! O Modo Imperativo Negativo expressa uma proibição ou um comando para não fazer algo."},
      {"text": "Modo Infinitivo", "isCorrect": false, "explanation": "O Modo Infinitivo é a forma original do verbo. Tente novamente!"}
    ]
  },
  {
    "id": 25,
    "question": "Identifique o tempo verbal de \"Eu **tinha comido** muito antes da festa.\"",
    "options": [
      {"text": "Pretérito Perfeito Composto do Indicativo", "isCorrect": true, "explanation": "Correto! O Pretérito Perfeito Composto do Indicativo indica uma ação que ocorreu antes de outra ação passada, usando um verbo auxiliar ('ter' ou 'haver') e o particípio."},
      {"text": "Pretérito Mais-que-Perfeito do Indicativo", "isCorrect": false, "explanation": "O Pretérito Mais-que-Perfeito simples seria 'comera'. 'Tinha comido' é a forma composta. Tente novamente!"},
      {"text": "Presente do Indicativo", "isCorrect": false, "explanation": "O Presente do Indicativo indica uma ação que ocorre agora. Tente novamente!"},
      {"text": "Futuro do Pretérito do Indicativo", "isCorrect": false, "explanation": "O Futuro do Pretérito indica uma ação futura condicionada. Tente novamente!"}
    ]
  }
];

// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

// Elementos DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const feedbackModal = document.getElementById('feedback-modal');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const tryAgainBtn = document.getElementById('try-again-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');

const progressBar = document.getElementById('progress');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');

const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const finalScore = document.getElementById('final-score');
const performanceText = document.getElementById('performance-text');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
tryAgainBtn.addEventListener('click', hideModal);
nextQuestionBtn.addEventListener('click', nextQuestion);

optionButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => selectOption(index));
});

// Funções principais
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function restartQuiz() {
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Atualizar informações da questão
    questionNumber.textContent = `Questão ${currentQuestionIndex + 1} de ${questions.length}`;
    questionText.innerHTML = question.question;
    
    // Atualizar barra de progresso
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Carregar opções
    optionButtons.forEach((btn, index) => {
        const optionText = btn.querySelector('.option-text');
        optionText.textContent = question.options[index].text;
        
        // Reset button states
        btn.classList.remove('selected', 'correct', 'incorrect', 'disabled');
        btn.disabled = false;
    });
    
    selectedOption = null;
}

function selectOption(optionIndex) {
    if (selectedOption !== null) return; // Já selecionou uma opção
    
    selectedOption = optionIndex;
    const question = questions[currentQuestionIndex];
    const selectedBtn = optionButtons[optionIndex];
    
    // Marcar opção selecionada
    selectedBtn.classList.add('selected');
    
    // Verificar resposta
    const isCorrect = question.options[optionIndex].isCorrect;
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        showFeedback('Correto! 🎉', question.options[optionIndex].explanation, true);
    } else {
        selectedBtn.classList.add('incorrect');
        showFeedback('Ops! Resposta incorreta 😔', question.options[optionIndex].explanation, false);
    }
    
    // Desabilitar todos os botões
    optionButtons.forEach(btn => {
        btn.classList.add('disabled');
        btn.disabled = true;
    });
}

function showFeedback(title, explanation, isCorrect) {
    feedbackTitle.textContent = title;
    feedbackText.textContent = explanation;
    
    if (isCorrect) {
        tryAgainBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'inline-block';
    } else {
        tryAgainBtn.style.display = 'inline-block';
        nextQuestionBtn.style.display = 'none';
    }
    
    feedbackModal.classList.add('active');
}

function hideModal() {
    feedbackModal.classList.remove('active');
    
    // Reset da questão para tentar novamente
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect', 'disabled');
        btn.disabled = false;
    });
    
    selectedOption = null;
}

function nextQuestion() {
    feedbackModal.classList.remove('active');
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    finalScore.textContent = score;
    
    // Mensagem de performance
    const percentage = (score / questions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excelente! Você domina muito bem os modos e tempos verbais! 🌟';
    } else if (percentage >= 70) {
        message = 'Muito bom! Você tem um bom conhecimento sobre o assunto! 👏';
    } else if (percentage >= 50) {
        message = 'Bom trabalho! Continue estudando para melhorar ainda mais! 📚';
    } else {
        message = 'Continue praticando! Com mais estudo, você vai conseguir! 💪';
    }
    
    performanceText.textContent = message;
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Quiz já está pronto para usar
    console.log('Quiz de Modos e Tempos Verbais carregado com sucesso!');
});

