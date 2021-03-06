var Fighter = function() {
    var _movingStrategy, _attackStrategy;
    this.setMoveStrategy = function(movingStrategy) {
        _movingStrategy = movingStrategy;
    },
    this.setAttackStrategy = function(attackStrategy) {
        _attackStrategy = attackStrategy;
    },
    this.move = function() {
        _movingStrategy();
    },
    this.attack = function() {
        _attackStrategy();
    };
};



var flyingStrategy = function() {
    console.log("FLYING...");
};
var walkingStrategy = function() {
    console.log("WALKING...");
};
//// 요구 사항 변경에 의해 나중에 추가
//var crawlingStrategy = function() {
//    console.log("CRAWLING...");
//};



var kickStrategy = function() {
    console.log("kick!!!");
};
var punchStrategy = function() {
    console.log("punch!!!");
};
//// 요구 사항 변경에 의해 나중에 추가
//var tackleStrategy = function() {
//    console.log("tackle!!!");
//};



(function() {
    var fighter = new Fighter();

    console.log("===== Flying + Kick =====");
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.setMoveStrategy(flyingStrategy);
    fighter.setAttackStrategy(kickStrategy);
    fighter.move();
    fighter.attack();

    console.log("===== Walking + Punch =====");
    // 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    fighter.setMoveStrategy(walkingStrategy);
    fighter.setAttackStrategy(punchStrategy);
    fighter.move();
    fighter.attack();

    //// 요구 사항 변경에 의해 아래와 같은 새로운 전략이 추가되어도
    //// fighter.move(), fighter.attack() 은 변경되지 않음
    //console.log("===== Crawling + Tackle =====");
    //fighter.setMoveStrategy(crawlingStrategy);
    //fighter.setAttackStrategy(tackleStrategy);
    //// 이동이나 공격전략이 어떻게 변경되도 아래의 코드는 변하지 않는다.
    //fighter.move();
    //fighter.attack();
})();
