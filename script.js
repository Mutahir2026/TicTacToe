// 0 1 2
// 3 4 5 
// 6 7 8
// 0 3 6 
// 1 4 7
// 2 5 8
// 0 4 8 
// 2 4 6
let box = [];
box.push(document.getElementById("0"));
box.push(document.getElementById("1"));
box.push(document.getElementById("2"));
box.push(document.getElementById("3"));
box.push(document.getElementById("4"));
box.push(document.getElementById("5"));
box.push(document.getElementById("6"));
box.push(document.getElementById("7"));
box.push(document.getElementById("8"));
let X = new Map(), O = new Map();
let turn = "X",count=0;
let winningcomb=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
for (let i = 0; i < 9; i++) {
    box[i].addEventListener("click", function () {
        // console.log(box[i].innerHTML);
        if (turn == "X") {
            X.set(Number(box[i].innerHTML));
            box[i].innerHTML = "X";
            turn = "O";
             for (let i=0;i<winningcomb.length;i++)
          {
            for (let j=0;j<winningcomb[i].length;j++)
            {
               if (X.has(winningcomb[i][j]))
                {
                    count++;
                    if (count==3)
                    {
                        alert("X won !!");
                        location.reload();
                    }
                } 

            }
            count=0;
          }
        }
        else if (turn == "O") {
            O.set(Number(box[i].innerHTML));
            box[i].innerHTML = "O";
            turn = "X";
            for (let i=0;i<winningcomb.length;i++)
          {
            for (let j=0;j<winningcomb[i].length;j++)
            {
               if (O.has(winningcomb[i][j]))
                {
                    count++;
                    if (count==3)
                    {
                        alert("O won !!");
                        location.reload();
                    }
                } 
                else break;

            }
            count=0;
          }
        }

    });
}