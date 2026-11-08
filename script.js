    const mainCanvas = document.getElementById("main-canvas");
    const gameCanvas = document.getElementById("game-canvas");
    const dialogueCanvas = document.getElementById("dialogue-canvas");
    const c = mainCanvas.getContext('2d');
    const ctx = gameCanvas.getContext('2d');
    const context = dialogueCanvas.getContext('2d');
    mainCanvas.width = 480;
    mainCanvas.height = 270;
    dialogueCanvas.width = 480;
    dialogueCanvas.height = 270;
    gameCanvas.width = 1200;
    gameCanvas.height = 1200;
    let gameOn = false;
    gameCanvas.style.display = "none";
    let gameCanvasWidth = mainCanvas.getBoundingClientRect().width / 3 + "px";

    gameCanvas.style.width = gameCanvasWidth;
    gameCanvas.style.height = gameCanvasWidth;

    c.imageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;   

    let fontOrder = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    let key = {
        left: false,
        up: false,
        right: false,
        down: false,
        w: false,
        a: false,
        s: false,
        d: false,
        r: false,
        space: false
    }

    let mouse = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        leftClick: false
    }

    let sounds = {
        break: new Audio('Sounds/break.mp3'),
        explosion: new Audio('Sounds/explosion.mp3'),
        impact: new Audio('Sounds/impact.mp3'),
        left: new Audio('Sounds/left.wav'),
        right: new Audio('Sounds/right.wav'),
        up: new Audio('Sounds/up.wav'),
        down: new Audio('Sounds/down.wav'),
        music: new Audio('Sounds/music.mp3'),
        win: new Audio('Sounds/win.mp3'),
        door: new Audio('Sounds/door.mp3'),
        beep: new Audio('Sounds/beep.mp3'),
        collect: new Audio('Sounds/collect.mp3'),
        pressurePlate: new Audio('Sounds/pressurePlate.mp3'),
        mainMenuMusic: new Audio('Sounds/mainMenuMusic.mp3'),
        button: new Audio('Sounds/button.mp3'),
        restart: new Audio('Sounds/restart.mp3'),
    }

    let images = {
        font: new Image(),
        prompt: new Image(),
        demo: new Image(),
        tutorialBotTitle: new Image(),
        geraldTitle: new Image(),
        player: new Image(),
        crate: new Image(),
        spike: new Image(),
        bubble: new Image(),
        goal: new Image(),
        gravityCharge: new Image(),
        background: new Image(),
        floor: new Image(),
        resetCharge: new Image(),
        door: new Image(),
        robot: new Image(),
        blocks: [],
        key: new Image(),
        lock: new Image(),
        phaseBlock: {
            closed: new Image(),
            open: new Image()
        },
        bomb: new Image(),
        breakable: new Image(),
        shield: new Image(),
        horizontalTunnel: new Image(),
        verticalTunnel: new Image(),
        title: new Image(),
        logo: new Image(),
        barrier: new Image(),
        reverseBarrier: new Image(),
        button: {
            unpressed: [new Image(), new Image()],
            pressed: [new Image(), new Image()],
        },
        buttonBlock: [new Image(), new Image()],
        unpressedPressurePlate: new Image(),
        pressedPressurePlate: new Image(),
        pressurePlateBlock: new Image(),
        mine: new Image(),
        timedBlock: [],
        winAnimation: new Image(),
        explosion: new Image(),
        smallerExplosion: new Image(),
        playButton: new Image(),
        crateParticle: new Image(),
        breakableParticle: new Image(),
        settingsButton: new Image(),
        backButton: new Image(),
        levelSelect: new Image(),
        leftArrow: new Image(),
        rightArrow: new Image(),
        upArrow: new Image(),
        downArrow: new Image(),
        lockedLevel: new Image(),
        levels: [],
        slider: new Image(),
        settings: new Image(),
        receiver: new Image(),
        dialogueBox: new Image(),
        tutorialBot: new Image(),
        terabyte: new Image()
    }
    for(let i = 0; i < 256; i++){
        images.blocks.push(new Image());
        images.blocks[i].src = "Images/blocks/" + i + ".png";
    }

    for(let i = 1; i <= 100; i++){
        images.levels.push(new Image());
        images.levels[i-1].src = "Images/levels/" + i + ".png";
    }

    for(let i = 1; i <= 50; i++){
        images.timedBlock.push(new Image());
        images.timedBlock[i-1].src = "Images/timedBlock/" + i + ".png";
    }
    
    images.font.src = "Images/font.png";
    images.geraldTitle.src = "Images/geraldTitle.png";
    images.dialogueBox.src = "Images/dialogueBox.png";
    images.tutorialBotTitle.src = "Images/tutorialBotTitle.png";
    images.tutorialBot.src = "Images/tutorialBot.png";
    images.terabyte.src = "Images/terabyte.png";
    images.settings.src = "Images/settings.png";
    images.leftArrow.src = "Images/leftArrow.png";
    images.rightArrow.src = "Images/rightArrow.png";
    images.demo.src = "Images/demo.png";
    images.upArrow.src = "Images/upArrow.png";
    images.downArrow.src = "Images/downArrow.png";
    images.backButton.src = "Images/backButton.png";
    images.settingsButton.src = "Images/settingsButton.png";
    images.levelSelect.src = "Images/levelSelect.png";
    images.crateParticle.src = "Images/crateParticle.png";
    images.breakableParticle.src = "Images/breakableParticle.png";
    images.winAnimation.src = "Images/winAnimation.png";
    images.title.src = "Images/title.png";
    images.logo.src = "Images/logo.png";
    images.player.src = "Images/player.png";
    images.bomb.src = "Images/bomb.png";
    images.breakable.src = "Images/breakable.png";
    images.phaseBlock.open.src = "Images/phaseBlock/open.png";
    images.phaseBlock.closed.src = "Images/phaseBlock/closed.png";
    images.crate.src = "Images/crate.png";
    images.spike.src = "Images/spike.png";
    images.bubble.src = "Images/bubble.png";
    images.goal.src = "Images/goal.png";
    images.key.src = "Images/key.png";
    images.lock.src = "Images/lock.png";
    images.gravityCharge.src = "Images/gravityCharge.png";
    images.background.src = "Images/background.png";
    images.floor.src = "Images/floor.png";
    images.resetCharge.src = "Images/resetCharge.png";
    images.door.src = "Images/door.png";
    images.explosion.src = "Images/explosion.png";
    images.smallerExplosion.src = "Images/smallerExplosion.png";
    images.playButton.src = "Images/playButton.png";
    images.receiver.src = "Images/receiver.png";
    for(let i = 0; i < images.button.unpressed.length; i++){
        images.button.unpressed[i].src = "Images/button/unpressed" + (parseInt(i)+1).toString() + ".png";
    }
    for(let i = 0; i < images.button.pressed.length; i++){
        images.button.pressed[i].src = "Images/button/pressed" + (parseInt(i)+1).toString() + ".png";
    }

    images.robot.src = "Images/robot.png";
    images.shield.src = "Images/shield.png";
    images.horizontalTunnel.src = "Images/horizontalTunnel.png";
    images.verticalTunnel.src = "Images/verticalTunnel.png";
    images.barrier.src = "Images/barrier.png";
    images.reverseBarrier.src = "Images/reverseBarrier.png";
    images.unpressedPressurePlate.src = "Images/unpressedPressurePlate.png";
    images.pressedPressurePlate.src = "Images/pressedPressurePlate.png";
    images.pressurePlateBlock.src = "Images/pressurePlateBlock.png";
    images.mine.src = "Images/mine.png";
    images.lockedLevel.src = "Images/lockedLevel.png";
    images.slider.src = "Images/slider.png";
    images.prompt.src = "Images/prompt.png";

    for(let i = 0; i < images.buttonBlock.length; i++){
        images.buttonBlock[i].src = "Images/buttonBlock/" + (parseInt(i)+1).toString() + ".png";
    }

    let volume = {
        masterVolume: 0.75,
        musicVolume: 0.75,
        sfxVolume: 0.75
    }
    
    let levelsUnlocked = 1;

    function startGame(level = levelsUnlocked){
        gameOn = true;
        let gameOver = false;

        let gravityPreset = [0, 0];
        let gravity = [0, 0];
        let gravityCharges = 0;
        let resetCountdown = 60;
        let canChangeGravity = true;
        let robotFrame = 0;

        let currentLevel = level;
        let levels = {
            1: {
                levelSize: 7,
                gravityCharges: 5,
                dialogue: {
                    before: ["Welcome to the Gravitational Demo! I am TutorialBot, and I'm here to show you how to play the game.","Use the Arrow Keys or WASD to change gravity.", "Changing the gravity costs one gravity charge.", "You can see how many gravity charges you have in the top-left corner.", "If you make a mistake, click the red reset charge below your gravity charges.", "Or just press r. Whatever's easiest.", "Get the cube with the red light to the energy transmitter. Good luck."],
                    after: ["Great job! Continue on to the next level."],
                },
                map:[
                    "bbbbbbb",
                    "b     b",
                    "bPbbb b",
                    "bbbbb b",
                    "b@bbb b",
                    "b     b",
                    "bbbbbbb",
                ]
            },
            2: {
                levelSize: 9,
                gravityCharges: 5,
                dialogue: {
                    before: ["Gravity charge bubbles will give you one extra gravity charge when collected. Very useful."],
                    after: ["Good job! Continue to level 3."],
                },
                map:[
                    "bbbbbbbbb",
                    "b  b    b",
                    "b++     b",
                    "b       b",
                    "b   @   b",
                    "b       b",
                    "b       b",
                    "bP  b   b",
                    "bbbbbbbbb",
                ]
            },
            3: {
                levelSize: 10,
                gravityCharges: 8,
                dialogue: {
                    before: ["Electric Spikes will make anything that touches them explode.", "So... yeah. Don't touch them."],
                    after: ["Well done! Here comes level 4..."],
                },
                map:[
                    "bbbbbbbbbb",
                    "bP  b  ++b",
                    "bb       b",
                    "b@       b",
                    "b b    b b",
                    "b   +  +^b",
                    "b>     +bb",
                    "bb   b   b",
                    "b>       b",
                    "bbbbbbbbbb",
                ]
            },
            4: {
                levelSize: 13,
                gravityCharges: 8,
                dialogue: {
                    before: ["You will find that not every gravity charge bubble has to be collected to beat a level.", "As a general rule, if you take more moves to get the gravity charges than the amount of charges you earn, you are doing something wrong.", "That said, calculate this level carefully."],
                    after: ["That's another level beat. Moving onto level 5."],
                },
                map:[
                    "bbbbbbbbbbbbb",
                    "b           b",
                    "b          +b",
                    "b   bb bbbb b",
                    "b    + +  b b",
                    "b    bPb    b",
                    "b    bbb    b",
                    "b b  bb+    b",
                    "b    bb  b  b",
                    "bb          b",
                    "bb    b    bb",
                    "b   <bbb^^+@b",
                    "bbbbbbbbbbbbb",
                ]
            },
            5: {
                levelSize: 15,
                gravityCharges: 11,
                dialogue: {
                    before: ["This level is a bit more complicated than the others. Good luck."],
                    after: ["Not bad! But things are about to get a lot harder."],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "bb            b",
                    "bv    bbb     b",
                    "b  bbbbbv  b  b",
                    "b  bbbb       b",
                    "b^ b      b   b",
                    "bb       bb   b",
                    "bb       b    b",
                    "b        b    b",
                    "b           b b",
                    "b bb+b     bb+b",
                    "b+Pb+b    bbb+b",
                    "b+bb+b   bbbbbb",
                    "b+bb+bb@bbbbbbb",
                    "bbbbbbbbbbbbbbb",
                ]
            },
            6: {
                levelSize: 15,
                gravityCharges: 11,
                dialogue: {
                    before: ["Crates act just like the player, but they cannot activate the exit.", "Only the cube with the red light can activate the transmitter. This means that you can break crates on spikes without instantly losing the level.", "Use this information... wisely."],
                    after: ["I have a feeling those crates will never question your authority again. Moving on."],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "b          bbbb",
                    "b             b",
                    "b             b",
                    "b             b",
                    "b             b",
                    "b^            b",
                    "bbbbbbb       b",
                    "b          +  b",
                    "b+    b    ^^^b",
                    "b     b    bbbb",
                    "b+    b    bbvb",
                    "b     b       b",
                    "b Pcc bbbbbbb@b",
                    "bbbbbbbbbbbbbbb",
                ]
            },
            7: {
                levelSize: 15,
                gravityCharges: 8,
                dialogue: {
                    before: ["Here's a random joke for you:", "What did the carrot say to the bunny?", "Beat the level to find out!"],
                    after: ["Alright, here's the answer to that joke.", "It's nothing!", "What, did you think the carrot would be able to talk or something?"],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "bPcc          b",
                    "bbbb          b",
                    "b+           @b",
                    "b             b",
                    "b             b",
                    "b b           b",
                    "b             b",
                    "b             b",
                    "b             b",
                    "b   bbb       b",
                    "b             b",
                    "b             b",
                    "bbbb   +      b",
                    "bbbbbbbbbbbbbbb",
                ]
            },
            8: {
                levelSize: 15,
                gravityCharges: 1,
                dialogue: {
                    before: ["As you can see, you only get one gravity charge in this level.", "Use it well."],
                    after: ["Well solved."],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "b            @b",
                    "b    +      + b",
                    "b             b",
                    "b             b",
                    "b             b",
                    "b+b           b",
                    "b v         + b",
                    "b             b",
                    "b             b",
                    "b             b",
                    "b             b",
                    "bc      <b  + b",
                    "bPc    +      b",
                    "bbbbbbbbbbbbbbb",
                ]
            },
            9: {
                levelSize: 15,
                gravityCharges: 11,
                dialogue: {
                    before: ["As you will discover in this level, crates don't always get in your way.", "Sometimes you need them to beat a level."],
                    after: ["Time for the final challenge..."],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "b     +      bb",
                    "b +bbbb       b",
                    "b bb>         b",
                    "b vv          b",
                    "b             b",
                    "b             b",
                    "b            +b",
                    "b             b",
                    "b    +        b",
                    "b            ^b",
                    "b          bbbb",
                    "b            @b",
                    "bPb> c <b  bbbb",
                    "bbbbbbbbbbbbbbb",
                ]
            },
            10: {
                levelSize: 15,
                gravityCharges: 16,
                dialogue: {
                    before: ["Well, this is it.", "The final level of the demo.", "If you want to see more, you'll have to wait until the full game comes out on STEAM.", "But until then, put everything you've learned together in this epic finale."],
                    after: ["That's all for now! The full game will have 100 levels, a story, more bad jokes, many other mechanics, and several npcs."],
                },
                map:[
                    "bbbbbbbbbbbbbbb",
                    "bbb   bb      b",
                    "b   b  b b  b b",
                    "b   b  b b  b+b",
                    "b    b b b  b b",
                    "bb     b b  b+b",
                    "b    b b b  b b",
                    "b + +    b  b+b",
                    "bbbbbb bbb  b b",
                    "b@     +    b+b",
                    "bbbbbbb + + b b",
                    "bPccc bbbbbbb b",
                    "bbbbb +   +  0b",
                    "bbbbbbbbbbbbb^b",
                    "bbbbbbbbbbbbbbb",
                ]
            },
        };

        let blockSize = Math.round(1200 / levels[currentLevel].levelSize);

        let blocks = [];
        let crates = [];
        let goals = [];
        let bubbles = [];
        let spikes = [];
        let phaseBlocks = [];
        let keys = [];
        let locks = [];
        let bombs = [];
        let breakables = [];
        let shields = [];
        let tunnels = [];
        let barriers = [];
        let buttons = [];
        let buttonBlocks = [];
        let pressurePlates = [];
        let pressurePlateBlocks = [];
        let mines = [];
        let timedBlocks = [];
        let explosions = [];
        let atmosphericParticles = [];
        let particles = [];

        class Player {
            constructor(x, y, width, height){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height; 
                this.touchingGround = true;
                this.isFirstMove = true;
                this.keyChecks = {
                    left: false,
                    right: false,
                    up: false,
                    down: false,
                    w: false,
                    a: false,
                    s: false,
                    d: false
                };
                this.goalCountdown = -1;
                this.shield = false;
                this.dead = false;
                this.isPlayer = true;
            }
            draw(){
                if(!this.dead){
                    if(this.goalCountdown >= 9){
                        if(this.goalCountdown >= 39){
                            ctx.drawImage(images.winAnimation, (14) * 16, 0, 16, 16, this.x, this.y, this.width, this.height)
                        } else{
                            if(this.goalCountdown <= 15){
                                ctx.drawImage(images.winAnimation, 4 * 16, 0, 16, 16, this.x, this.y, this.width, this.height)
                            } else{
                                ctx.drawImage(images.winAnimation, (Math.floor((this.goalCountdown - 6) / 3)) * 16 , 0, 16, 16, this.x, this.y, this.width, this.height)
                            }
                        }
                    } else{
                        ctx.drawImage(images.player, this.x, this.y, this.width, this.height)
                        if(this.shield){
                            ctx.fillStyle = "rgb(0,255,255)";
                            ctx.globalAlpha = 0.15;
                            ctx.fillRect(this.x, this.y, this.width, this.height);
                            ctx.globalAlpha = 1;
                        }
                    }
                }
            }
            update(){
                if(!this.dead){
                    if(!this.touchingGround){
                        canChangeGravity = false;
                    }
                    this.handleGravityChanges();
                    if(key.left){
                        this.keyChecks.left = false;
                    } else{
                        this.keyChecks.left = true;
                    }
                    if(key.right){
                        this.keyChecks.right = false;
                    } else{
                        this.keyChecks.right = true;
                    }
                    if(key.up){
                        this.keyChecks.up = false;
                    } else{
                        this.keyChecks.up = true;
                    }
                    if(key.down){
                        this.keyChecks.down = false;
                    } else{
                        this.keyChecks.down = true;
                    }
                    if(key.w){
                        this.keyChecks.w = false;
                    } else{
                        this.keyChecks.w = true;
                    }
                    if(key.a){
                        this.keyChecks.a = false;
                    } else{
                        this.keyChecks.a = true;
                    }
                    if(key.s){
                        this.keyChecks.s = false;
                    } else{
                        this.keyChecks.s = true;
                    }
                    if(key.d){
                        this.keyChecks.d = false;
                    } else{
                        this.keyChecks.d = true;
                    }
                    if(!checkTunnelCollisions(this)){
                        this.x += gravity[0] * Math.round(blockSize / 3);
                        this.y += gravity[1] * Math.round(blockSize / 3);
                        this.touchingGround = false;
                        if(checkSolidCollisions(this)){
                            this.touchingGround = true;
                            if(gravity[0] === 0){
                                if(gravity[1] === -1){
                                    while(checkSolidCollisions(this)){
                                        this.y++;
                                    }
                                } else{
                                    while(checkSolidCollisions(this)){
                                        this.y--;
                                    }
                                }
                            } else{
                                if(gravity[0] === -1){
                                    while(checkSolidCollisions(this)){
                                        this.x++;
                                    }
                                } else{
                                    while(checkSolidCollisions(this)){
                                        this.x--;
                                    }
                                }
                            }
                        }
                    }

                    if(checkSpikeCollisions(this) || checkBombCollisions(this).exploded || checkBarrierCollisions(this) === 1 || checkMineCollisions(this)){
                        if(!this.shield || checkSpikeCollisions(this)){
                            for(let i = 0; i < 40; i++){
                                particles.push(new Particle(this.x + this.width / 2, this.y + this.height / 2, Math.floor(Math.random() * blockSize / 12) + blockSize / 10, Math.floor(Math.random() * blockSize / 12) + blockSize / 10, images.crateParticle, Math.random() * blockSize / 3 - blockSize / 6, Math.random() * blockSize / 3 - blockSize / 6, 0.99, 0.99, blockSize / 90, 1, -0.01));
                            }
                            this.dead = true;
                            sounds.break.currentTime = 0;
                            sounds.break.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.break.play();    
                        }
                        this.shield = false;
                    }

                    checkBubbleCollisions(this);
                    checkKeyCollisions(this);
                    checkShieldCollisions(this)
                    
                    if(checkGoalCollisions(this)){
                        this.x = checkGoalCollisions(this).x;
                        this.y = checkGoalCollisions(this).y;
                        if(!isDialogue){
                            this.goalCountdown++;
                        }
                        if(this.goalCountdown === 0){
                            sounds.win.currentTime = 0;
                            sounds.win.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.win.play();
                            currentLevel++;
                            if(!(currentLevel > Object.keys(levels).length) && currentLevel > levelsUnlocked){
                                levelsUnlocked++;
                            }
                            currentLevel--;
                        }
                        if(this.goalCountdown === 40){
                            sounds.door.currentTime = 0;
                            sounds.door.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.door.play();
                        }

                        if(this.goalCountdown === 60){
                            if(levels[currentLevel].dialogue !== undefined){
                                if(levels[currentLevel].dialogue.after !== undefined){
                                    paragraph = levels[currentLevel].dialogue.after;
                                } 
                            }
                        }

                        if(this.goalCountdown > 180){
                            currentLevel++;
                            if(currentLevel > Object.keys(levels).length){
                                gameOver = true;
                                currentLevel--;
                            } else{
                                resetLevel();
                                if(levels[currentLevel].dialogue !== undefined){
                                    if(levels[currentLevel].dialogue.before !== undefined){
                                        paragraph = levels[currentLevel].dialogue.before
                                    }
                                }
                            }
                        }
                    }
                }
            }
            handleGravityChanges(){
                if(((canChangeGravity || this.isFirstMove ) && !isDialogue) && gravityCharges > 0){
                    if(gravityPreset[0] !== 0 || gravityPreset[1] !== 0 && robotAnimationReady){
                        gravity = gravityPreset;
                        onGravityChange();
                        if(gravity[0] === 1){
                            robotAnimation = "right";
                            sounds.right.currentTime = 0;
                            sounds.right.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.right.play();
                        }
                        if(gravity[0] === -1){
                            robotAnimation = "left";
                            sounds.left.currentTime = 0;
                            sounds.left.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.left.play();
                        }
                        if(gravity[1] === 1){
                            robotAnimation = "down";
                            sounds.down.currentTime = 0;
                            sounds.down.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.down.play();
                        }
                        if(gravity[1] === -1){
                            robotAnimation = "up";
                            sounds.up.currentTime = 0;
                            sounds.up.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.up.play();
                        }
                        gravityPreset = [0,0];
                        return;
                    }
                    if(((key.left && this.keyChecks.left === true) || (key.a && this.keyChecks.a === true)) && (gravity[0] !== -1)){
                        if(robotAnimationReady){
                            gravity = [-1, 0];
                            onGravityChange();
                            robotAnimation = "left";
                            sounds.left.currentTime = 0;
                            sounds.left.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.left.play();
                        } else if(gravityPreset[0] === 0 && gravityPreset[1] === 0){
                            gravityPreset = [-1, 0];
                        }
                    }
                    if(((key.right && this.keyChecks.right === true) || (key.d && this.keyChecks.d === true)) && (gravity[0] !== 1)){
                        if(robotAnimationReady){
                            gravity = [1, 0];
                            onGravityChange();
                            robotAnimation = "right";
                            sounds.right.currentTime = 0;
                            sounds.right.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.right.play();
                        } else if(gravityPreset[0] === 0 && gravityPreset[1] === 0){
                            gravityPreset = [1, 0];
                        }
                    }
                    if(((key.up && this.keyChecks.up === true) || (key.w && this.keyChecks.w === true)) && (gravity[1] !== -1)){
                        if(robotAnimationReady){
                            gravity = [0, -1];
                            onGravityChange();
                            robotAnimation = "up";
                            sounds.up.currentTime = 0;
                            sounds.up.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.up.play();
                        } else if(gravityPreset[0] === 0 && gravityPreset[1] === 0){
                            gravityPreset = [0, -1];
                        }
                    }
                    if(((key.down && this.keyChecks.down === true) || (key.s && this.keyChecks.s === true))  && (gravity[1] !== 1)){
                        if(robotAnimationReady){
                            gravity = [0, 1];
                            onGravityChange();
                            robotAnimation = "down";
                            sounds.down.currentTime = 0;
                            sounds.down.volume = volume.masterVolume * volume.sfxVolume;
                            sounds.down.play();
                        } else if(gravityPreset[0] === 0 && gravityPreset[1] === 0){
                            gravityPreset = [0, 1];
                        }
                    }
                }
            }
        }

        let player = new Player(20, 20, blockSize, blockSize);

        class Crate {
            constructor(x, y, width, height, id){
                this.x = x; 
                this.y = y; 
                this.width = width;
                this.height = height; 
                this.touchingGround = true;
                this.crateID = id;
                this.shield = false;
            }
            draw(){
                ctx.drawImage(images.crate, this.x, this.y, this.width, this.height)
                if(this.shield){
                    ctx.fillStyle = "rgb(0,255,255)";
                    ctx.globalAlpha = 0.15;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                    ctx.globalAlpha = 1;
                }
            }
            update(){
                if(!checkTunnelCollisions(this)){
                    this.x += gravity[0] * Math.round(blockSize / 3);
                    this.y += gravity[1] * Math.round(blockSize / 3);
                    this.touchingGround = false;
                    if(checkSolidCollisions(this)){
                        this.touchingGround = true;
                        if(gravity[0] === 0){
                            if(gravity[1] === -1){
                                while(checkSolidCollisions(this)){
                                    this.y++;
                                }
                            } else{
                                while(checkSolidCollisions(this)){
                                    this.y--;
                                }
                            }
                        } else{
                            if(gravity[0] === -1){
                                while(checkSolidCollisions(this)){
                                    this.x++;
                                }
                            } else{
                                while(checkSolidCollisions(this)){
                                    this.x--;
                                }
                            }
                        }
                    }
                }

                checkBubbleCollisions(this);
                checkKeyCollisions(this);
                checkShieldCollisions(this);

                if(!this.touchingGround){
                    canChangeGravity = false;
                }
                if(checkSpikeCollisions(this) || checkBombCollisions(this).exploded || checkBarrierCollisions(this) === 2 || checkMineCollisions(this)){
                    if(checkSpikeCollisions(this) || !this.shield){
                        for(let i = 0; i < 40; i++){
                            particles.push(new Particle(this.x + this.width / 2, this.y + this.height / 2, Math.floor(Math.random() * blockSize / 12) + blockSize / 10, Math.floor(Math.random() * blockSize / 12) + blockSize / 10, images.crateParticle, Math.random() * blockSize / 3 - blockSize / 6, Math.random() * blockSize / 3 - blockSize / 6, 0.99, 0.99, blockSize / 90, 1, -0.01));
                        }
                        crates.splice(this.crateID, 1);
                        sounds.break.currentTime = 0;
                        sounds.break.volume = volume.masterVolume * volume.sfxVolume;
                        sounds.break.play();
                        changeCrateIDs(this.crateID);
                        return true;
                    }
                    this.shield = false;
                }
                return false;
            }
        }

        class Bomb {
            constructor(x, y, width, height, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height; 
                this.touchingGround = true;
                this.bombID = id;
                this.exploded = false;
            }
            draw(){
                if(!this.exploded){
                    ctx.drawImage(images.bomb, this.x, this.y, this.width, this.height)
                }
            }
            update(){
                if(this.exploded){
                    bombs.splice(this.bombID, 1);
                    changeBombIDs(this.bombID);
                    return true;
                }
                if(!checkTunnelCollisions(this)){
                    this.x += gravity[0] * Math.round(blockSize / 3);
                    this.y += gravity[1] * Math.round(blockSize / 3);
                    if(checkBombCollisions(this) && !this.exploded && !checkTunnelCollisions(this)){
                        if(gravity[0] === 0){
                            if(gravity[1] === -1){
                                while(checkSpikeCollisions(this)){
                                    this.y++;
                                }
                            } else{
                                while(checkSpikeCollisions(this)){
                                    this.y--;
                                }
                            }
                        } else{
                            if(gravity[0] === -1){
                                while(checkSpikeCollisions(this)){
                                    this.x++;
                                }
                            } else{
                                while(checkSpikeCollisions(this)){
                                    this.x--;
                                }
                            }
                        }
                        this.explode();
                    }
                    this.touchingGround = false;
                    if(checkSolidCollisions(this) && !this.exploded){
                        this.touchingGround = true;
                        if(gravity[0] === 0){
                            if(gravity[1] === -1){
                                while(checkSolidCollisions(this)){
                                    this.y++;
                                }
                            } else{
                                while(checkSolidCollisions(this)){
                                    this.y--;
                                }
                            }
                        } else{
                            if(gravity[0] === -1){
                                while(checkSolidCollisions(this)){
                                    this.x++;
                                }
                            } else{
                                while(checkSolidCollisions(this)){
                                    this.x--;
                                }
                            }
                        }
                    }
                }

                if(checkSpikeCollisions(this) && !this.exploded){
                    if(gravity[0] === 0){
                        if(gravity[1] === -1){
                            while(checkSpikeCollisions(this)){
                                this.y++;
                            }
                        } else{
                            while(checkSpikeCollisions(this)){
                                this.y--;
                            }
                        }
                    } else{
                        if(gravity[0] === -1){
                            while(checkSpikeCollisions(this)){
                                this.x++;
                            }
                        } else{
                            while(checkSpikeCollisions(this)){
                                this.x--;
                            }
                        }
                    }
                    this.explode();
                }

                checkBubbleCollisions(this);
                checkKeyCollisions(this);

                if(!this.touchingGround){
                    canChangeGravity = false;
                }

                if(this.touchingGround){
                    this.width = blockSize;
                    this.height = blockSize * 2;
                    this.y -= blockSize / 2;
                    if(checkCrateCollisions(this) || checkPlayerCollisions(this)){ 
                        this.width = blockSize;
                        this.height = blockSize;
                        this.y += blockSize / 2;
                        this.explode();
                        return;
                    }
                    this.y += blockSize / 2;

                    this.width = blockSize * 2;
                    this.height = blockSize;
                    this.x -= blockSize / 2;
                    if(checkCrateCollisions(this) || checkPlayerCollisions(this)){ 
                        this.width = blockSize;
                        this.height = blockSize;
                        this.x += blockSize / 2;
                        this.explode();
                        return;
                    }
                    this.width = blockSize;
                    this.height = blockSize;
                    this.x += blockSize / 2;
                }
                return false;
            }
            explode(){
                this.touchingGround = false;
                if(checkSolidCollisions(this) && !this.exploded){
                    this.touchingGround = true;
                    if(gravity[0] === 0){
                        if(gravity[1] === -1){
                            while(checkSolidCollisions(this)){
                                this.y++;
                            }
                        } else{
                            while(checkSolidCollisions(this)){
                                this.y--;
                            }
                        }
                    } else{
                        if(gravity[0] === -1){
                            while(checkSolidCollisions(this)){
                                this.x++;
                            }
                        } else{
                            while(checkSolidCollisions(this)){
                                this.x--;
                            }
                        }
                    }
                }
                this.width = blockSize * 2;
                this.height = blockSize * 2;
                this.x -= blockSize / 2;
                this.y -= blockSize / 2;
                if(!this.exploded){
                    this.exploded = true;
                    sounds.explosion.currentTime = 0;
                    sounds.explosion.volume = 0.8 * volume.masterVolume * volume.sfxVolume;
                    sounds.explosion.play();
                    explosions.push(new Explosion(this.x - blockSize / 2, this.y - blockSize / 2, this.width + blockSize, this.height + blockSize));
                }
            }
        }

        function changeBombIDs(id){
            bombs.forEach((bomb)=>{
                if(bomb.bombID > id){
                    bomb.bombID--;
                }
            })
        }

        function changeCrateIDs(id){
            crates.forEach((crate)=>{
                if(crate.crateID > id){
                    crate.crateID--;
                }
            })
        }

        function changeBreakableIDs(id){
            breakables.forEach((breakable)=>{
                if(breakable.breakableID > id){
                    breakable.breakableID--;
                }
            })
        }

        class Explosion{
            constructor(x, y, width, height){
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.frame = 0;
            }
            draw(){
                if(this.width > blockSize){
                    ctx.drawImage(images.explosion, Math.floor(this.frame / 3) * 48, 0, 48, 48, this.x, this.y, this.width, this.height);
                } else{
                    ctx.drawImage(images.smallerExplosion, Math.floor(this.frame / 3) * 16, 0, 16, 16, this.x, this.y, this.width, this.height);
                }
            } 
            update(){
                this.frame++;
            }
        }

        class Block {
            constructor(x, y, width, height){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.image = new Image();
                this.autoTile();
            }
            autoTile(){
                let number = 0;
                let blockX = (Math.round(this.x) / blockSize) - 1;
                let blockY = (Math.round(this.y) / blockSize) - 1;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 128;
                    }
                }
                blockX++;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 64;
                    }
                }
                blockX++;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 32;
                    }
                }
                blockY++;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 16;
                    }
                }
                blockY++;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 8;
                    }
                }
                blockX--;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 4;
                    }
                }
                blockX--;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number += 2;
                    }
                }
                blockY--;
                if(blockX >= 0 && blockY >= 0 && blockX < levels[currentLevel].levelSize && blockY < levels[currentLevel].levelSize){
                    if(levels[currentLevel].map[blockY][blockX] === "b"){
                        number ++;
                    }
                }
                this.image = images.blocks[number];
            };
            draw(){
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            }
        }

        class PhaseBlock {
            constructor(x, y, width, height, solid){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.solid = solid;
            }
            draw(){
                if(this.solid){
                    ctx.drawImage(images.phaseBlock.open, this.x, this.y, this.width, this.height);
                } else{
                    ctx.drawImage(images.phaseBlock.closed, this.x, this.y, this.width, this.height);
                }
            }
        }

        class Barrier {
            constructor(x, y, width, height, type){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.type = type;
            }
            draw(){
                if(this.type === 1){
                    ctx.globalAlpha = 0.7;
                    ctx.drawImage(images.barrier, this.x, this.y, this.width, this.height);
                } else{
                    ctx.globalAlpha = 0.5;
                    ctx.drawImage(images.reverseBarrier, this.x, this.y, this.width, this.height);
                }
                ctx.globalAlpha = 1;
            }
        }

        class Tunnel {
            constructor(x, y, width, height, dir){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.dir = dir;
            }
            draw(){
                if(this.dir === "horizontal"){
                    ctx.drawImage(images.horizontalTunnel, this.x, this.y, this.width, this.height);
                } else{
                    ctx.drawImage(images.verticalTunnel, this.x, this.y, this.width, this.height);
                }
            }
        }
        class Spike {
            constructor(x, y, width, height, dir){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.dir = dir;
            }
            draw(){
                ctx.save();
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.rotate(this.dir);
                ctx.drawImage(images.spike, -this.width / 2, -this.height / 2, this.width, this.height);
                ctx.restore();
            }
        }

        class Button {
            constructor(x, y, width, height, dir, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.dir = dir;
                this.pressed = false;
                this.id = id;
            }
            draw(){
                ctx.save();
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.rotate(this.dir);
                if(this.pressed){
                    ctx.drawImage(images.button.pressed[this.id], -this.width / 2, -this.height / 2, this.width, this.height);
                } else{
                    ctx.drawImage(images.button.unpressed[this.id], -this.width / 2, -this.height / 2, this.width * 1.25, this.height);
                }
                ctx.restore();
            }
        }

        class PressurePlate {
            constructor(x, y, width, height, dir, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.dir = dir;
                this.pressed = false;
                this.id = id;
            }
            draw(){
                ctx.save();
                ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
                ctx.rotate(this.dir);
                if(this.pressed){
                    ctx.drawImage(images.pressedPressurePlate, -this.width / 2, -this.height / 2, this.width, this.height);
                } else{
                    ctx.drawImage(images.unpressedPressurePlate, -this.width / 2, -this.height / 2, this.width * 1.0625, this.height);
                }
                ctx.restore();
            }
        }

        class ButtonBlock {
            constructor(x, y, width, height, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.id = id;
            }
            draw(){
                ctx.drawImage(images.buttonBlock[this.id], this.x, this.y, this.width, this.height);
            }
        }

        class TimedBlock {
            constructor(x, y, width, height, time){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.time = time;
            }
            draw(){
                if(this.time > 0){
                    ctx.drawImage(images.timedBlock[this.time - 1], this.x, this.y, this.width, this.height);
                }
            }
        }

        class Mine {
            constructor(x, y, width, height){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.mine, this.x, this.y, this.width, this.height);
            }
        }

        class PressurePlateBlock {
            constructor(x, y, width, height, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.id = id;
                this.active = true;
            }
            draw(){
                if(this.active){
                    ctx.drawImage(images.pressurePlateBlock, this.x, this.y, this.width, this.height);
                }
            }
        }

        class Goal {
            constructor(x, y, width, height){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.goal, this.x, this.y, this.width, this.height)
            }
        }

        class Breakable {
            constructor(x, y, width, height, id){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
                this.breakableID = id;
            }
            draw(){
                ctx.drawImage(images.breakable, this.x, this.y, this.width, this.height);
            }
            update(){
                if(checkBombCollisions(this).exploded){
                    for(let i = 0; i < 10; i++){
                        particles.push(new Particle(this.x + this.width / 2, this.y + this.height / 2, Math.floor(Math.random() * blockSize / 6) + blockSize / 5, Math.floor(Math.random() * blockSize / 6) + blockSize / 5, images.breakableParticle, Math.random() * blockSize / 3 - blockSize / 6, Math.random() * blockSize / 3 - blockSize / 6, 0.99, 0.99, blockSize / 90, 1, -0.01));
                    }
                    breakables.splice(this.breakableID, 1);
                    changeBreakableIDs(this.breakableID);
                    return true;
                }
            }
        }

        class Bubble {
            constructor(x, y, width, height, charges){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.bubble, this.x, this.y, this.width, this.height)
            }
        }

        class Shield {
            constructor(x, y, width, height, charges){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.shield, this.x, this.y, this.width, this.height)
            }
        }

        class Key {
            constructor(x, y, width, height, charges){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.key, this.x, this.y, this.width, this.height)
            }
        }

        class Lock {
            constructor(x, y, width, height, charges){
                this.x = x;
                this.y = y; 
                this.width = width;
                this.height = height;
            }
            draw(){
                ctx.drawImage(images.lock, this.x, this.y, this.width, this.height)
            }
        }

        class Particle{
            constructor(x, y, width, height, image, speedX, speedY, frictionX, frictionY, gravity, alpha, alphaChange){
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.image = image;
                this.velocity = {
                    x: speedX,
                    y: speedY
                };
                this.friction = {
                    x: frictionX,
                    y: frictionY
                };
                this.gravity = gravity;
                this.alpha = alpha;
                this.alphaChange = alphaChange;
            }
            draw(){
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
                ctx.globalAlpha = 1;
            }
            update(){        
                this.x += this.velocity.x;
                this.y += this.velocity.y;
                this.velocity.x *= this.friction.x;
                this.velocity.y *= this.friction.y;
                this.velocity.x += this.gravity * gravity[0];
                this.velocity.y += this.gravity * gravity[1];
                this.alpha += this.alphaChange;
                if(this.alpha < 0){
                    this.alpha = 0;
                }
                if(this.alpha > 1){
                    this.alpha = 1;
                }
            }
        }

        class AtmosphericParticle{
            constructor(x,y,width,height){
                this.x = x; 
                this.y = y;
                this.width = width; 
                this.height = height;
                this.color = Math.random() * 40 + 30;
                this.speedX = Math.random() * 0.25 + 0.5;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.time = Math.random() * 10;
            }
            draw(){
                c.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color +")";
                c.fillRect(Math.round(this.x),Math.round(this.y),this.width,this.height);
            }
            update(){
                this.x += this.speedX;
                this.y += this.speedY + (Math.sin(performance.now() / 1000 + this.time)) / 4;
            }
        }

        function drawGravityCharges(){
            for(let i = 0; i < gravityCharges; i++){
                c.drawImage(images.gravityCharge, 10 + i * 15, 10, 10, 20);
            }
        }

        function onGravityChange(){
            player.isFirstMove = false;
            gravityCharges--;
            changePhaseBlocks();
            decreaseTimedBlocks();
            canChangeGravity = false;
            robotAnimationCountdown = 0;
            robotAnimationReady = false;
        }

        function createBlocks(){
            let crateID = 0;
            let bombID = 0;
            let breakableID = 0;
            let buttonID = 0;
            let buttonBlockID = 0;
            let timedBlockID = 0;
            for(let i = 0; i < levels[currentLevel].map.length; i++){
                for(let  j = 0; j < levels[currentLevel].map[i].length; j++){
                    let tile = levels[currentLevel].map[i][j];
                    if(tile === "b"){
                        blocks.push(new Block(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === ">"){
                        spikes.push(new Spike(j * blockSize, i * blockSize, blockSize, blockSize, Math.PI / 2));
                    }
                    if(tile === "^"){
                        spikes.push(new Spike(j * blockSize, i * blockSize, blockSize, blockSize, 0));
                    }
                    if(tile === "<"){
                        spikes.push(new Spike(j * blockSize, i * blockSize, blockSize, blockSize, -Math.PI / 2));
                    }
                    if(tile === "v"){
                        spikes.push(new Spike(j * blockSize, i * blockSize, blockSize, blockSize, Math.PI));
                    }
                    if(tile === "P"){
                        player = new Player(j * blockSize, i * blockSize, blockSize, blockSize);
                    }
                    if(tile === "c"){
                        crates.push(new Crate(j * blockSize, i * blockSize, blockSize, blockSize, crateID));
                        crateID++;
                    }
                    if(tile === "B"){
                        bombs.push(new Bomb(j * blockSize, i * blockSize, blockSize, blockSize, bombID));
                        bombID++;
                    }
                    if(tile === "@"){
                        goals.push(new Goal(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === "S"){
                        phaseBlocks.push(new PhaseBlock(j * blockSize, i * blockSize, blockSize, blockSize, true));
                    }
                    if(tile === "s"){
                        phaseBlocks.push(new PhaseBlock(j * blockSize, i * blockSize, blockSize, blockSize, false));
                    }
                    if(tile === "+"){
                        bubbles.push(new Bubble(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === "U"){
                        shields.push(new Shield(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === "L"){
                        locks.push(new Lock(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === "|"){
                        tunnels.push(new Tunnel(j * blockSize, i * blockSize, blockSize, blockSize, "vertical"));
                    }
                    if(tile === "="){
                        tunnels.push(new Tunnel(j * blockSize, i * blockSize, blockSize, blockSize, "horizontal"));
                    }
                    if(tile === "x"){
                        breakables.push(new Breakable(j * blockSize, i * blockSize, blockSize, blockSize, breakableID));
                        breakableID++;
                    }
                    if(tile === "t"){
                        timedBlocks.push(new TimedBlock(j * blockSize, i * blockSize, blockSize, blockSize, levels[currentLevel].timedBlockAssignments[timedBlockID]));
                        timedBlockID++;
                    }
                    if(tile === "l"){
                        keys.push(new Key(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                    if(tile === "H"){
                        barriers.push(new Barrier(j * blockSize, i * blockSize, blockSize, blockSize, 1));
                    }
                    if(tile === "h"){
                        barriers.push(new Barrier(j * blockSize, i * blockSize, blockSize, blockSize, 2));
                    }
                    if(tile === "D"){
                        buttons.push(new Button(j * blockSize, i * blockSize, blockSize, blockSize, levels[currentLevel].buttonDirs[buttonID], levels[currentLevel].buttonAssignments[buttonID]));
                        buttonID++;
                    }
                    if(tile === "d"){
                        buttonBlocks.push(new ButtonBlock(j * blockSize, i * blockSize, blockSize, blockSize, levels[currentLevel].buttonBlockAssignments[buttonBlockID]));
                        buttonBlockID++;
                    }
                    if(tile === "["){
                        pressurePlates.push(new PressurePlate(j * blockSize, i * blockSize, blockSize, blockSize, levels[currentLevel].buttonDirs[buttonID], levels[currentLevel].buttonAssignments[buttonID]));
                        buttonID++;
                    }
                    if(tile === "]"){
                        pressurePlateBlocks.push(new PressurePlateBlock(j * blockSize, i * blockSize, blockSize, blockSize, levels[currentLevel].buttonBlockAssignments[buttonBlockID]));
                        buttonBlockID++;
                    }
                    if(tile === "o"){
                        mines.push(new Mine(j * blockSize, i * blockSize, blockSize, blockSize));
                    }
                }
            }
        }   

        function drawBlocks(){
            pressurePlates.forEach((pressurePlate) => {
                pressurePlate.draw();
            });
            pressurePlateBlocks.forEach((pressurePlateBlock) => {
                pressurePlateBlock.draw();
            });
            phaseBlocks.forEach((phaseBlock) => {
                phaseBlock.draw();
            });
            blocks.forEach((block) => {
                block.draw();
            });
            timedBlocks.forEach((timedBlock) => {
                timedBlock.draw();
            });
            breakables.forEach((breakable) => {
                breakable.draw();
            });
            spikes.forEach((spike) => {
                spike.draw();
            });
            goals.forEach((goal) => {
                goal.draw();
            });
            locks.forEach((lock) => {
                lock.draw();
            });
            keys.forEach((key) => {
                key.draw();
            });
            bubbles.forEach((bubble) => {
                bubble.draw();
            });
            crates.forEach((crate) => {
                crate.draw(); 
            })
            bombs.forEach((bomb) => {
                bomb.draw(); 
            })
            shields.forEach((shield) => {
                shield.draw();
            });
            mines.forEach((mine) => {
                mine.draw(); 
            })
            player.draw();
            buttons.forEach((button) => {
                button.draw();
            });
            buttonBlocks.forEach((buttonBlock) => {
                buttonBlock.draw();
            });
            barriers.forEach((barrier) => {
                barrier.draw();
            });
            tunnels.forEach((tunnel) => {
                tunnel.draw();
            });
            particles.forEach((particle) => {
                particle.draw();
            })
            explosions.forEach((explosion) => {
                explosion.draw();
            });
        }

        function decreaseTimedBlocks(){
            for(let i = timedBlocks.length - 1; i >= 0; i--){
                timedBlocks[i].time--;
                if(timedBlocks[i].time <= 0){
                    timedBlocks.splice(i, 1);
                }
            }
        }

        function updateButtons(){
            let breaking;
            for(let i = 0; i < 10; i++){
                breaking = true
                for(let j = 0; j < buttons.length; j++){
                    if(buttons[j].id === i && !buttons[j].pressed){
                        breaking = false;
                    }
                }
                if(breaking){
                    for(let j = buttonBlocks.length - 1; j >= 0; j--){
                        if(buttonBlocks[j].id === i){
                            buttonBlocks.splice(j, 1);
                        }
                    }
                }
            }

            pressurePlateBlocks.forEach((pressurePlateBlock) => {
                pressurePlateBlock.active = true;
            })
            for(let i = 0; i < 10; i++){
                breaking = true
                for(let j = 0; j < pressurePlates.length; j++){
                    if(pressurePlates[j].id === i && !pressurePlates[j].pressed){
                        breaking = false;
                    }
                }
                if(breaking){
                    for(let j = pressurePlateBlocks.length - 1; j >= 0; j--){
                        if(pressurePlateBlocks[j].id === i){
                            pressurePlateBlocks[j].active = false;
                        }
                    }
                }
            }
        }

        function updateBlocks(){
            canChangeGravity = true;
            if(keys.length === 0){
                locks = [];
            }
            for(let i = 0; i < crates.length; i++){
                if(crates[i].update(i)){
                    i--;
                }
            }
            for(let i = 0; i < bombs.length; i++){
                if(bombs[i].update(i)){
                    i--;
                };
            }
            for(let i = 0; i < breakables.length; i++){
                if(breakables[i].update(i)){
                    i--;
                };
            }
            for(let i = particles.length - 1; i >= 0; i--){
                particles[i].update();
                if(particles[i].alpha === 0 || particles[i].width < 0 || particles[i].height < 0 || particles[i].x < -particles[i].width || particles[i].y < -particles[i].height || particles[i].x > 1200 || particles[i].y > 1200){
                    particles.splice(i, 1);
                }
            }
            explosions.forEach((explosion) => {
                explosion.update();
            });
            player.update();
        };

        let canClick = true;
        let canPressR = true;
        function drawAndCheckResetCharge(){
            c.drawImage(images.resetCharge, 10, 40, 20, 40)
            if(!player.dead){
                if((mouse.leftClick && canClick)){
                    if(mouse.x > 10 && mouse.x < 30 && mouse.y > 40 && mouse.y < 80){
                        if(!checkGoalCollisions(player) && !player.isFirstMove){
                            sounds.restart.volume = volume.sfxVolume * volume.masterVolume;
                            sounds.restart.currentTime = 0;
                            sounds.restart.play();
                            resetLevel();
                        }
                    }
                }
                if(canPressR && key.r){
                    if(!checkGoalCollisions(player) && !player.isFirstMove){
                        sounds.restart.volume = volume.sfxVolume * volume.masterVolume;
                        sounds.restart.currentTime = 0;
                        sounds.restart.play();
                        resetLevel();
                    }
                }
            }
            if(mouse.leftClick){
                canClick = false;
            } else{
                canClick = true;
            }
            if(key.r){
                canPressR = false;
            } else{
                canPressR = true;
            }
        }

        function changePhaseBlocks(){
            phaseBlocks.forEach((phaseBlock) => {
                if(!(checkPlayerCollisions(phaseBlock) || checkCrateCollisions(phaseBlock) || checkBombCollisions(phaseBlock))){
                    phaseBlock.solid = !phaseBlock.solid;
                }
            })
        }

        function clearBlocks(){
            particles = [];
            blocks = [];
            goals = [];
            bubbles = [];
            crates = [];
            spikes = [];
            locks = [];
            keys = [];
            phaseBlocks = [];
            bombs = [];
            breakables = [];
            shields = [];
            barriers = [];
            tunnels = [];
            buttons = [];
            buttonBlocks = [];
            pressurePlateBlocks = [];
            pressurePlates = [];
            mines = [];
            timedBlocks = [];
            explosions = [];
            atmosphericParticles = [];
        }

        let curtainAlpha = 0;
        function drawCurtain(){
            if(player.goalCountdown > 60){
                curtainAlpha+=0.015;
            } else{
                curtainAlpha-=0.015;
            }
            if(curtainAlpha < 0){
                curtainAlpha = 0;
            }
            if(curtainAlpha > 1){
                curtainAlpha = 1;
            }
            c.globalAlpha = curtainAlpha;
            ctx.globalAlpha = curtainAlpha;
            c.fillStyle = "black";
            ctx.fillStyle = "black";
            c.fillRect(0,0,480,270);
            ctx.fillRect(0,0,1200,1200);
            c.globalAlpha = 1;
            ctx.globalAlpha = 1;
        }

        function resetLevel(){
            gravity = [0, 0];
            blockSize = Math.round(1200 / levels[currentLevel].levelSize);
            gravityCharges = levels[currentLevel].gravityCharges;
            clearBlocks();
            createBlocks();
            generateAtmosphericParticles();
        }

        let logoAlpha = 0;
        function drawLogo(){
            if(gameOver){
                logoAlpha+=0.02;
            } else{
                logoAlpha-=0.02;
            }
            if(logoAlpha < 0){
                logoAlpha = 0;
            }
            if(logoAlpha > 1){
                logoAlpha = 1;
            }
            ctx.globalAlpha = logoAlpha;
            ctx.drawImage(images.logo,0,0,1200,1200);
            ctx.globalAlpha = 1;
        }
        let robotAnimation = "idle";
        let robotAnimationCountdown = 0;
        let robotAnimationReady = false;
        function drawRobot(){
            robotAnimationCountdown++;
            if(robotAnimationCountdown % 60 < 30 && robotAnimation === "idle"){
                robotFrame = 0;
            } else{
                robotFrame = 1;
            }
            if(robotAnimation === "waiting" && (gravityCharges <= 0 || player.dead)){
                robotAnimation = "idle";
                robotAnimationCountdown = 0;
            }
            if((robotAnimation === "idle" || robotAnimation === "waiting") && ((canChangeGravity || player.isFirstMove) && !isDialogue && isDialogue !== undefined) && !checkGoalCollisions(player) && gravityCharges > 0){
                robotAnimation = "windup";
                robotAnimationCountdown = 0;
            }
            if(robotAnimation === "windup"){
                robotAnimationReady = true;
                if(robotAnimationCountdown > 57){
                    robotAnimationCountdown = 57;
                }
                robotFrame = Math.floor((robotAnimationCountdown + 3) / 3);
            }
            if(robotAnimation === "right"){
                if(robotAnimationCountdown > 18){
                    robotAnimation = "waiting";
                    robotAnimationCountdown = 30;
                }
                if(robotAnimationCountdown !== 30){
                    robotFrame = Math.floor((robotAnimationCountdown + 60) / 3);
                }
            }
            if(robotAnimation === "down"){
                if(robotAnimationCountdown > 18){
                    robotAnimation = "waiting";
                    robotAnimationCountdown = 30;
                }
                if(robotAnimationCountdown !== 30){
                    robotFrame = Math.floor((robotAnimationCountdown + 81) / 3);
                }
            }
            if(robotAnimation === "left"){
                if(robotAnimationCountdown > 18){
                    robotAnimation = "waiting";
                    robotAnimationCountdown = 30;
                }
                if(robotAnimationCountdown !== 30){
                    robotFrame = Math.floor((robotAnimationCountdown + 102) / 3);
                }
            }
            if(robotAnimation === "up"){
                if(robotAnimationCountdown > 18){
                    robotAnimation = "waiting";
                    robotAnimationCountdown = 30;
                }
                if(robotAnimationCountdown !== 30){
                    robotFrame = Math.floor((robotAnimationCountdown + 123) / 3);
                }
            }
            c.drawImage(images.robot, robotFrame * 48, 0, 48, 40, -14, 55, 192, 160)
        }
        let npc = "tutorialBot";
        let npcAnimationFrame = 0;
        function drawNPCs(){
            npcAnimationFrame++;
            if(npc === "tutorialBot"){
                if(npcAnimationFrame % 60 > 30){
                    c.drawImage(images.tutorialBot, 0, 0, 13, 24, 340, 143, 39, 72);
                } else{
                    c.drawImage(images.tutorialBot, 13, 0, 13, 24, 340, 143, 39, 72);
                }
            } 
        }

        let atmosphericParticleCountdown = 0;
        function handleAtmosphericParticles(){
            atmosphericParticleCountdown++;
            if(atmosphericParticleCountdown % 40 === 0){
                let number = Math.round(Math.random() * 2) + 3;
                atmosphericParticles.push(new AtmosphericParticle(-10, Math.random() * 270, number, number));
            }
            atmosphericParticles.forEach((atmosphericParticle) => {
                atmosphericParticle.update();
                atmosphericParticle.draw();
            })
            for(let i = atmosphericParticles.length - 1; i >= 0; i--){
                if(atmosphericParticles[i].x > 480){
                    atmosphericParticles.splice(i,1);
                }
            }
        }
        function generateAtmosphericParticles(){
            for(let i = 0; i < 4000; i++){
                handleAtmosphericParticles();
                c.clearRect(0,0,480,270);
                curtainAlpha = 1;
            }
        }
        
        function drawMainCanvas (){
            c.clearRect(0,0,480,270);
            c.drawImage(images.background, 0, 0, 480, 270);
            handleAtmosphericParticles();
            c.drawImage(images.floor, 0, 215, 480, 40);
            c.drawImage(images.receiver, 230, 37, 20, 20)
            if(player.goalCountdown >= 40 && player.goalCountdown <= 60){
                c.drawImage(images.door, Math.floor((player.goalCountdown - 40) / 3) * 17 , 0, 17, 24, 400, 119, 64, 96);
            } else if(player.goalCountdown < 60){
                c.drawImage(images.door, 0, 0, 17, 24, 400, 119, 64, 96)
            } else{
                c.drawImage(images.door, 6 * 17 , 0, 17, 24, 400, 119, 64, 96);
            }
            drawRobot();
            drawNPCs();
        }

        function drawBorder(){
            ctx.fillStyle = "black";
            ctx.fillRect(blockSize * levels[currentLevel].levelSize, 0, blockSize, 1200);
            ctx.fillRect(0, blockSize * levels[currentLevel].levelSize, 1200, blockSize);
        }

        function handleDeath(){
            if(player.dead){
                resetCountdown--;
                if(resetCountdown === 0){
                    sounds.restart.volume = volume.sfxVolume * volume.masterVolume;
                    sounds.restart.currentTime = 0;
                    sounds.restart.play();
                    resetLevel();
                    resetCountdown = 60;
                }
            }  
        }

        let letters = [];
        class Letter{
            constructor(x, y, width, height, chara){
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.chara = chara;
                this.selectionX = 0;
                this.selectionY = 0;
                this.offsetX = -20;
                this.alpha = 0;
            }
            draw(){
                this.selectionX = fontOrder.indexOf(this.chara) % 20;
                this.selectionY = Math.floor(fontOrder.indexOf(this.chara) / 20);
                context.globalAlpha = this.alpha;
                context.drawImage(images.font, this.selectionX * 120 + this.offsetX,this.selectionY * 120,120,120,150 + this.x * 8, 190 + this.y * 10, this.width,this.height);
                context.globalAlpha = 1;
            }
            update(){
                this.alpha+=0.1;
                this.offsetX+=2;
                if(this.alpha > 1){
                    this.alpha = 1;
                }
                if(this.offsetX > 0){
                    this.offsetX = 0;
                }
            }
        }

        let sentence = "";
        let paragraph = []; 
        let letterX = 0;
        let letterY = 0;
        let letterFrame = 0;
        let sentenceOver = false;
        let canChangeDialogue = false;
        let speedUp = false;
        let boxY = 170;
        let boxAlpha = 0;
        let isDialogue = undefined;
        function drawDialogue(){
            if(!isDialogue){
                speedUp = false;
            }
            context.clearRect(0,0,480,270)
            if(isDialogue){
                boxY++;
                boxAlpha += 0.1;
                if(boxY > 180){
                    boxY = 180;
                }
                if(boxAlpha > 1){
                    boxAlpha = 1;
                }
            } else{
                boxY--;
                boxAlpha -= 0.1;
                if(boxY < 170){
                    boxY = 170;
                }
                if(boxAlpha < 0){
                    boxAlpha = 0;
                }
            }
            context.globalAlpha = boxAlpha;
            context.drawImage(images.dialogueBox,60,boxY,360,80);
            if(npc === "tutorialBot"){
                context.drawImage(images.tutorialBotTitle, 70, boxY, 70, 70);
            } else if(npc === "gerald"){
                context.drawImage(images.geraldTitle, 70, boxY, 70, 70);
            }
            if(isDialogue && sentenceOver){
                context.globalAlpha = (Math.sin(performance.now() * 0.005) + 1.2) / 2 * 0.6;
                context.drawImage(images.prompt, 210, 242, 60, 10);
            }
            context.globalAlpha = 1;
            letterFrame++;
            if(sentence.length <= 1 && boxY === 180){
                if(paragraph.length > 0){
                    if(letters.length > 0){
                        sentenceOver = true;
                    }
                    sentence = paragraph[0];
                    sentence = sentence + " ";
                    paragraph.splice(0, 1);
                } else{
                    if(letters.length > 0){
                        sentenceOver = true;
                        sentence = "";
                    }
                }
            }
            if(paragraph.length > 0 || sentence.length > 0){
                isDialogue = true;
            }
            if(letterFrame % 2 === 1 && !sentenceOver && boxY === 180){
                let amount = 1;
                if(speedUp){
                    amount = 5;
                }
                for(let i = 0; i < amount; i++){
                    letters.push(new Letter(letterX, letterY, 10, 10, sentence[0]));
                    letterX++;
                    if(sentence[0] === " "){
                        let length = sentence.indexOf(" ", 1);
                        if(letterX + length > 34){
                            letterX = 0;
                            letterY++;
                            if(letterY > 4){
                                sentence = sentence.slice(1);
                                sentenceOver = true;
                                break;
                            }
                        }
                    }
                    sentence = sentence.slice(1);
                }
            } 
            if(key.space && !sentenceOver & canChangeDialogue){
                speedUp = true;
            }
            if(sentenceOver && key.space && canChangeDialogue){
                sentenceOver = false;
                letters = [];
                letterX = 0;
                letterY = 0;
                speedUp = false;
                if(paragraph.length === 0 && sentence.length === 0){
                    isDialogue = false;
                }
            }
            if(key.space){
                canChangeDialogue = false;
            } else{
                canChangeDialogue = true;
            }
            //context.drawImage(images.font, 120,120,120,120,125,185,20,20);
            letters.forEach((letter)=>{
                letter.draw();
                letter.update();
            })
        }
        
        //createWord("\"Gerald!!!\"")

        function gameLoop(){
            if(!sounds.mainMenuMusic.paused){
                sounds.mainMenuMusic.pause();
            }
            sounds.music.volume = 0.7 * volume.masterVolume * volume.musicVolume;
            if(sounds.music.paused){
                sounds.music.currentTime = 0;
                sounds.music.loop = true;
                sounds.music.play();
            }
            ctx.clearRect(0, 0, 1200, 1200);
            lastPressurePlatePressed = pressurePlatePressed;
            pressurePlatePressed = false;
            drawMainCanvas();
            drawDialogue();
            drawBorder();
            handleDeath();
            updateButtons();
            pressurePlates.forEach((pressurePlate) => {
                pressurePlate.pressed = false;
            })
            drawAndCheckResetCharge();
            drawGravityCharges();
            updateBlocks();
            drawBlocks();
            drawCurtain();
            drawLogo();
            if(menuButtons.length === 1){
                menuButtons[0].draw();
                menuButtons[0].update();
                if(mouse.leftClick){
                    canClickButtons = false;
                } else{
                    canClickButtons = true;
                }
            }
            if(gameOn){
                requestAnimationFrame(gameLoop);
            }
            if(gameCanvas.style.display === "none"){
                gameCanvas.style.display = "block";
            }
            if(dialogueCanvas.style.display === "none"){
                dialogueCanvas.style.display = "block";
            }
        }

        function checkSolidCollisions(object){
            if(checkBlockCollisions(object)){
                return true;
            } else if(checkCrateCollisions(object)){
                return true;
            } else if(checkPlayerCollisions(object)){
                return true;
            } else if(checkPhaseBlockCollisions(object)){
                return true;
            } else if(checkLockCollisions(object)){
                return true;
            } else if(checkBreakableCollisions(object)){
                return true;
            } else if(checkButtonBlockCollisions(object)){
                return true;
            } else if(checkButtonCollisions(object)){
                return true;
            } else if(checkPressurePlateBlockCollisions(object)){
                return true;
            } else if(checkTimedBlockCollisions(object)){
                return true;
            } else if(checkPressurePlateCollisions(object)){
                return true;
            } else if(checkBombCollisions(object)){
                if(!checkBombCollisions(object).exploded){
                    return true;
                }
            } else if(checkTunnelCollisions(object)){
                return true;
            }
            return false;
        }

        function checkBlockCollisions(object){
            for(let i = 0; i < blocks.length; i++){
                if(isColliding(blocks[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkTunnelCollisions(object){
            for(let i = 0; i < tunnels.length; i++){
                if(isColliding(tunnels[i], object)){
                    if((gravity[0] === 0 && tunnels[i].dir === "horizontal") || gravity[1] === 0 && tunnels[i].dir === "vertical"){
                        return true;
                    }
                }
            }
            return false;
        }

        function checkBreakableCollisions(object){
            for(let i = 0; i < breakables.length; i++){
                if(isColliding(breakables[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkTimedBlockCollisions(object){
            for(let i = 0; i < timedBlocks.length; i++){
                if(isColliding(timedBlocks[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkPhaseBlockCollisions(object){
            for(let i = 0; i < phaseBlocks.length; i++){
                if(isColliding(phaseBlocks[i], object)){
                    if(phaseBlocks[i].solid){
                        return true;
                    }
                }
            }
            return false;
        }

        function checkSpikeCollisions(object){
            for(let i = 0; i < spikes.length; i++){
                if(isColliding(spikes[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkButtonBlockCollisions(object){
            for(let i = 0; i < buttonBlocks.length; i++){
                if(isColliding(buttonBlocks[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkPressurePlateBlockCollisions(object){
            for(let i = 0; i < pressurePlateBlocks.length; i++){
                if(isColliding(pressurePlateBlocks[i], object) && pressurePlateBlocks[i].active){
                    return true;
                }
            }
            return false;
        }

        function checkLockCollisions(object){
            for(let i = 0; i < locks.length; i++){
                if(isColliding(locks[i], object)){
                    return true;
                }
            }
            return false;
        }

        function checkMineCollisions(object){
            for(let i = 0; i < mines.length; i++){
                if(Math.abs(object.x - mines[i].x) < Math.round(blockSize / 3) + 1 && Math.abs(object.y - mines[i].y) < Math.round(blockSize / 3) + 1){
                    explosions.push(new Explosion(mines[i].x, mines[i].y, mines[i].width, mines[i].height));
                    mines.splice(i, 1);
                    return true;
                }
            }
            return false;
        }

        function checkButtonCollisions(object){
            for(let i = 0; i < buttons.length; i++){
                if(isColliding(buttons[i], object)){
                    if(buttons[i].pressed === false){
                        sounds.beep.currentTime = 0;
                        sounds.beep.volume = volume.masterVolume * volume.sfxVolume;
                        sounds.beep.play();
                    }
                    buttons[i].pressed = true;
                    return true;
                }
            }
            return false;
        }

        let pressurePlatePressed = false;
        let lastPressurePlatePressed = false;

        function checkPressurePlateCollisions(object){
            for(let i = 0; i < pressurePlates.length; i++){
                let oldX = pressurePlates[i].x;
                let oldY = pressurePlates[i].y;
                if(pressurePlates[i].dir === Math.PI){
                    pressurePlates[i].x--;
                }
                if(pressurePlates[i].dir === 0){
                    pressurePlates[i].x++;
                }
                if(pressurePlates[i].dir === Math.PI / 2){
                    pressurePlates[i].y--;
                }
                if(pressurePlates[i].dir === -Math.PI / 2){
                    pressurePlates[i].y++;
                }
                if(isColliding(pressurePlates[i], object)){
                    pressurePlates[i].pressed = true;
                    pressurePlatePressed = true;
                }
                pressurePlates[i].x = oldX;
                pressurePlates[i].y = oldY;
                if(isColliding(pressurePlates[i], object)){
                    return true;
                }
                if((!lastPressurePlatePressed && pressurePlatePressed)){
                    sounds.pressurePlate.currentTime = 0;
                    sounds.pressurePlate.volume = volume.masterVolume * volume.sfxVolume;
                    sounds.pressurePlate.play();
                }
            }
            return false;
        }

        function checkGoalCollisions(object){
            for(let i = 0; i < goals.length; i++){
                if(Math.abs(object.x - goals[i].x) < Math.round(blockSize / 3) + 1 && Math.abs(object.y - goals[i].y) < Math.round(blockSize / 3) + 1){
                    return goals[i];
                }
            }
        }

        function checkCrateCollisions(object){
            for(let i = 0; i < crates.length; i++){
                if(isColliding(crates[i], object) && crates[i].crateID !== object.crateID){
                    return true;
                } 
            }
            return false;
        }

        function checkPlayerCollisions(object){
            if(isColliding(player, object) && !object.isPlayer && !player.dead){
                return true;
            } else{
                return false;
            }
        }

        function checkBubbleCollisions(object){
            for(let i = 0; i < bubbles.length; i++){
                if(isColliding(bubbles[i], object)){
                    sounds.collect.currentTime = 0;
                    sounds.collect.volume = volume.masterVolume * volume.sfxVolume;
                    sounds.collect.play();
                    gravityCharges++;
                    bubbles.splice(i, 1);
                }
            }
        }

        function checkShieldCollisions(object){
            for(let i = 0; i < shields.length; i++){
                if(isColliding(shields[i], object) && object.shield === false){
                    sounds.collect.currentTime = 0;
                    sounds.collect.volume = volume.masterVolume * volume.sfxVolume;
                    sounds.collect.play();
                    object.shield = true;
                    shields.splice(i, 1);
                }
            }
        }

        function checkBombCollisions(object){
            for(let i = 0; i < bombs.length; i++){
                if(isColliding(bombs[i], object) && bombs[i].bombID !== object.bombID){
                    return bombs[i];
                }
            }
            return false;
        }

        function checkKeyCollisions(object){
            for(let i = 0; i < keys.length; i++){
                if(isColliding(keys[i], object)){
                    keys.splice(i, 1);
                    sounds.collect.currentTime = 0;
                    sounds.collect.volume = volume.masterVolume * volume.sfxVolume;
                    sounds.collect.play();
                }
            }
        }

        function checkBarrierCollisions(object){
            for(let i = 0; i < barriers.length; i++){
                if(isColliding(barriers[i], object)){
                    return barriers[i].type;
                }
            }
        }
        resetLevel();
        if(levels[currentLevel].dialogue !== undefined){
            if(levels[currentLevel].dialogue.before !== undefined){
                paragraph = levels[currentLevel].dialogue.before
            }
        }
        requestAnimationFrame(gameLoop);
        menuButtons = [];
        menuButtons.push(new MenuButton(440, 10, 30, 30, images.backButton, () => {
            isDialogue = false;
            paragraph = [];
            sentence = "";
            gameOn = false;
            menu = "title";
            loadMenu();
            sounds.music.pause();
            sounds.music.currentTime = 0;
            requestAnimationFrame(titleLoop);
        }));
    }

    function isColliding(first, second){
        return first.x < second.x + second.width &&
            first.x + first.width > second.x &&
            first.y < second.y + second.height &&
            first.y + first.height > second.y;
    }

    window.addEventListener("resize", () => {
        gameCanvasWidth = mainCanvas.getBoundingClientRect().width / 3 + "px"
        gameCanvas.style.width = gameCanvasWidth;
        gameCanvas.style.height = gameCanvasWidth;   
    });

    window.addEventListener("keydown", (e) => {
        
        if(e.keyCode === 37){
            key.left = true;
        }
        if(e.keyCode === 38){
            key.up = true;
        }
        if(e.keyCode === 39){
            key.right = true;
        }
        if(e.keyCode === 40){
            key.down = true;
        }
        if(e.keyCode === 65){
            key.a = true;
        }
        if(e.keyCode === 87){
            key.w = true;
        }
        if(e.keyCode === 68){
            key.d = true;
        }
        if(e.keyCode === 83){
            key.s = true;
        }
        if(e.keyCode === 82){
            key.r = true;
        }
        if(e.keyCode === 32){
            key.space = true;
        }
    });

    window.addEventListener("keyup", (e) => {
        
        if(e.keyCode === 37){
            key.left = false;
        }
        if(e.keyCode === 38){
            key.up = false;
        }
        if(e.keyCode === 39){
            key.right = false;
        }
        if(e.keyCode === 40){
            key.down = false;
        }
        if(e.keyCode === 65){
            key.a = false;
        }
        if(e.keyCode === 87){
            key.w = false;
        }
        if(e.keyCode === 68){
            key.d = false;
        }
        if(e.keyCode === 83){
            key.s = false;
        }
        if(e.keyCode === 82){
            key.r = false;
        }
        if(e.keyCode === 32){
            key.space = false;
        }
    });

    window.addEventListener("mousedown", (e) => {
        if(e.button === 0){
            mouse.leftClick = true;
        }
    })
    window.addEventListener("mouseup", (e) => {
        if(e.button === 0){
            mouse.leftClick = false;
        }
    })

    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })

    window.addEventListener("mousemove", (event) => {
        const rect = mainCanvas.getBoundingClientRect();
        mouse.x = (event.clientX - rect.left) * (480 / rect.width);
        mouse.y = (event.clientY - rect.top) * (270 / rect.height);
    })

    class Slider{
        constructor(x, y, width, height, variable){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.variable = variable;
            this.isGrabbed = false;
        }
        draw(){
            c.drawImage(images.slider, this.x, this.y, this.width, this.height);
        }
        update(){
            volume[this.variable] = ((this.x + this.width / 2) - 140) / 200;
            if(canClickButtons && isColliding(mouse, this) && mouse.leftClick){
                this.grabbed = true;
            }
            if(!mouse.leftClick){
                this.grabbed = false;
            }
            if(this.grabbed){
                this.x = mouse.x;
                if(this.x < 130){
                    this.x = 130;
                }
                if(this.x > 330){
                    this.x = 330;
                }
            }
        }
    }

    let menuButtons = [];
    let sliders = [];

    class MenuButton{
        constructor(x, y, width, height, image, onPress, active = true){
            this.x = x;
            this.y = y;
            this.width = width;
            this.defaultX = x;
            this.defaultY = y;
            this.defaultWidth = width;
            this.defaultHeight = height;
            this.height = height;
            this.image = image;
            this.onPress = onPress;
            this.targetX = x;
            this.targetY = y;
            this.targetWidth = width;
            this.active = active;
        }
        draw(){
            c.drawImage(this.image,this.x,this.y,this.width,this.height)
        }
        update(){
            if(isColliding(this, mouse) && this.active){
                this.targetX = this.defaultX - this.defaultWidth / 6;
                this.targetY = this.defaultY - this.defaultHeight / 6;
                this.targetWidth = this.defaultWidth + this.defaultWidth / 3;
                this.targetHeight = this.defaultHeight + this.defaultHeight / 3;
                if(mouse.leftClick && canClickButtons && this.active){
                    sounds.button.volume = 0.5 * volume.sfxVolume * volume.masterVolume;
                    sounds.button.currentTime = 0;
                    sounds.button.play();
                    this.onPress();
                    canClickButtons = false;
                }
            } else{
                this.targetX = this.defaultX;
                this.targetY = this.defaultY;
                this.targetWidth = this.defaultWidth;
                this.targetHeight = this.defaultHeight;
            }
            this.x += (this.targetX - this.x) / 5;
            this.y += (this.targetY - this.y) / 5;
            this.width += (this.targetWidth - this.width) / 5;
            this.height += (this.targetHeight - this.height) / 5;    
        }
    }

    function loadMenu(){
        menuButtons = [];
        sliders = [];
        if(menu === "title"){
            menuButtons.push(new MenuButton(150, 160, 50, 50, images.playButton, () => {
                cancelAnimationFrame(title);
                startGame(levelsUnlocked);    
                curtainAlpha = 1;   
            }));
            menuButtons.push(new MenuButton(280, 160, 50, 50, images.settingsButton, () => {
                menu = "settings";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(118, 230, 244, 32, images.levelSelect, () => {
                menu = "levelSelect1";
                loadMenu();
            }));
        }
        if(menu === "settings"){
            menuButtons.push(new MenuButton(15, 15, 30, 30, images.backButton, () => {
                menu = "title";
                loadMenu();
            }));
            sliders.push(new Slider(130 + volume.masterVolume * 200, 60, 20, 40, "masterVolume"));
            sliders.push(new Slider(130 + volume.musicVolume * 200, 135, 20, 40, "musicVolume"))
            sliders.push(new Slider(130 + volume.sfxVolume * 200, 210, 20, 40, "sfxVolume"));;
        }
        if(menu === "levelSelect1"){
            menuButtons.push(new MenuButton(15, 15, 30, 30, images.backButton, () => {
                menu = "title";
                loadMenu();
            }));
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 2; j++){
                    if(j * 5 + i + 1 <= levelsUnlocked){
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.levels[j * 5 + i], () => {
                            cancelAnimationFrame(title);
                            startGame(j * 5 + i + 1);        
                            curtainAlpha = 1; 
                        }, true));
                    } else{
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.lockedLevel, () => {}, false));
                    }
                }
            }
        }
        if(menu === "levelSelect2"){
            menuButtons.push(new MenuButton(15, 15, 30, 30, images.backButton, () => {
                menu = "title";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(8, 230, 40, 32, images.leftArrow, () => {
                menu = "levelSelect1";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(432, 230, 40, 32, images.rightArrow, () => {
                menu = "levelSelect3";
                loadMenu();
            }));
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    if(j * 5 + i + 26 <= levelsUnlocked){
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.levels[j * 5 + i + 25], () => {
                            cancelAnimationFrame(title);
                            startGame(j * 5 + i + 26);        
                            curtainAlpha = 1; 
                        }, true));
                    } else{
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.lockedLevel, () => {}, false));
                    }
                }
            }
        }
        if(menu === "levelSelect3"){
            menuButtons.push(new MenuButton(15, 15, 30, 30, images.backButton, () => {
                menu = "title";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(8, 230, 40, 32, images.leftArrow, () => {
                menu = "levelSelect2";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(432, 230, 40, 32, images.rightArrow, () => {
                menu = "levelSelect4";
                loadMenu();
            }));
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    if(j * 5 + i + 51 <= levelsUnlocked){
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.levels[j * 5 + i + 50], () => {
                            cancelAnimationFrame(title);
                            startGame(j * 5 + i + 51);        
                            curtainAlpha = 1; 
                        }, true));
                    } else{
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.lockedLevel, () => {}, false));
                    }
                }
            }
        }
        if(menu === "levelSelect4"){
            menuButtons.push(new MenuButton(15, 15, 30, 30, images.backButton, () => {
                menu = "title";
                loadMenu();
            }));
            menuButtons.push(new MenuButton(8, 230, 40, 32, images.leftArrow, () => {
                menu = "levelSelect3";
                loadMenu();
            }));
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    if(j * 5 + i + 76 <= levelsUnlocked){
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.levels[j * 5 + i + 75], () => {
                            cancelAnimationFrame(title);
                            startGame(j * 5 + i + 76);        
                            curtainAlpha = 1; 
                        }, true));
                    } else{
                        menuButtons.push(new MenuButton(i * 70 + 75, j * 50 + 15, 40, 40, images.lockedLevel, () => {}, false));
                    }
                }
            }
        }
    }
    
    let canClickButtons;
    let title;
    let menu = "title";
    loadMenu();
    function titleLoop(){
        sounds.mainMenuMusic.volume = 0.5 * volume.masterVolume * volume.musicVolume;
        if(sounds.mainMenuMusic.paused){
            sounds.mainMenuMusic.currentTime = 0;
            sounds.mainMenuMusic.loop = true;
            sounds.mainMenuMusic.play();
        }
        if(gameCanvas.style.display = "block"){
            gameCanvas.style.display = "none";
        }
        if(dialogueCanvas.style.display = "block"){
            dialogueCanvas.style.display = "none";
        }
        gameCanvas.style.display = "none";
        title = requestAnimationFrame(titleLoop);
        c.clearRect(0,0,480,270);
        if(menu === "title"){
            c.drawImage(images.title, 30, 40, 460, 92);
            c.drawImage(images.demo, 162, 115, 156, 30)
        }
        if(menu === "settings"){
            c.drawImage(images.settings, 0, 0, 480, 270);
            //80, 135, 210
            c.beginPath();
            c.moveTo(140, 80);
            c.lineTo(340, 80);
            c.lineWidth = 2;
            c.strokeStyle = "rgb(255, 255, 255)";
            c.stroke();
            c.beginPath();
            c.moveTo(140, 155);
            c.lineTo(340, 155);
            c.lineWidth = 2;
            c.strokeStyle = "rgb(255, 255, 255)";
            c.stroke();
            c.beginPath();
            c.moveTo(140, 230);
            c.lineTo(340, 230);
            c.lineWidth = 2;
            c.strokeStyle = "rgb(255, 255, 255)";
            c.stroke();
        }
        for(let i = 0; i < menuButtons.length; i++){
            menuButtons[i].draw();
            menuButtons[i].update();
        }
        for(let i = 0; i < sliders.length; i++){
            sliders[i].draw();
            sliders[i].update();
        }
        if(mouse.leftClick){
            canClickButtons = false;
        } else{
            canClickButtons = true;
        }
        //c.drawImage(images.playButton, 210, 160, 60, 60);
    }

    window.addEventListener("load", () => {
        titleLoop();
    })