// var accessToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJVSmVUR2VNV1VaSHY5cW1ubVBNaUNrR0tEeERQeVExTDZnMmdXVmM1djNsWnQ0emxvbyIsImp0aSI6IjBlNTcyZDg0YzRhOTFkMjRhNTVkNWIzYmIzNTUwMmFjNGMzMjQxYTU0OGE5YWNjZDA1OGYyMmM0ZmE1Y2FmNjk3ZGUwODNhNjRlZjNhZWRkIiwiaWF0IjoxNjUwMTMwMzc1LCJuYmYiOjE2NTAxMzAzNzUsImV4cCI6MTY1MDEzMzk3NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.KnAu8WVihr20Rpn39ITkHK7SDi7Cy5zZ3vkvVpTQFzlSOG7dwrZyL-o_uPALxBRdkcXK6puYy2Khx6CW7cBel00bBn7tCTMIAXXfC5ZLVPbweJSIGQ87DrDQMu1fLfZ27wT6x_a8N5icX34g1_5x7YyAai7nWD-jwGawi4IqlgleYTCj2QvOmJ7cK4tamhzHDWaBv3p7ARdoDMVX4v3GqRHNimrHnwADsgnIMWBgRCcf3mXCd_HzQXM_EEkliiDryCmON-zd9ndvABczFRPdDFJMmNJyym4709M3CzWydyGxRS69OBiOiF6OTV65-ZQG5IArkOs1vt6bXBKeK5VdNg';

// fetch(
//   'https://api.petfinder.com/v2?grant_type=client_credentials&client_id=UJeTGeMWUZHv9qmnmPMiCkGKDxDPyQ1L6g2gWVc5v3lZt4zloo&client_secret=do1HzCHhMERyr3W6J3kJ5w7v9BKEatt199tK9qw1'
//   {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   }
// );

var apiUrl =
  'https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json';
var listEl = document.getElementById('dogs');

fetch(apiUrl)
  .then(function (response) {
    //convert to json
    return response.json();
  })
  .then(function (data) {
    //display in html
    var docArray = data.response.docs;
    for (var i = 0; i < docArray.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = docArray[i].description;
      listEl.appendChild(listItem);
    }
  })
  .catch(function (error) {
    //in case of error
    console.log(error);
  });

// var apiUrl =
//   'https://archive.org/advancedsearch.php?q=subject:google+sheets&output=json';
// var listEl = document.getElementById('cats');

// fetch(apiUrl)
//   .then(function (response) {
//     //convert to json
//     return response.json();
//   })
//   .then(function (data) {
//     //display in html
//     var docArray = data.response.docs;
//     for (var i = 0; i < docArray.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = docArray[i].description;
//       listEl.appendChild(listItem);
//     }
//   })
//   .catch(function (error) {
//     //in case of error
//     console.log(error);
//   });
