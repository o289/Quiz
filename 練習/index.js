// HTML要素の取得
const question = document.getElementById('question');
const answer_button = document.getElementsByTagName('button');
const result_contents = document.getElementById('result');
// クイズデータの中身
const Quiz = [
    {
        index_quiz: '私は東京出身です',
        answers: [
                'I am from Tokyo.',
                'I is from Tokyo.',
                'Me am from Tokyo.',
                'You are form Tokyo.'
        ],
        incrememt: 'I am from Tokyo.'
    },
    {
        index_quiz: '彼はマイクです',
        answers: [
                'She is Mike.',
                'His Mike.',
                'He is Mike.',
                'He are Mike.'
        ],
        incrememt: 'He is Mike.'
    },
    {
        index_quiz: '私はテレビを見ます',
        answers: [
                'I watched TV.',
                'I see TV.',
                'I look TV.',
                'I watch TV.'
        ],
        incrememt: 'I watch TV.'
    },
    {   index_quiz: '私は日本食が好きです',
        answers: [
            'I head Japanese food.',
            'I like Japanese food.',
            'My like Japanese food.',
            'I loved Japanese food.'
        ],
        incrememt: 'I like Japanese food.'
    },
    {   index_quiz: '私はたくさんの質問があります',
        answers: [
            'I hold many questions.',
            'I am many questions.',
            'I has many question. ',
            'I have many questions.'
        ],
        incrememt: 'I have many questions.'
    },
    {
        index_quiz: '私は動物たちについて知っています',
        answers: [
            'I know in animals.',
            'I know about animals.',
            'I knew about animals.',
            'I known in animals.'
        ],
        incrememt: 'I know about animals.'
    },
    {
        index_quiz: '私の母はとても上手に料理をする',
        answers: [
            'My mother cooks very well.',
            'My mother cook very well.',
            'My mother cooked very well. ',
            'My mother is cooking very well.'
        ],
        incrememt: 'My mother cooks very well.'
    },
    {
        index_quiz: 'マイクは早く起きます',
        answers: [
            'Mike get up early.',
            'Mike gets up early.',
            'Mike got up early.',
            'Mike gets upp early.'
        ],
        incrememt: 'Mike gets up early.'
    },
    {
        index_quiz: 'あいつはいつも一人です',
        answers: [
            'He is alone.',
            'She is always alone.',
            'He is always alone.',
            'Is he always alone.'
        ],
        incrememt: 'He is always alone.'
    },
    {
        index_quiz: 'お金貸してください',
        answers: [
            'Can you lend me your money?',
            'I can steal your money.',
            'You are happy.',
            'Please lend me your money.'
        ],
        incrememt: 'Please lend me your money.'
    },
    {
        index_quiz: 'きゅうり食べたら骨折れた',
        answers: [
            'I ate a cucumber and it broke my bone.',
            'I ate a green bell pepper and it broke my bone.',
            'I ate an onion and it broke my bone.',
            'I ate a potato and it broke my bone.'
        ],
        incrememt: 'I ate a cucumber and it broke my bone.'
    },
    {
        index_quiz: 'やればできる！',
        answers: [
            'I can do it if you try.',
            'You can not do it if you try.',
            'I do it if you try.',
            'You can do it if you try.'
        ],
        incrememt: 'You can do it if you try.'
    },
    {
        index_quiz: 'そんなわけない',
        answers: [
            'No, it is not.',
            'Yes, it can be.',
            'Yes, it can not be.',
            'No, it can not be.'
        ],
        incrememt: 'No, it can not be.'
    },
    {
        index_quiz: '花粉症を発症した',
        answers: [
            'I had hay fever.',
            'I developed hay fever.',
            'I hold hay fever.',
            'I love hay fever.'
        ],
        incrememt: 'I developed hay fever.'
    },
    {
        index_quiz: '私が子供の時、あなたのことを知らなかった',
        answers: [
            'I did not know you when I was a adult.',
            'I did not know you when I was a kid.',
            'You know I when I was a kid.',
            'I did not know your when I was a kid.'
        ],
        incrememt: 'I did not know you when I was a kid.'
    },
    {
        index_quiz: 'モドリッチはありえないくらい上手にサッカーをする',
        answers: [
            'Modric played soccer impossibly well.',
            'Modric plays soccer impossibly well.',
            'Modric playing soccer impossibly well.',
            'Modric  is played soccer impossibly well.'
        ],
        incrememt: 'Modric plays soccer impossibly well.'
    },
    {
        index_quiz: '私は昨日道端に唾を吐くおじさんを見た',
        answers: [
            'I saw an old man spit on the side of the road yesterday.',
            'I saw a young man spit on the side of the road yesterday.',
            'I saw a old man spit on the side of the road yesterday. ',
            'I saw an old man spit in the side of the road yesterday'
        ],
        incrememt: 'I saw an old man spit on the side of the road yesterday.'
    },
    {
        index_quiz: '彼はいつも一人で泣いている',
        answers: [
            'He always cries alone.',
            'He always crying alone.',
            'He always cry alone.',
            'His always cries alone.'
        ],
        incrememt: 'He always cries alone.'
    },
    {
        index_quiz: 'あいつはいつも一人でピザを作っている',
        answers: [
            'He always made pizzas alone.',
            'He always make pizzas alone.',
            'He always makes pizzas alone.',
            'He always makes pizza alone.'
        ],
        incrememt: 'He always makes pizzas alone.'
    },
    {
        index_quiz: '辞任するとは言ったが辞任するとは言っていない',
        answers: [
            'I said I will resign, not that I would resign.',
            'I said I would resign, not that I would resign.',
            'I said I would resign, not that I will resign.',
            'I said I would resign, no that I would resign.'
        ],
        incrememt: 'I said I would resign, not that I would resign.'
    },
    {
        index_quiz: '2024年はきっと明るい',
        answers: [
            'The year 2024 is sure to be bright.',
            'The year 2024 are sure to be bright.',
            'The year 2024 is sure for be bright.',
            'The year 2024 is sure to been bright.'
        ],
        incrememt: 'The year 2024 is sure to be bright.'
    },
];

