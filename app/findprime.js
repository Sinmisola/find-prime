app =
 {
 isPrime: function(number)
      {
          var i;
          for (i=2; i<number; i++) 
          {
              if (number % i === 0 && i != number) 
              {
                return 0;
              }
          }
          return 1;
      },

 primeList: function(N) 
    {
    if(N===null ||N==undefined)
            {
                return "no value";
            }

      var list = [];
       for (var i = 2; i != N; ++i)
         if (app.isPrime(i)) list.push(i);
      return list;
    }

}
module.exports = app;