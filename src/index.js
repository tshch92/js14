const maxArrLength = 10;
const maxMark = 10;
const minMark = 0;
const goodAverageMark = 9;

function Student(firstName, lastName, bday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bday = bday;
    this.scores = new Array(maxArrLength);
    this.presence = new Array(maxArrLength);
}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.bday;
};

//єто метод, которій вставляет значение в массив если там есть свободній слот

Student.prototype.insert = function (arr, score) {
    for (let i = 0; i < maxArrLength; i++) {
        if (arr[i] === undefined && i < maxArrLength - 1) {
            // с 0 по предпоследний єлементі мі записіваем значение и запрещаем его изменять. Никаких пересдач)))
            arr[i] = score;

            Object.defineProperty(arr, arr[i], {
                writable: false,
                enumerable: true,
                configurable: false,
            });
            return true;
        }

        if (arr[i] === undefined) {
            //на последнем элементе мы записываем значение, запрещаем его изменять и замораживаем весь массив
            arr[i] = score;

            Object.defineProperty(arr, arr[i], {
                writable: false,
                enumerable: true,
                configurable: false,
            });
            Object.freeze(arr);
            return true;
        }
    }
    return false;
};

Student.prototype.mark = function (score) {
    if (score < minMark || score > maxMark) {
        throw console.error(`Invalid mark. Please put values from ${minMark} to ${maxMark}`);
    }
    if (Student.prototype.insert(this.scores, score)) {
        return this.scores;
    }
    throw console.error('No more empty slots for marks');
};

Student.prototype.present = function () {
    if (Student.prototype.insert(this.presence, true)) {
        return this.presence;
    }
    throw console.error('No more lessons to attend');
};

Student.prototype.absent = function () {
    if (Student.prototype.insert(this.presence, false)) {
        return this.presence;
    }
    throw console.error('No more lessons to attend');
};

Student.prototype.averageMark = function () {
    const scoreSum = this.scores.reduce(function (acc, score) {
        if (score) {
            return acc + score;
        }
    });

    // дальше можно біло посчитать редюсом, но он не хотел работать

    let scoreNum = 0;

    this.scores.forEach(element => {
        if (element !== undefined) {
            scoreNum++;
        }
    });

    return scoreSum / scoreNum;
};

Student.prototype.statistics = function () {
    const avScore = this.averageMark();
    const totalPresence = this.presence.every(element => element === true || element === undefined);
    switch (true) {
        case avScore > goodAverageMark && totalPresence:
            return `Ути какой молодчинка!`;
        case avScore > goodAverageMark || totalPresence:
            return `Норм, но можно лучше`;

        default:
            return `Редиска!`;
    }
};

//  пусть будет

Object.defineProperties(Student.prototype, {
    scores: {
        writable: true,
        enumerable: true,
        configurable: true,
    },
    presence: {
        writable: true,
        enumerable: true,
        configurable: true,
    },
    getAge: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    mark: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    insert: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    present: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    absent: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    statistics: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
    averageMark: {
        writable: false,
        enumerable: false,
        configurable: false,
    },
});

//дальше идут примеры

const mary = new Student('Mary', 'Brown', 1998);

for (let i = 0; i < maxArrLength; i++) {
    mary.mark(i);
}

//mary.mark(10);
//mary.mark(9);

mary.present();
mary.present();
mary.absent();

console.log(mary);

console.log(mary.averageMark());

console.log(mary.statistics());

console.log(mary.getAge());
