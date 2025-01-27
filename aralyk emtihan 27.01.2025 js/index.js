let box = document.getElementById('box')
let btn = document.getElementById('btn')







async function fetchData() {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7');
      if (!response.ok) {
        throw new Error('Мәліметтерді алу мүмкін болмады');
      }
      let aqparat = await response.json();
      btn.forEach(element => {
        let qorap = document.createElement('div')
    


        box.appendChild(qorap)
      });
      
     
      console.log(aqparat.record);
      
    } catch (error) {
      console.error(error);
     
    }
   
  }

  fetchData()
  
