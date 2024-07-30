function generateComment() {
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const performance = document.getElementById('performance').value;

    const comments = {
        "優秀表現": {
            "國文": `親愛的${studentName}，你在國文課上的表現真的很棒！你能夠流利地朗讀課文，理解文章的意思，回答問題也很出色。老師希望你能繼續保持這樣的好表現哦！`,
            "數學": `親愛的${studentName}，你在數學課上的表現非常出色！你理解數學概念很快，解題也很厲害。老師覺得你很棒，繼續加油！`,
            "自然": `親愛的${studentName}，你在自然課上的表現非常優秀！你對各種科學現象都充滿好奇心，能夠積極參與課堂討論，提出獨特的見解。希望你能繼續探索和發現更多的科學知識！`,
            "社會": `親愛的${studentName}，你在社會課上的表現非常棒！你對課堂內容理解得很透徹，課堂討論時也能提出很好的觀點。繼續保持這樣的積極態度哦！`
        },
        "良好表現": {
            "國文": `親愛的${studentName}，你在國文課上的表現不錯哦！你能理解課文內容，回答問題也有自己的見解。老師希望你再接再厲，進一步提升自己！`,
            "數學": `親愛的${studentName}，你在數學課上的表現很不錯！你理解數學概念還算快，但有時候需要多一點練習。老師相信你能做得更好，加油！`,
            "自然": `親愛的${studentName}，你在自然課上的表現良好哦！你對課堂內容充滿興趣，觀察也很仔細。希望你能再接再厲，多讀一些科學書籍，提升自己！`,
            "社會": `親愛的${studentName}，你在社會課上的表現不錯哦！你能理解課堂內容，並提出自己的見解。老師希望你能繼續努力，深入研究這些有趣的課題！`
        },
        "需要改進": {
            "國文": `親愛的${studentName}，老師覺得你在國文課上還需要多努力哦。你在理解課文和回答問題方面有些困難，建議你多花點時間讀課外書，多練習造句。老師相信你能進步的，加油！`,
            "數學": `親愛的${studentName}，你在數學課上的表現還需要加油哦。理解和應用數學概念對你來說有些難度，老師建議你多做練習，有問題可以隨時問老師。一起努力吧！`,
            "自然": `親愛的${studentName}，你在自然課上的表現還有進步的空間哦。建議你多花時間學習科學知識，多問問題。老師相信你會越來越好的！`,
            "社會": `親愛的${studentName}，你在社會課上的表現需要多努力哦。課堂內容的理解對你來說有些困難，老師建議你多讀相關書籍，多做筆記。相信你一定能進步的，加油！`
        }
    };

    const comment = comments[performance][subject];
    document.getElementById('comment').innerText = comment;
}