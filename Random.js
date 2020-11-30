const Random = {
    rec: (min, max) => min + (max - min) * Math.random(),
    tri: n => n * (Math.random() - Math.random())
};

function Binomial(n, p){
    this.n = n;
    this.probs = [0];

    function prob(x){
	function probImpl(acc, m) {
	    return m > x? probImpl( acc * (1-p) * m / (m-x), m-1): acc;
	}
	return Math.pow(p, x) * probImpl( 1, n);
    }

    for(let i = 0; i < n; i++){
	const prev = this.probs[0];	
	this.probs.push( prev + prob(i) );
    }
}
Binomial.prototype.gen = function() {
    return this.probs.findIndex( p => Math.random() <= p );
}
