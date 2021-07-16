// So first I need to read in data: :checkmark:
// next I need to sort the data into an object
// object could be a few ways I think:

const { type } = require('os');

//      have an element of season which has a numeric and another lis
function readInData() {
    const seasonGetter = str => {
        let seas = str.search(/s(\d)/);
        let numStr = str[seas+1];
        return Number(numStr);
    };
    const episodeGetter = str => {
        let seas = str.search(/e(\d\d)/);
        let numStr = str[seas+1] + str[seas+2];
        return Number(numStr);
    };
    var fs = require('fs');
    var files = fs.readdirSync('./data/');
    files = files.map(f => {return './data/' + f});
    var data = [];
    for(let i in files) {
        //console.log(seasonGetter(files[i]));
        data.push(fs.readFileSync(files[i], "utf8"));
    }

    for(let j in data) {
        data[j] = data[j].split('\r\n');
        for (let i in data[j]) { 

            data[j][i] = data[j][i].split(/,/);
           // console.log(data[j][i]);
           // data[j][i] = data[j][i].slice(1,3);
          //  console.log(data[j][i]);
          //  console.log("*****************");


        }
    }
    return data;
}


const convertToObject = data => {
    let charObj = {
        "Leslie Knope": [],
        "Ron Swanson": [],
        "Donna Meagle": [],
        "Andy Dwyer": [],
        "April Ludgate": [],
        "Ben Wyatt": [],
        "Chris Traeger": [],
        "Jerry Gergich": [],
        "Tom Haverford": [],
        "Ann Perkins": [],
        "Jean-Ralphio Saperstein": [],
        "Extra": [],
        addMinorChar: function(charName, line){
            const cn = String(charName);
            const c = Object.keys(this);
            if(cn !== undefined) {
                let noKey = c.includes(cn);
                if(!noKey){
                    this[cn] = [line];
                }
                else{
                    this[cn].push(line);
                }
            }
        },
        randomLine: function(name){
            const d = this[name];
            d.length;
            let numWords;
            let line;
            do {
                let randLine = Math.floor(Math.random() * d.length);
                line = this[name][randLine];
                if(line[0] === '"')
                    line = line.slice(1)
                if(line[-1] === '"')
                    line = line.slice(0,-1)
                let words = line.split(/\s/);
                numWords = words.length;
            }
            while(numWords < 3);
            return line;
        }

    }
        
    for(let i in data) {
        for(let j in data) {
            switch(data[i][j][0]){
                case "Leslie Knope":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Ron Swanson":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Donna Meagle":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Andy Dwyer": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "April Ludgate": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Ben Wyatt":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Chris Traeger": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Jerry Gergich": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Tom Haverford": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Ann Perkins": 
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Jean-Ralphio Saperstein":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                case "Extra":
                    charObj[data[i][j][0]].push(data[i][j][1]);
                    break;
                default:
                    charObj.addMinorChar(data[i][j][0], data[i][j][1])
                    break;

            }
        }
    }
    return charObj;
};

const d = readInData();
const obj = convertToObject(d);
const checkKeys = Object.keys(obj);
console.log(obj.randomLine("Donna Meagle"))
