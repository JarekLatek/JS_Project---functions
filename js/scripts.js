function getTriangleArea(a, h) {
	
	if ( (a <= 0) || (h <= 0) ) {
		console.log('Nieprawidłowe dane.');
	} else {
		console.log('Dane prawidłowe - obliczam pola trójkątów.');
	}
	return(a*h/2);
}

var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(10, 6),
	triangle3Area = getTriangleArea(12,13);
	
console.log( 'Pole trójkąta 1 wynosi: ' + triangle1Area );
console.log( 'Pole trójkąta 2 wynosi: ' + triangle2Area );
console.log( 'Pole trójkąta 3 wynosi: ' + triangle3Area );