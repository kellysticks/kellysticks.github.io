//Begin loop at 100 and decrement
for(let i = 100; i >= 0; i--){
    let newNum = i;
    if(i === 0){
        console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
    } if (i === 1){
        console.log(i + ' bottle of beer on the wall, ' + i + ' bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.')
    } if (i === 2){
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.')
    } if (i >= 3){
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + --newNum + ' bottles of beer on the wall.')
    }
}