// 数字
let QuizCount = 0;
let Buttons = 0;
// 定義
const question_count = Quiz[QuizCount];
const AllQuiz = Quiz.length;
let ButtonLength = answer_button.length;


// 実際に表示させる
function display(){
    const question_count = Quiz[QuizCount];
    // 
    question.innerText = question_count.index_quiz;
    answer_button[0].innerText = question_count.answers[0];
    answer_button[1].innerText = question_count.answers[1];
    answer_button[2].innerText = question_count.answers[2];
    answer_button[3].innerText = question_count.answers[3];

};
display()
// スコア
let score = 0;
let incrememt = question_count.incrememt

// ボタン
function btu(){
    // ボタンの処理
    while(Buttons < ButtonLength){
        answer_button[Buttons].innerText = question_count.answers[Buttons]
        Buttons++
    };
};
btu();

// 処理
const clicked = (e) => {
    
    if (Quiz[QuizCount].incrememt === e.target.innerText) {
        audio();
        alert('correct')
        score++
    } else {
        ;
    }
    QuizCount++;
    // まだ問題が残っていたら次の問題に行く処理
    if (QuizCount < AllQuiz) {
        display();
    } else {
        result();
    };
};

// audio
function audio (){
    document.getElementById('audio').currentTime = 0; 
    document.getElementById('audio').play();
    
};

// 結果
function result() {
    if(score === 20){
        result_contents.innerText = '満点素晴らしい！'
    } else if (score >= 15){
        result_contents.innerText = 'あと少しで満点'
    } else if (score >= 10){
        result_contents.innerText = '過半数はとれたね'
    } else if (score >= 5){
        result_contents.innerText = 'ある程度はできているね'
    } else {
        result_contents.innerText = '勉強しようか'
    };
};

// clickイベント
answer_button[0].addEventListener('click', (e) => {
    clicked(e)
});
answer_button[1].addEventListener('click', (e) => {
    clicked(e)
});
answer_button[2].addEventListener('click', (e) => {
    clicked(e)
});
answer_button[3].addEventListener('click', (e) => {
    clicked(e)
});



