function counttestscores(arrayoftestscores) {
    let passingnumbers= 0;
    for (i=0; i <= arrayoftestscores.length; i++)
    {
      if(arrayoftestscores[i]>=80) {
        passingnumbers++;
      }

    }
  
  return passingnumbers;
}

counttestscores([23,78,90,100]);