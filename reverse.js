function reverseString(string) {
	var foo = string.split('');
	var backwards = '';

	for (var i = 0; i < foo.length; i++) {
		backwards += (foo[foo.length - i - 1]);
	}
	return backwards;

}



console.log(reverseString('hello'));
// console.log(reverseString('foo') == 'oof');
// console.log(reverseString('foo') !== 'foo');
// console.log([1,2,3]+'foo')

