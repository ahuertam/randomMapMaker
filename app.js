function Game(obj) {
    this.rows = obj.rows;
    this.columns = obj.columns;
    function gridBackground() {
        for (var rowIndex = 0; rowIndex < obj.rows; rowIndex++) {
            for (var columnIndex = 0; columnIndex < obj.columns; columnIndex++) {
                $('.container').append($('<div>')
                    .addClass('cell map')
                    .attr('data-row', rowIndex)
                    .attr('data-col', columnIndex)
                );
            }
        }
    } // End of function
    gridBackground();
    this.drawWall();
    //////
}
//////////////////////////////////////////////////////////////////
////////////////DRAWING///////////////////////
////////////////////////////////////////

Game.prototype.paintElement = function(position, classToAdd) {
    var posTemp = '[data-row=' + position.row + '][data-col=' + position.column + ']';
    $(posTemp).addClass(classToAdd);
};
Game.prototype.generateWall = function(size, row, column, direction, wallType) {
    this.size = size;
    this.row = row;
    this.column = column;
    this.direction = direction;
    while (size > 0) {
        console.log(row, column, size);
        var wallLong = '[data-row=' + row + '][data-col=' + column + ']';
        $(wallLong).addClass(wallType);
        switch (direction) {
            case 'left':
                row++;
                break;
            case 'right':
                row++;
                break;
            case 'up':
                column--;
                break;
            case 'down':
                column++;
                break;
        }
        size--;
    }
};
Game.prototype.aleatoryNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 2)) + min;
};
Game.prototype.aleatoryWord = function() {
    var options = ["left", "right", "up", "down"];
    var randomize = Math.round(Math.random() * 3);
    return options[randomize];
};
Game.prototype.drawWall = function() {
    //Careful with ROW 0,1
    //BOUNDARY WALLS:
    this.generateWall(22, 0, 20, "up", "wall"); //boundary up
    this.generateWall(21, 0, 0, "right", "wall"); //boundary left
    this.generateWall(16, 0, 19, "right", "wall"); //boundary right
    this.generateWall(21, 13, 0, "down", "wall"); //boundary down
    ////Create elements
    var i = 0;
    while (i < 5) {
        //water
        this.generateWall(this.aleatoryNumber(-1, 0), this.aleatoryNumber(4, 14), this.aleatoryNumber(4, 19), this.aleatoryWord(), "water");
        //Normal Wals
          // once in a while these could change
            this.generateWall(this.aleatoryNumber(0, 6), this.aleatoryNumber(1, 20), this.aleatoryNumber(1, 23), this.aleatoryWord(), "wallBreak");
            this.generateWall(this.aleatoryNumber(0, 7), this.aleatoryNumber(1, 20), this.aleatoryNumber(1, 21), this.aleatoryWord(), "cloud");
            this.generateWall(this.aleatoryNumber(0,4),this.aleatoryNumber(7,14),this.aleatoryNumber(4,14),this.aleatoryWord(),"cloud");
            this.generateWall(this.aleatoryNumber(2, 6), this.aleatoryNumber(1, 20), this.aleatoryNumber(1, 23), this.aleatoryWord(), "wall");
            this.generateWall(this.aleatoryNumber(4, 7), this.aleatoryNumber(1, 20), this.aleatoryNumber(1, 21), this.aleatoryWord(), "wall");
            //this.generateWall(this.aleatoryNumber(2,4),this.aleatoryNumber(7,14),this.aleatoryNumber(4,14),this.aleatoryWord(),"wall");
        // bush
        this.generateWall(this.aleatoryNumber(0, 1), this.aleatoryNumber(1, 14), this.aleatoryNumber(4, 23), this.aleatoryWord(), "bush");
        // A CLOUD 
        this.generateWall(this.aleatoryNumber(0,2),this.aleatoryNumber(4,17),this.aleatoryNumber(3,14),this.aleatoryWord(),"cloud");
        // BreakableWALS wallBreak
        this.generateWall(this.aleatoryNumber(4, 7), this.aleatoryNumber(3, 10), this.aleatoryNumber(2, 19), this.aleatoryWord(), "wallBreak");
        this.generateWall(this.aleatoryNumber(1, 3), this.aleatoryNumber(2, 14), this.aleatoryNumber(2, 19), this.aleatoryWord(), "wallBreak");
        i++;
    }
};
////
/////
var game =new Game({
  rows: 14,
  columns: 20,
});
