function run(charArray) {
    //console.log(charArray[0].name);
    return JSON.stringify(charArray.map(chr => ({
	name: chr.name,
	side: chr.side,
	ids: chr.poses.map(pose => pose.id)
    })));
}

console.log(run(characters))

// replace with extracted character data
var characters = [];
