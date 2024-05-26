b = [120, 240, 360, 480, 600, 720, 840, 960, 1080] //coordinates for a

function setup () {
  createCanvas(1200, 1200)
  background(0)
  stars()
  fill(255)
  textSize(150)
  text("Spaceshooter", 150, 600)
  textSize(60)
  text("Press S to Normal Mode", 285, 750)
  text("Press X to Play Classic Mode", 225, 840)
  text("Press Z to Play Hard Mode", 270, 930)
  text("Press C to view Controls", 300, 1020)
  ship(600, 150)
}

let x = 600 // x-coordinate of the shipw
let y = 750 // y-coordinate of the ship

let a = 600 // x-coordinate of the bullet
let c = 75 // y-coordinate of the bullet
let d = 3 // Speed of the bullet

let h = 5 // Hearts
let s = 0 // Score
let m = 0 // Money

let e = 1 // Money Increaser

let g = 120 //Side to Side Movement for the ship

let start = false //Variable for the normal game
let classic = false //Variable for the classic game
let hard = false //Variable for the hard game

// Bullet Speed Increment Variables
let id10 = false
let id20 = false
let id30 = false
let id40 = false
let id50 = false
let id60 = false
let id70 = false
let id80 = false
let id90 = false

let pause = false //Variable for if the game is paused

let menu = true

j = 360 //x-coordinate of the second bullet
k = 75 //y-coordinate of the second bullet

function preload() {
  shoot = loadSound('shoot.mp3')
}

//Spaceship
function ship(x, y) {
  fill(255, 0, 0)
  triangle(x, y, x - 75, y + 225, x + 75, y + 225)
  fill(135, 206, 235)
  triangle(x + 45, y + 195, x + 30, y + 90, x + 225, y + 300)
  triangle(x - 45, y + 195, x - 30, y + 90, x - 225, y + 300)
  fill(255)
}

//Background
function stars() {
  fill(255)
  circle(1092, 267, 15)
  circle(768, 1128, 30)
  circle(612, 852, 30)
  circle(360, 519, 30)
  circle(141, 183, 30)
  circle(300, 300, 30)
  circle(174, 900, 30)
  circle(900, 930, 30)
  fill(255, 0, 255)
  circle(312, 1095, 60)
  circle(120, 120, 60)
  circle(900, 669, 90)
  fill(0, 255, 255)
  circle(333, 633, 60)
  circle(645, 183, 60)
  circle(225, 792, 90)
  circle(1077, 894, 90)
  fill(134, 231, 96)
  circle(987, 963, 90)
  circle(18, 660, 45)
  circle(582, 438, 60)
  circle(900, 834, 60)
}

