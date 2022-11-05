
const eat = document.getElementById("myform")

const getcontent = (e) => {

    e.preventDefault();
    const fruit = document.forms['myform']['food'].value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
        }
    };

    fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${fruit}`, options)
        .then(response => response.json())
        .then(response => {
            
            if (response == ""){
                alert("invalid data");
            }

            else {
                document.getElementById('box').innerHTML = `
                 <h1>Nutration Information</h1>
                <table>
                   <tr class="one">
                      <th>Content Name -</th>
                      <td>${response.items[0].name}</td>
                   </tr>

                   <tr>
                   <th>Gram(g) -</th>
                   <td>${response.items[0].serving_size_g}</td>
                </tr>

                <tr>
                  <th>Calories(kcal) -</th>
                  <td>${response.items[0].calories}</td>
                </tr>

                <tr>
                <th>Fiber(g) -</th>
                <td>${response.items[0].fiber_g}</td>
              </tr>

              <tr>
       <th>Protein(g) -</th>
       <td>${response.items[0].protein_g}</td>
      </tr>

      <tr>
   <th>Sugar(g) -</th>
   <td>${response.items[0].sugar_g}</td>
</tr>

<tr>
   <th>Carbohydrates(g) -</th>
   <td>${response.items[0].carbohydrates_total_g}</td>
</tr>

<tr>
   <th>Cholesterol(mg) -</th>
   <td>${response.items[0].cholesterol_mg}</td>
</tr>



<tr>
   <th>Total Fat(g) -</th>
   <td>${response.items[0].fat_total_g}</td>
</tr>


<tr>
   <th>Potassium(g) -</th>
   <td>${response.items[0].potassium_mg}</td>
</tr>



<tr>
   <th>Sodium(mg) -</th>
   <td>${response.items[0].sodium_mg}</td>
</tr>
      
                </table>
                    `
            }
        })
        .catch(err => console.error(err));
}

eat.addEventListener("submit", getcontent)

