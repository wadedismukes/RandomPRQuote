// So first I need to read in data: :checkmark:
// next I need to sort the data into an object
// object could be a few ways I think:
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
        console.log(episodeGetter(files[i]));
        data.push(fs.readFileSync(files[i], "utf8"));
    }

    for(let j in data) {
        data[j] = data[j].split('\r\n');
        for (let i in data[j]) { 
            data[j][i] = data[j][i].split(/(\w+\s\w+)\,(.+)/, 3);
            data[j][i] = data[j][i].slice(1,3);
        }
    }
    return data;
}


const d = readInData();