function draw() {
  if (start) { //Normal Mode
    j = 3000
    stars()
    fill(255)
    ellipse(a, c, 75)
    c += d
    ship(x, y)

    //In Game Text
    textSize(60)
    fill(255, 0, 0)
    text("Hearts:", 30, 990)
    text(h, 231, 990)
    fill(0, 0, 255)
    text("Score:", 30, 1050)
    text(s, 210, 1050)
    fill(0, 255, 0)
    text("$", 30, 1110)
    text(m, 90, 1110)
    textSize(45)
    fill(255)
    text("Slow Down Bullets: $10 (J)", 645, 150)
    text("Move Ship Back: $15 (K)", 690, 210)
    text("Increase Money: $20 (L)", 696, 270)
    text("Increase Hearts: $30 (I)", 690, 330)
    text("Press F to Pause and G to Unpause", 30, 1170)

    fill(255)
    if (c > 1200) {
      c = 75
      h -= 1
      a = random(b)
      background(0)
    }
    if (s == 10) {
      if (!id10) {
        d += 1.5
        id10 = true
      }
    }
    else if (s == 20) {
      if (!id20) {
        d += 1.5
        id20 = true
      }
    }
    else if (s == 30) {
      if (!id30) {
        d += 1.5
        id30 = true
      }
    }
    else if (s == 40) {
      if (!id40) {
        d += 1.5
        id40 = true
      }
    }
    else if (s == 50) {
      if (!id50) {
        d += 1.5
        id50 = true
      }
    }
    else if (s == 60) {
      if (!id60) {
        d += 1.5
        id60 = true
      }
    }
    else if (s == 70) {
      if (!id70) {
        d += 1.5
        id70 = true
      }  
    }
    else if (s == 80) {
      if (!id80) {
        d += 1.5
        id80 = true
      }
    }
    else if (s == 90) {
      if (!id90) {
        d += 1.5
        id90 = true
      }
    }

    // End Game
    if (h <= 0) {
      d = 0
      start = false
      classic = false
      hard = false
      background(0)
      textSize(150)
      text("Game Over:", 120, 600)
      text(s, 960, 600)
      textSize(60)
      text("Press S to Restart", 345, 675)
      text("Press X to Play Classic", 300, 750)
      text("Press Z to Play Hard", 330, 825)
      x = 600
      y = 750
      a = 600
      c = 75
      d = 3
      h = 5
      s = 0
      m = 0
      e = 1
      j = 360
      id10 = false
      id20 = false
      id30 = false
      id40 = false
      id50 = false
      id60 = false
      id70 = false
      id80 = false
      id90 = false
    }
  }
  if (classic) { //Classic Mode
    j = 3000
    m = 0
    stars()
    fill(255)
    ellipse(a, c, 75)
    c += d
    ship(x, y)

    //In Game Text
    textSize(60)
    fill(255, 0, 0)
    text("Hearts:", 30, 990)
    text(h, 231, 990)
    fill(0, 0, 255)
    text("Score:", 30, 1050)
    text(s, 210, 1050)

    fill(255)
    if (c > 1200) {
      c = 75
      h -= 1
      a = random(b)
      background(0)
    }
    if (s == 10) {
      if (!id10) {
        d += 1.5
        id10 = true
      }
    }
    else if (s == 20) {
      if (!id20) {
        d += 1.5
        id20 = true
      }
    }
    else if (s == 30) {
      if (!id30) {
        d += 1.5
        id30 = true
      }
    }
    else if (s == 40) {
      if (!id40) {
        d += 1.5
        id40 = true
      }
    }
    else if (s == 50) {
      if (!id50) {
        d += 1.5
        id50 = true
      }
    }
    else if (s == 60) {
      if (!id60) {
        d += 1.5
        id60 = true
      }
    }
    else if (s == 70) {
      if (!id70) {
        d += 1.5
        id70 = true
      }  
    }
    else if (s == 80) {
      if (!id80) {
        d += 1.5
        id80 = true
      }
    }
    else if (s == 90) {
      if (!id90) {
        d += 1.5
        id90 = true
      }
    }

    //End Game
    if (h <= 0) {
      d = 0
      start = false
      classic = false
      hard = false
      background(0)
      textSize(150)
      text("Game Over:", 120, 600)
      text(s, 960, 600)
      textSize(60)
      text("Press X to Restart", 360, 675)
      text("Press S to Play Normal", 300, 750)
      text("Press Z to Play Hard", 330, 825)
      x = 600
      y = 750
      a = 600
      c = 75
      d = 3
      h = 5
      s = 0
      m = 0
      e = 1
      j = 360
      id10 = false
      id20 = false
      id30 = false
      id40 = false
      id50 = false
      id60 = false
      id70 = false
      id80 = false
      id90 = false
    }
  }
  if (hard) { //Hard Mode
    stars()
    fill(255)
    ellipse(a, c, 75)
    ellipse(j, k, 75)
    c += d
    k += d
    ship(x, y)

    //In Game Text
    textSize(60)
    fill(255, 0, 0)
    text("Hearts:", 30, 990)
    text(h, 231, 990)
    fill(0, 0, 255)
    text("Score:", 30, 1050)
    text(s, 210, 1050)
    fill(0, 255, 0)
    text("$", 30, 1110)
    text(m, 90, 1110)
    textSize(45)
    fill(255)
    text("Slow Down Bullets: $10 (J)", 645, 150)
    text("Move Ship Back: $15 (K)", 690, 210)
    text("Increase Money: $20 (L)", 696, 270)
    text("Increase Hearts: $30 (I)", 690, 330)
    text("Press F to Pause and G to Unpause", 30, 1170)

    fill(255)
    if (c > 1200) {
      c = 75
      h -= 1
      a = random(b)
      background(0)
    }
    if (k > 1200) {
      k = 75
      h -= 1
      j = random(b)
      background(0)
    }
    if (s == 10) {
      if (!id10) {
        d += 1.5
        id10 = true
      }
    }
    else if (s == 20) {
      if (!id20) {
        d += 1.5
        id20 = true
      }
    }
    else if (s == 30) {
      if (!id30) {
        d += 1.5
        id30 = true
      }
    }
    else if (s == 40) {
      if (!id40) {
        d += 1.5
        id40 = true
      }
    }
    else if (s == 50) {
      if (!id50) {
        d += 1.5
        id50 = true
      }
    }
    else if (s == 60) {
      if (!id60) {
        d += 1.5
        id60 = true
      }
    }
    else if (s == 70) {
      if (!id70) {
        d += 1.5
        id70 = true
      }  
    }
    else if (s == 80) {
      if (!id80) {
        d += 1.5
        id80 = true
      }
    }
    else if (s == 90) {
      if (!id90) {
        d += 1.5
        id90 = true
      }
    }

    // End Game
    if (h <= 0) {
      d = 0
      start = false
      classic = false
      hard = false
      background(0)
      textSize(150)
      text("Game Over:", 120, 600)
      text(s, 960, 600)
      textSize(60)
      text("Press Z to Restart", 345, 675)
      text("Press S to Play Normal", 300, 750)
      text("Press X to Play Classic", 300, 825)
      x = 600
      y = 750
      a = 600
      c = 75
      k = 75
      d = 3
      h = 5
      s = 0
      m = 0
      e = 1
      j = 360
      id10 = false
      id20 = false
      id30 = false
      id40 = false
      id50 = false
      id60 = false
      id70 = false
      id80 = false
      id90 = false
    }
  }
}


