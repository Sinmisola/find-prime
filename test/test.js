(function() {
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/findprime.js');

  describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return [2, 3, 5, 7] for 10", function() {
      expect(myApp.primeList(10)).to.eql([2, 3, 5, 7]);
    });

 
   it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function() {
      expect(myApp.primeList(30)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it("should return [2, 3, 5, 7 ] for 9", function() {
      expect(myApp.primeList(9)).to.eql([2, 3, 5, 7 ]);
    });


  });

describe('Return the list of prime numbers in the list', function () {

      it("should return 'no value' for null", function() {
      expect(myApp.primeList(null)).to.equal('no value');
      });

      it("should return 'no value' for undefined", function() {
        expect(myApp.primeList(undefined)).to.equal('no value');
      });


});

});

})();