//Controls
function keyPressed() {
  if (keyCode == 65) {
    if (start || classic || hard) {
      if (x > 180) {
        x -= g
        background(0)
      }
    }
  } //Move Left (A)
  if (keyCode == 68) {
    if (start || classic || hard) {
      if (x < 1000) {
        x += g
        background(0)
      }
    }
  } //Move Right (D)
  if (!pause) {
    if (start || classic || hard) {
      if (keyCode == 87) {
        fill(255, 0, 255)
        rect(x - 15, 0, 30, y)
        shoot.play()
        if (c < y) {
          if (x == a) {
            background(0)
            rect(x - 15, 0, 30, y)
            a = random(b)
            c = 75
            s += 1
            m += e
          }
        }
        if (k < y) {
          if (x == j) {
            background(0)
            rect(x - 15, 0, 30, y)
            j = random(b)
            k = 75
            s += 1
            m += e
          }
        }
      }
    }
  } //Shoot (W)
  if (keyCode == 74) {
    if (m >= 10) {
      d -= 0.3
      m -= 10
    }
    background(0)
  } //Slow Bullet Speed (J)
  if (keyCode == 75) {
    if (y < 900) {
      if (m >= 15) {
        y += 30
        m -= 15
        background(0)
      }
    }
  } //Move Ship Back (K)
  if (keyCode == 76) {
    if (m >= 20) {
      e += 1
      m -= 20
      background(0)
    }
  } //Increase Money Per Bullet (L)
  if (keyCode == 73) {
    if (m >= 30) {
      h += 1
      m -= 30
      background(0)
    }
  } //Increase Hearts (I)
  if (keyCode == 70) {
    if (!pause) {
      f = d
      d = 0
      g = 0
      pause = true
    }
  } //Pause Game (F)
  if (keyCode == 71) {
    if (pause) {
      d = f
      g = 120
      pause = false
    }
  } //Unpause Game (G)
  if (keyCode == 83) {
    start = true
    background(0)
    if (classic) {
      start = false
    }
  } //Play Normal Mode (S)
  if (keyCode == 67) {
    background(0)
    textSize(60)
    text("Move Left: A", 30, 150)
    text("Move Right: D", 30, 225)
    text("Shoot: W", 30, 300)
    text("Upgrades: (Don't Work in Classic)", 30, 375)
    text("Slow Down Bullets ($10): J", 30, 450)
    text("Move Ship Back ($15): K", 30, 525)
    text("Increase Money Per Bullet ($20): L", 30, 600)
    text("Increase Hearts ($30): I", 30, 675)
    text("Pause: F", 30, 750)
    text("Unpause: G", 30, 825)
    text("Press Space to Return to Menu", 30, 945)
    menu = false
  } //Check Controls (C)
  if (keyCode == 88) {
    classic = true
    background(0)
    if (start) {
      classic = false
    }
  } //Play Classic Mode (X)
  if (keyCode == 32) {
    if (!menu) {
      background(0)
      stars()
      fill(255)
      textSize(150)
      text("Spaceshooter", 150, 600)
      textSize(60)
      text("Press S to Normal Mode", 285, 750)
      text("Press X to Play Classic Mode", 225, 840)
      text("Press Z to Play Hard Mode", 270, 930)
      text("Press C to view Controls", 300, 1020)
      ship(600, 150)
    }
  } //Return to Main Menu from Control Menu
  if (keyCode == 90) {
    hard = true
    background(0)
  }
}
